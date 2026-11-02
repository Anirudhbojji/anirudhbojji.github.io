import React from "react";
import Particles from "react-tsparticles";

// Network-mesh particles: nodes with faint links, like a topology map.
function Particle() {
  return (
    <Particles
      id="tsparticles"
      params={{
        particles: {
          number: {
            value: 70,
            density: {
              enable: true,
              value_area: 1200,
            },
          },
          color: {
            value: "#39c2ff",
          },
          line_linked: {
            enable: true,
            distance: 160,
            color: "#39c2ff",
            opacity: 0.08,
            width: 1,
          },
          move: {
            enable: true,
            direction: "none",
            speed: 0.3,
            random: true,
            out_mode: "out",
          },
          size: {
            value: 1.6,
            random: true,
          },
          opacity: {
            value: 0.35,
            anim: {
              enable: true,
              speed: 0.6,
              opacity_min: 0.08,
            },
          },
        },
        interactivity: {
          events: {
            onhover: {
              enable: true,
              mode: "grab",
            },
            onclick: {
              enable: true,
              mode: "push",
            },
          },
          modes: {
            grab: {
              distance: 180,
              line_linked: {
                opacity: 0.25,
              },
            },
            push: {
              particles_nb: 2,
            },
          },
        },
        retina_detect: true,
      }}
    />
  );
}

export default Particle;
