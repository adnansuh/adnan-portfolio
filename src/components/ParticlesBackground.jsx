import { useCallback } from "react";
import Particles from "react-particles";
import { loadSlim } from "tsparticles-slim";
import { useTheme } from "../context/ThemeContext";

export default function ParticlesBackground() {
  const { theme } = useTheme(); // ← listen to theme changes

  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <Particles
      key={theme}   // ← RELOAD particles when theme changes
      id="tsparticles"
      init={particlesInit}
      options={{
        background: { color: "transparent" },
        fpsLimit: 120,
        fullScreen: { enable: false },
        particles: {
          number: { value: 80, density: { enable: true, area: 800 } },
          color: { value: getComputedStyle(document.documentElement).getPropertyValue("--primary").trim() },
          links: {
            enable: true,
            color: getComputedStyle(document.documentElement).getPropertyValue("--primary").trim(),
            distance: 150,
            opacity: 0.4,
            width: 1,
          },
          move: {
            enable: true,
            speed: 1,
            direction: "none",
            outModes: "bounce",
          },
          opacity: { value: 0.5 },
          size: { value: { min: 1, max: 3 } },
        },
      }}
    />
  );
}
