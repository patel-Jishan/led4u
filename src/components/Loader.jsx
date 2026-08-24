import React from "react";

import favicon from "@assets/Faviconloader.png";

const LOGO_SRC = favicon;

const BULB_SVG_MARKUP = `
  <svg viewBox="0 0 24 34" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <radialGradient id="glassGrad" cx="35%" cy="30%" r="70%">
        <stop offset="0%" stop-color="#fff2d6"/>
        <stop offset="45%" stop-color="#ffb238"/>
        <stop offset="100%" stop-color="#ff7a00"/>
      </radialGradient>
    </defs>

    <path
      d="M12 1 C6 1 2 5.2 2 10.6 C2 14.4 4.1 16.9 6 19
         C7.4 20.6 8.2 21.8 8.4 23.4
         L15.6 23.4 C15.8 21.8 16.6 20.6 18 19
         C19.9 16.9 22 14.4 22 10.6
         C22 5.2 18 1 12 1 Z"
      fill="url(#glassGrad)"
      stroke="#ff9900"
      stroke-width="0.6"
    />

    <rect
      x="8.6"
      y="23.6"
      width="6.8"
      height="2"
      rx="0.4"
      fill="#3a2a1a"
    />

    <rect
      x="9"
      y="25.9"
      width="6"
      height="1.6"
      rx="0.4"
      fill="#2a1d12"
    />

    <rect
      x="9.3"
      y="27.7"
      width="5.4"
      height="1.6"
      rx="0.4"
      fill="#1c1209"
    />

    <path
      d="M9.5 8 L14.5 8 L10.8 13 L13.2 13 L9 19 L10.6 14 L8.3 14 Z"
      fill="#fff6e0"
      opacity="0.85"
    />
  </svg>
`;

function getBulbPositions(count, radiusPercent = 50) {
  return Array.from({ length: count }, (_, i) => {
    const angle = (360 / count) * i;
    const rad = (angle * Math.PI) / 180;

    return {
      left: 50 + radiusPercent * Math.cos(rad) + "%",
      top: 50 + radiusPercent * Math.sin(rad) + "%",
    };
  });
}

function BulbRing({ id, className, count, delayStep, small }) {
  const positions = getBulbPositions(count);

  return (
    <div id={id} className={`bulb-ring ${className || ""}`}>
      {positions.map((pos, i) => (
        <div
          key={i}
          className={`bulb${small ? " bulb-small" : ""}`}
          style={{
            left: pos.left,
            top: pos.top,
            animationDelay: `${i * delayStep}s`,
          }}
          dangerouslySetInnerHTML={{
            __html: BULB_SVG_MARKUP,
          }}
        />
      ))}
    </div>
  );
}

