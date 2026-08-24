import { useRef, useLayoutEffect, useState, Component } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { EffectComposer, Bloom } from '@react-three/postprocessing';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import heroBg from '@assets/hero.png';

// React error boundary catches render-time Three.js errors
class WebGLErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { crashed: false };
  }

  static getDerivedStateFromError() {
    return { crashed: true };
  }

  componentDidCatch() {
    // Fallback handles WebGL errors
  }

  render() {
    return this.state.crashed
      ? this.props.fallback
      : this.props.children;
  }
}

// Check WebGL support
function hasWebGL() {
  try {
    const canvas = document.createElement('canvas');

    return !!(
      window.WebGLRenderingContext &&
      (canvas.getContext('webgl') ||
        canvas.getContext('experimental-webgl'))
    );
  } catch {
    return false;
  }
}

// --------------------------------------------------
// 3D CITY
// --------------------------------------------------

function City() {
  const group = useRef(null);
  const { viewport } = useThree();

  const isMobile = viewport.width < 7;

  // Rotate the city
  useFrame((state) => {
    if (group.current) {
      group.current.rotation.y =
        state.clock.getElapsedTime() * 0.05;
    }
  });

  // --------------------------------------------------
  // Buildings
  // Desktop: 25
  // Mobile: 12
  // --------------------------------------------------

  const buildings = [];

  const buildingCount = isMobile ? 12 : 25;

  for (let i = 0; i < buildingCount; i++) {
    const height = Math.random() * 8 + 2;
    const width = 1 + Math.random() * 2;
    const depth = 1 + Math.random() * 2;

    const x = (Math.random() - 0.5) * 40;
    const z = (Math.random() - 0.5) * 40;

    // Don't place buildings in center road
    if (Math.abs(x) < 5 && Math.abs(z) < 5) {
      continue;
    }

    buildings.push(
      <mesh
        key={`building-${i}`}
        position={[x, height / 2, z]}
      >
        <boxGeometry
          args={[width, height, depth]}
        />

        <meshStandardMaterial
          color="#0a0a0a"
          roughness={0.8}
          metalness={0.2}
        />
      </mesh>
    );
  }

  // --------------------------------------------------
  // STREET LIGHTS
  // Desktop: 8 each side
  // Mobile: 4 each side
  // --------------------------------------------------

  const lights = [];

  const lightCount = isMobile ? 4 : 8;

  for (let i = 0; i < lightCount; i++) {
    const zPos = (i - lightCount / 2) * 5;

    // -----------------------------
    // LEFT SIDE
    // -----------------------------

    lights.push(
      <group
        key={`left-${i}`}
        position={[-3, 0, zPos]}
      >
        <mesh position={[0, 2, 0]}>
          <cylinderGeometry
            args={[0.05, 0.1, 4]}
          />

          <meshStandardMaterial color="#222" />
        </mesh>

        <mesh
          position={[0.5, 3.9, 0]}
          rotation={[0, 0, Math.PI / 2]}
        >
          <cylinderGeometry
            args={[0.03, 0.03, 1]}
          />

          <meshStandardMaterial color="#222" />
        </mesh>

        {/* LED light */}
        <mesh position={[1, 3.8, 0]}>
          <boxGeometry
            args={[0.4, 0.1, 0.2]}
          />

          <meshStandardMaterial
            color="#fff"
            emissive="#FCD34D"
            emissiveIntensity={6}
            toneMapped={false}
          />
        </mesh>
      </group>
    );

    // -----------------------------
    // RIGHT SIDE
    // -----------------------------

    lights.push(
      <group
        key={`right-${i}`}
        position={[3, 0, zPos]}
        rotation={[0, Math.PI, 0]}
      >
        <mesh position={[0, 2, 0]}>
          <cylinderGeometry
            args={[0.05, 0.1, 4]}
          />

          <meshStandardMaterial color="#222" />
        </mesh>

        <mesh
          position={[0.5, 3.9, 0]}
          rotation={[0, 0, Math.PI / 2]}
        >
          <cylinderGeometry
            args={[0.03, 0.03, 1]}
          />

          <meshStandardMaterial color="#222" />
        </mesh>

        {/* LED light */}
        <mesh position={[1, 3.8, 0]}>
          <boxGeometry
            args={[0.4, 0.1, 0.2]}
          />

          <meshStandardMaterial
            color="#fff"
            emissive="#FCD34D"
            emissiveIntensity={6}
            toneMapped={false}
          />
        </mesh>
      </group>
    );
  }

  // --------------------------------------------------
  // HIGH MAST
  // --------------------------------------------------

  lights.push(
    <group
      key="highmast"
      position={[0, 0, -15]}
    >
      <mesh position={[0, 6, 0]}>
        <cylinderGeometry
          args={[0.2, 0.5, 12]}
        />

        <meshStandardMaterial color="#333" />
      </mesh>

      <mesh position={[0, 12, 0]}>
        <cylinderGeometry
          args={[1.5, 1.5, 0.2]}
        />

        <meshStandardMaterial color="#111" />
      </mesh>

      {[0, Math.PI / 2, Math.PI, Math.PI * 1.5].map(
        (angle, i) => (
          <group
            key={`hm-l-${i}`}
            rotation={[0, angle, 0]}
            position={[0, 12, 0]}
          >
            <mesh
              position={[1.4, -0.2, 0]}
              rotation={[0, 0, Math.PI / 4]}
            >
              <boxGeometry
                args={[0.5, 0.2, 0.4]}
              />

              <meshStandardMaterial
                color="#fff"
                emissive="#ffffff"
                emissiveIntensity={8}
                toneMapped={false}
              />
            </mesh>
          </group>
        )
      )}
    </group>
  );

  return (
    <group ref={group}>
      {/* Ground */}
      <mesh
        rotation={[-Math.PI / 2, 0, 0]}
        position={[0, 0, 0]}
      >
        <planeGeometry args={[100, 100]} />

        <meshStandardMaterial
          color="#050505"
          roughness={0.1}
          metalness={0.8}
        />
      </mesh>

      {buildings}
      {lights}
    </group>
  );
}

