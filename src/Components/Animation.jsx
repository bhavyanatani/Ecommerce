import React, { useEffect, useState } from "react"; 
import { useNavigate } from "react-router-dom";
import Plasma from "./Plasma";

export default function Animation() {
  const hoverIntensity = 0.5;
  const enableHover = true;
  const [showByOrigin, setShowByOrigin] = useState(false);
  const [exit, setExit] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const runSequence = async () => {
      // 1. wait 1s → show "ByOrigin"
      await new Promise((res) => setTimeout(res, 1000));
      setShowByOrigin(true);

      // 2. wait for reveal animation (700ms) + pause (700ms)
      await new Promise((res) => setTimeout(res, 1400));

      // 3. trigger exit animation
      setExit(true);

      // 4. wait for exit animation to finish (700ms)
      await new Promise((res) => setTimeout(res, 700));

      // 5. navigate to home
      navigate("/home");
    };

    runSequence();
  }, [navigate]);

  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        position: "relative",
        background: "#000",
        overflow: "hidden",
      }}
    >
      {/* Plasma layer */}
      <div style={{ position: "absolute", inset: 0, zIndex: 1 }}>
        <Plasma
          color="#808080"
          speed={0.6}
          direction="reverse"
          scale={3}
          opacity={0.6}
          mouseInteractive={true}
        />
      </div>

      {/* Text layer */}
      <div
        style={{
          ...styles.container,
          animation: exit ? "fadeOut 800ms ease forwards" : "none",
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: 2,
        }}
      >
        <h1
          className="cult-text"
          style={{
            ...styles.sharedText,
            fontFamily: "system-ui, sans-serif",
          }}
        >
          Cult
        </h1>

        {showByOrigin && (
          <h1
            className="byorigin-text"
            style={{
              ...styles.sharedText,
              fontFamily: "system-ui, sans-serif",
              animation: "letterReveal 700ms ease forwards",
            }}
          >
            ByOrigin
          </h1>
        )}

        <style>
          {`
          .cult-text {
            text-shadow: 0 0 10px rgba(255, 255, 255, 0.3);
            transition: transform 0.3s ease;
          }
          
          .byorigin-text {
            text-shadow: 0 0 10px rgba(255, 255, 255, 0.3);
          }
          
          @keyframes letterReveal {
            from {
              opacity: 0;
              letter-spacing: 0.15em;
              transform: translateY(10px);
            }
            to {
              opacity: 1;
              letter-spacing: normal;
              transform: translateY(0);
            }
          }

          @keyframes fadeOut {
            from {
              opacity: 1;
              transform: translateY(0);
            }
            to {
              opacity: 0;
              transform: translateY(-30px);
            }
          }

          /* Improved responsiveness for smaller devices */
          @media (max-width: 768px) {
            .cult-text, .byorigin-text {
              font-size: clamp(1.5rem, 8vw, 3.5rem);
            }
          }
          
          @media (max-width: 480px) {
            #root > div > div {
              flex-direction: column;
              gap: 0;
            }
            .cult-text, .byorigin-text {
              font-size: clamp(1.2rem, 6vw, 2.5rem);
            }
          }
        `}
        </style>
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
    gap: "8px",
    color: "#fff",
    fontFamily: "sans-serif",
    textAlign: "center",
    padding: "0 10px",
  },
  sharedText: {
    fontSize: "clamp(2rem, 10vw, 4.5rem)", // reduced size for better performance
    margin: 0,
    lineHeight: 1.1,
    willChange: "transform, opacity",
    fontWeight: "bold",
  },
};
