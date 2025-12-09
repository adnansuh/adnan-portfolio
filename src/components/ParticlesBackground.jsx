import { useCallback } from "react";
import Particles from "react-particles";
import { loadSlim } from "tsparticles-slim";

export default function ParticlesBackground() {
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);
    console.log("Particles component loaded!");

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      className="absolute inset-0 -z-10 pointer-events-none"
      options={{
        background: { color: "transparent" },
        fpsLimit: 120,
        fullScreen: { enable: false },
        particles: {
          number: { value: 80, density: { enable: true, area: 800 } },
          color: { value: "#bb86fc" },
          links: {
            enable: true,
            color: "#bb86fc",
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
        }
      }}
    />
  );


}