// --------------------------------------------------
// SCENE
// --------------------------------------------------

function Scene() {
  return (
    <>
      <color
        attach="background"
        args={['#030303']}
      />

      <fog
        attach="fog"
        args={['#030303', 10, 40]}
      />

      <ambientLight intensity={0.1} />

      <City />

      {/* Lightweight Bloom */}
      <EffectComposer>
        <Bloom
          luminanceThreshold={0.8}
          luminanceSmoothing={0.6}
          height={150}
          opacity={0.8}
          intensity={1}
        />
      </EffectComposer>
    </>
  );
}

// --------------------------------------------------
// HERO
// --------------------------------------------------

export default function Hero() {
  const [webGLSupported] = useState(() => {
    if (typeof window === 'undefined') {
      return false;
    }

    return hasWebGL();
  });

  const [isHeroVisible, setIsHeroVisible] =
    useState(true);

  const containerRef = useRef(null);
  const headlineRef = useRef(null);
  const subheadRef = useRef(null);
  const ctaRef = useRef(null);

  // --------------------------------------------------
  // Detect when Hero is visible
  // --------------------------------------------------

  useLayoutEffect(() => {
    const element = containerRef.current;

    if (!element) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsHeroVisible(entry.isIntersecting);
      },
      {
        threshold: 0.05,
      }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, []);

  // --------------------------------------------------
  // GSAP Animation
  // --------------------------------------------------

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        defaults: {
          ease: 'power3.out',
        },
      });

      tl.fromTo(
        headlineRef.current,
        {
          y: 50,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1.2,
          delay: 0.2,
        }
      )
        .fromTo(
          subheadRef.current,
          {
            y: 30,
            opacity: 0,
          },
          {
            y: 0,
            opacity: 1,
            duration: 1,
          },
          '-=0.8'
        )
        .fromTo(
          ctaRef.current?.children || [],
          {
            y: 20,
            opacity: 0,
          },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            stagger: 0.1,
          },
          '-=0.6'
        );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative w-full h-[100dvh] min-h-[700px] flex items-center justify-center overflow-hidden"
    >
      {/* -------------------------------------------
          3D BACKGROUND
      -------------------------------------------- */}

      <div className="absolute inset-0 z-0 pointer-events-none">
        {webGLSupported ? (
          <WebGLErrorBoundary
            fallback={
              <div
                className="w-full h-full bg-cover bg-center"
                style={{
                  backgroundImage: `url(${heroBg})`,
                }}
              />
            }
          >
            <Canvas
              frameloop={
                isHeroVisible
                  ? 'always'
                  : 'never'
              }
              camera={{
                position: [0, 8, 20],
                fov: 45,
              }}
              dpr={[1, 1.25]}
              gl={{
                antialias: false,
                failIfMajorPerformanceCaveat: false,
                powerPreference: 'high-performance',
              }}
            >
              <Scene />
            </Canvas>
          </WebGLErrorBoundary>
        ) : (
          <div
            className="w-full h-full bg-cover bg-center"
            style={{
              backgroundImage: `url(${heroBg})`,
            }}
          />
        )}
      </div>

      {/* -------------------------------------------
          HERO IMAGE OVERLAY
      -------------------------------------------- */}

      <div
        className="absolute inset-0 z-0 bg-cover bg-center opacity-30"
        style={{
          backgroundImage: `url(${heroBg})`,
        }}
      />

      {/* Gradient overlay */}
      <div className="absolute inset-0 z-10 bg-gradient-to-t from-background via-background/40 to-background/80 pointer-events-none" />

      {/* Radial overlay */}
      <div className="absolute inset-0 z-10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-black/50 to-black pointer-events-none" />

      {/* -------------------------------------------
          CONTENT
      -------------------------------------------- */}

      <div className="container mx-auto px-6 md:px-12 relative z-20 flex flex-col items-center text-center mt-20">
        
        {/* Government Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-primary text-xs font-semibold uppercase tracking-wider mb-8 backdrop-blur-md">
          
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full rounded-full bg-primary opacity-75 animate-ping" />

            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
          </span>

          Government Approved Contractor
        </div>

        {/* Heading */}
        <h1
          ref={headlineRef}
          className="text-5xl md:text-7xl lg:text-8xl font-display font-bold text-white tracking-tighter leading-[1.1] mb-6 max-w-5xl"
        >
          Illuminating India's{' '}

          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-amber-glow">
            Infrastructure
          </span>
        </h1>

        {/* Description */}
        <p
          ref={subheadRef}
          className="text-lg md:text-2xl text-gray-300 max-w-2xl mb-12 font-light leading-relaxed"
        >
          Trusted lighting partner for Government,
          Infrastructure, Industrial & Commercial
          sectors.
        </p>

        {/* Buttons */}
        <div
          ref={ctaRef}
          className="flex flex-col sm:flex-row items-center gap-4"
        >
          <Link
            to="/projects"
            className="px-8 py-4 bg-primary text-black font-bold uppercase tracking-widest text-sm rounded-sm hover:bg-amber-glow transition-all hover:shadow-[0_0_30px_rgba(245,158,11,0.4)]"
          >
            Explore Projects
          </Link>

          <Link
            to="/products"
            className="px-8 py-4 bg-white/5 border border-white/10 text-white font-bold uppercase tracking-widest text-sm rounded-sm hover:bg-white/10 transition-all hover:border-primary/50 backdrop-blur-sm"
          >
            View Products
          </Link>
        </div>
      </div>
    </section>
  );
}