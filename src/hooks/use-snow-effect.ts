// useSnowEffect.js
import { useEffect } from "react";

export const useSnowEffect = () => {
  useEffect(() => {
    const snowflakes = document.querySelectorAll(".snow");

    snowflakes.forEach((snow: any) => {
      // Posição horizontal aleatória
      snow.style.left = Math.random() * 100 + "%";

      // Duração da animação aleatória entre 5 e 10 segundos
      const duration = 10 + Math.random() * 10;
      snow.style.animation = `snowfall ${duration}s linear infinite`;

      // Atraso inicial aleatório
      snow.style.animationDelay = Math.random() * 5 + "s";
    });
  }, []);
};