export default function Loader() {
  return (
    <div className="led4u-loader-root">
      <div className="led4u-loader-wrap">

        {/* Outer Guide Ring */}
        <div className="guide-ring" />

        {/* Inner Guide Ring */}
        <div className="guide-ring inner" />

        {/* Ambient Glow */}
        <div className="ring-ambient" />

        {/* Outer Bulbs */}
        <BulbRing
          id="outerRing"
          count={14}
          delayStep={0.13}
        />

        {/* Inner Bulbs */}
        <BulbRing
          id="innerRing"
          className="reverse"
          count={9}
          delayStep={0.16}
          small
        />

        {/* LED4U Logo */}
        <div className="logo-circle">
          <img
            src={LOGO_SRC}
            alt="LED4U Trinayan Corporation"
          />
        </div>

        {/* Loading Text */}
        <div className="loading-text">
          Loading
          <span>.</span>
          <span>.</span>
          <span>.</span>
        </div>

      </div>

      <style>{`
        .led4u-loader-root {
          position: fixed;
          inset: 0;

          width: 100vw;
          height: 100vh;
          height: 100dvh;

          background:
            radial-gradient(
              circle at center,
              #171310 0%,
              #0d0b08 55%,
              #050403 100%
            );

          display: flex;
          align-items: center;
          justify-content: center;

          overflow: hidden;

          z-index: 999999;

          font-family:
            'Segoe UI',
            Arial,
            sans-serif;
        }

        .led4u-loader-wrap {
          position: relative;

          width: 360px;
          height: 360px;

          display: flex;
          align-items: center;
          justify-content: center;

          flex-shrink: 0;
        }

        /* =========================
           GUIDE RINGS
        ========================= */

        .guide-ring {
          position: absolute;

          width: 100%;
          height: 100%;

          border-radius: 50%;

          border:
            1px solid
            rgba(255, 153, 0, 0.18);
        }

        .guide-ring.inner {
          width: 78%;
          height: 78%;

          border-color:
            rgba(255, 153, 0, 0.12);
        }

        /* =========================
           AMBIENT GLOW
        ========================= */

        .ring-ambient {
          position: absolute;

          width: 58%;
          height: 58%;

          border-radius: 50%;

          background:
            radial-gradient(
              circle,
              rgba(255, 153, 0, 0.30) 0%,
              rgba(255, 153, 0, 0.08) 55%,
              transparent 75%
            );

          filter: blur(8px);

          animation:
            led4u-pulse
            2.6s
            ease-in-out
            infinite;
        }

        /* =========================
           BULB RINGS
        ========================= */

        .bulb-ring {
          position: absolute;

          width: 100%;
          height: 100%;

          border-radius: 50%;

          animation:
            led4u-spin
            8s
            linear
            infinite;
        }

        .bulb-ring.reverse {
          width: 78%;
          height: 78%;

          animation:
            led4u-spin-rev
            11s
            linear
            infinite;
        }

        /* =========================
           BULBS
        ========================= */

        .bulb {
          position: absolute;

          top: 50%;
          left: 50%;

          width: 20px;
          height: 20px;

          margin:
            -10px
            0
            0
            -10px;

          animation:
            led4u-bulb-glow
            1.8s
            ease-in-out
            infinite;

          transform-origin: center;
        }

        .bulb svg {
          width: 100%;
          height: 100%;

          overflow: visible;
        }

        .bulb-small {
          width: 14px;
          height: 14px;

          margin:
            -7px
            0
            0
            -7px;
        }

        /* =========================
           LOGO
        ========================= */

        .logo-circle {
          position: relative;

          width: 58%;
          height: 58%;

          border-radius: 50%;

          overflow: hidden;

          display: flex;
          align-items: center;
          justify-content: center;

          background: #000;

          box-shadow:
            0 0 24px
            rgba(255, 153, 0, 0.35),

            0 0 50px
            rgba(0, 0, 0, 0.6);

          animation:
            led4u-breathe
            2.6s
            ease-in-out
            infinite;
        }

        .logo-circle img {
          width: 100%;
          height: 100%;

          object-fit: contain;

          object-position: center;

          display: block;
        }

        /* =========================
           LOADING TEXT
        ========================= */

        .loading-text {
          position: absolute;

          bottom: -46px;

          color:
            rgba(255, 255, 255, 0.55);

          font-size: 13px;

          letter-spacing: 4px;

          text-transform: uppercase;

          white-space: nowrap;
        }

        .loading-text span {
          animation:
            led4u-blink
            1.4s
            infinite;
        }

        .loading-text span:nth-child(2) {
          animation-delay: 0.2s;
        }

        .loading-text span:nth-child(3) {
          animation-delay: 0.4s;
        }

        /* =========================
           ANIMATIONS
        ========================= */

        @keyframes led4u-spin {
          to {
            transform: rotate(360deg);
          }
        }

        @keyframes led4u-spin-rev {
          to {
            transform: rotate(-360deg);
          }
        }

        @keyframes led4u-pulse {
          0%,
          100% {
            opacity: 0.6;
            transform: scale(1);
          }

          50% {
            opacity: 1;
            transform: scale(1.08);
          }
        }

        @keyframes led4u-breathe {
          0%,
          100% {
            transform: scale(1);
          }

          50% {
            transform: scale(1.03);
          }
        }

        @keyframes led4u-blink {
          0%,
          100% {
            opacity: 0.2;
          }

          50% {
            opacity: 1;
          }
        }

        @keyframes led4u-bulb-glow {
          0%,
          100% {
            opacity: 0.4;

            filter:
              drop-shadow(
                0 0 2px
                rgba(255, 153, 0, 0.4)
              );

            transform: scale(0.9);
          }

          50% {
            opacity: 1;

            filter:
              drop-shadow(
                0 0 7px
                rgba(255, 153, 0, 0.95)
              );

            transform: scale(1.08);
          }
        }

        /* =========================
           MOBILE
        ========================= */

        @media (max-width: 640px) {
          .led4u-loader-wrap {
            width: 270px;
            height: 270px;
          }

          .bulb {
            width: 16px;
            height: 16px;

            margin:
              -8px
              0
              0
              -8px;
          }

          .bulb-small {
            width: 11px;
            height: 11px;

            margin:
              -5.5px
              0
              0
              -5.5px;
          }

          .loading-text {
            bottom: -38px;

            font-size: 10px;

            letter-spacing: 3px;
          }
        }

        /* =========================
           SMALL PHONES
        ========================= */

        @media (max-width: 380px) {
          .led4u-loader-wrap {
            width: 230px;
            height: 230px;
          }

          .bulb {
            width: 14px;
            height: 14px;

            margin:
              -7px
              0
              0
              -7px;
          }

          .bulb-small {
            width: 9px;
            height: 9px;

            margin:
              -4.5px
              0
              0
              -4.5px;
          }

          .loading-text {
            bottom: -34px;

            font-size: 9px;

            letter-spacing: 2px;
          }
        }
      `}</style>
    </div>
  );
}