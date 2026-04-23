import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";

export default function Promo() {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-10vh", "10vh"]);

  return (
    <div
      ref={container}
      className="relative flex items-center justify-center h-screen overflow-hidden"
      style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
    >
      <div className="fixed top-[-10vh] left-0 h-[120vh] w-full">
        <motion.div style={{ y }} className="relative w-full h-full">
          <img
            src="https://cdn.poehali.dev/projects/4eeeeaa4-2075-4f1c-a042-9a5b4835131f/files/f124eab0-ca76-48c2-afe4-19759472f54f.jpg"
            alt="Gothic tattoo art"
            className="w-full h-full object-cover"
          />
        </motion.div>
      </div>

      <div className="absolute inset-0 bg-black/40 z-[1]" />
      <h3 className="absolute top-12 right-6 text-red-400 uppercase z-10 text-sm md:text-base lg:text-lg tracking-widest">
        Мастер Кристина Дьякова
      </h3>

      <p className="absolute bottom-12 right-6 text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-3xl z-10 leading-tight">
        Татуировка — это не просто рисунок на коже. Это история, которую ты носишь с собой всю жизнь.
      </p>
    </div>
  );
}