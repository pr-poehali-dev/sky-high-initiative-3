import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";

export default function Hero() {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0vh", "50vh"]);

  return (
    <div
      ref={container}
      className="relative flex items-center justify-center h-screen overflow-hidden"
    >
      <motion.div
        style={{ y }}
        className="absolute inset-0 w-full h-full"
      >
        <img
          src="https://cdn.poehali.dev/projects/4eeeeaa4-2075-4f1c-a042-9a5b4835131f/files/484d79d2-e044-4468-8c8c-544472f0f8be.jpg"
          alt="Tattoo Kristofer studio"
          className="w-full h-full object-cover"
        />
      </motion.div>

      <div className="absolute inset-0 bg-black/50 z-[1]" />
      <div className="relative z-10 text-center text-white px-6">
        <p className="text-xs md:text-sm uppercase tracking-[0.4em] mb-4 text-red-400 font-medium">Лыткарино, Подмосковье</p>
        <h1 className="text-5xl md:text-7xl lg:text-9xl font-bold tracking-tight mb-6 leading-none">
          TATTOO<br />KRISTOFER
        </h1>
        <p className="text-base md:text-xl max-w-xl mx-auto opacity-80 leading-relaxed">
          Авторская татуировка в готическом стиле. Мастер Кристина Дьякова
        </p>
        <button className="mt-10 border border-white text-white px-8 py-3 uppercase tracking-widest text-sm hover:bg-white hover:text-black transition-all duration-300">
          Записаться
        </button>
      </div>
    </div>
  );
}