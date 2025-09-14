import React, { useEffect, useState } from "react"; 
import { useNavigate } from "react-router-dom";
import FuzzyText from "./FuzzyText";
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
        <FuzzyText
          style={styles.sharedText}
          baseIntensity={0.1}
          enableHover={false}
        >
          Cult
        </FuzzyText>

        {showByOrigin && (
          <h1
            style={{
              ...styles.sharedText,
              fontFamily: "Lacquer, system-ui",
              animation: "letterReveal 700ms ease forwards",
            }}
          >
            ByOrigin
          </h1>
        )}

        <style>
          {`
          @keyframes letterReveal {
            from {
              opacity: 0;
              letter-spacing: 0.15em;
            }
            to {
              opacity: 1;
              letter-spacing: normal;
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

          /* Stack text vertically on small screens */
          @media (max-width: 600px) {
            .text-container {
              flex-direction: column;
              gap: 4px;
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
    fontSize: "clamp(2rem, 12vw, 5rem)", // identical size across both texts
    margin: 0,
    lineHeight: 1.1,
    willChange: "transform, opacity",
  },
};
