import { useCallback, useDebugValue, useMemo, useRef, useSyncExternalStore } from 'react';

function is(x, y) {
  return x === y && (x !== 0 || 1 / x === 1 / y) || x !== x && y !== y;
}

export function useSyncExternalStoreWithSelector(
  subscribe,
  getSnapshot,
  getServerSnapshot,
  selector,
  isEqual,
) {
  const instRef = useRef(null);

  if (instRef.current === null) {
    instRef.current = {
      hasValue: false,
      value: null,
    };
  }

  const [getSelection, getServerSelection] = useMemo(() => {
    let hasMemo = false;
    let memoizedSnapshot;
    let memoizedSelection;

    const memoizedSelector = (nextSnapshot) => {
      if (!hasMemo) {
        hasMemo = true;
        memoizedSnapshot = nextSnapshot;
        const nextSelection = selector(nextSnapshot);

        if (isEqual !== undefined && instRef.current.hasValue) {
          const currentSelection = instRef.current.value;
          if (isEqual(currentSelection, nextSelection)) {
            memoizedSelection = currentSelection;
            return currentSelection;
          }
        }

        memoizedSelection = nextSelection;
        return nextSelection;
      }

      const previousSnapshot = memoizedSnapshot;
      const previousSelection = memoizedSelection;

      if (is(previousSnapshot, nextSnapshot)) {
        return previousSelection;
      }

      const nextSelection = selector(nextSnapshot);

      if (isEqual !== undefined && isEqual(previousSelection, nextSelection)) {
        memoizedSnapshot = nextSnapshot;
        return previousSelection;
      }

      memoizedSnapshot = nextSnapshot;
      memoizedSelection = nextSelection;
      return nextSelection;
    };

    const getSnapshotWithSelector = () => memoizedSelector(getSnapshot());
    const getServerSnapshotWithSelector =
      getServerSnapshot === undefined || getServerSnapshot === null
        ? undefined
        : () => memoizedSelector(getServerSnapshot());

    return [getSnapshotWithSelector, getServerSnapshotWithSelector];
  }, [getSnapshot, getServerSnapshot, selector, isEqual]);

  const value = useSyncExternalStore(
    subscribe,
    getSelection,
    getServerSelection,
  );

  useDebugValue(value);

  useMemo(() => {
    instRef.current.hasValue = true;
    instRef.current.value = value;
  }, [value]);

  return value;
}

const shim = { useSyncExternalStoreWithSelector };

export default shim;
