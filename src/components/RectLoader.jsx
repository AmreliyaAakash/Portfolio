import React from "react";

const RectLoader = () => {
  const items = Array.from({ length: 20 });

  return (
    <>
      <style>{`
        :root {
          --ln: 0.5vmin;
          --sp: 3.75s;
        }

        body {
          margin: 0;
        }

        .loader-wrapper {
          width: 100vw;
          height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          background: radial-gradient(circle at 50% 50%, #010101, #030303);
          perspective: 100vmin;
          overflow: hidden;
          position: fixed;
          top: 0;
          left: 0;
          z-index: 9999;
        }

        .content {
          width: 60vmin;
          height: 60vmin;
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          transform-style: preserve-3d;
        }

        .content div {
          position: absolute;
          animation: loading var(--sp) ease infinite;
          clip-path: polygon(50% var(--cp), 0% 100%, 100% 100%);
        }

        .content div::before,
        .content div::after {
          content: "";
          position: absolute;
          width: var(--ln);
          height: 100%;
          bottom: 0.1vmin;
          border-radius: 1vmin;
        }

        .content div::before {
          transform-origin: 100% 100%;
          transform: rotate(29.85deg);
          background: linear-gradient(0deg, #1fa5ff, #0b8cdf);
        }

        .content div::after {
          transform-origin: 0% 100%;
          transform: rotate(-29.85deg);
          background: linear-gradient(180deg, #0b8cdf, #196291);
          right: 0;
        }

        .content span {
          background: linear-gradient(90deg, #fff0 25%, #0d4e78);
          width: 100%;
          height: var(--ln);
          position: absolute;
          bottom: 0;
          border-radius: 1vmin;
          z-index: 1;
        }

        @keyframes loading {
          0%,30%,90%,100% {
            transform: rotateY(0deg);
            filter: none;
          }

          50% {
            transform: rotateY(60deg);
            filter: hue-rotate(15deg) saturate(1.5) brightness(0.75) contrast(1.5);
          }

          60% {
            filter: hue-rotate(15deg) saturate(1.25) brightness(0.85) contrast(1.25);
          }

          70% {
            transform: rotateY(-60deg);
            filter: hue-rotate(15deg) saturate(1.5) brightness(0.75) contrast(1.5);
          }
        }
      `}</style>

      <div className="loader-wrapper">
        <div className="content">
          {items.map((_, i) => {
            const size = (i + 1) * 5;
            const cp =
              i >= 8 ? "12.5%" : i >= 3 ? "12%" : "10%";

            return (
              <div
                key={i}
                style={{
                  "--cp": cp,
                  width: `${size}%`,
                  height: `${size}%`,
                  marginBottom: `${(i + 1) * 1}vmin`,
                  animationDelay: `${(i + 1) * (3.75 / 80)}s`
                }}
              >
                <span></span>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default RectLoader;
