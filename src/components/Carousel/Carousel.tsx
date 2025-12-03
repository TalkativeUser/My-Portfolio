import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface CarouselProps {
  images: string[];
  autoPlay?: boolean;
  interval?: number;
}

const Carousel: React.FC<CarouselProps> = ({
  images,
  autoPlay = true,
  interval = 3000,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // removed isHovered
  // const [isHovered, setIsHovered] = useState(false);

  const [progress, setProgress] = useState<number[]>(() =>
    images.map(() => 0)
  );

  const tickRef = useRef<number | null>(null);

  const resetProgressForIndex = (index: number) => {
    setProgress((prev) =>
      prev.map((_, i) => {
        if (i < index) return 100;
        if (i === index) return 0;
        return 0;
      })
    );
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    resetProgressForIndex(index);
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => {
      const next = (prev + 1) % images.length;
      setProgress((p) =>
        p.map((_, i) => (i <= prev ? 100 : i === next ? 0 : 0))
      );
      return next;
    });
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => {
      const next = (prev - 1 + images.length) % images.length;
      setProgress((p) =>
        p.map((_, i) => {
          if (i < next) return 100;
          if (i === next) return 0;
          return 0;
        })
      );
      return next;
    });
  };

  // AUTO PLAY TICK LOOP (without hover)
  useEffect(() => {
    if (!autoPlay) return;

    const tickMs = 50;
    const deltaPerTick = (tickMs / interval) * 100;

    function tick() {
      setProgress((prev) => {
        const next = [...prev];
        if (next[currentIndex] >= 100) return next;

        next[currentIndex] = Math.min(100, next[currentIndex] + deltaPerTick);
        return next;
      });

      tickRef.current = window.setTimeout(() => {
        setProgress((prev) => {
          if (prev[currentIndex] >= 100) {
            const nextIndex = (currentIndex + 1) % images.length;
            const newArr = prev.map((_, i) => {
              if (i < nextIndex) return 100;
              if (i === nextIndex) return 0;
              return 0;
            });
            setCurrentIndex(nextIndex);
            return newArr;
          }
          return prev;
        });

        tickRef.current = window.setTimeout(tick, tickMs);
      }, 0);
    }

    if (tickRef.current === null) {
      tickRef.current = window.setTimeout(tick, tickMs);
    }

    return () => {
      if (tickRef.current !== null) {
        clearTimeout(tickRef.current);
        tickRef.current = null;
      }
    };
  }, [autoPlay, currentIndex, interval, images.length]);

  useEffect(() => {
    setProgress(images.map(() => 0));
    setCurrentIndex(0);
  }, [images]);

  return (
    <div className="w-full flex flex-col items-center">
      {/* Progress bars */}
      <div className="w-full max-w-4xl px-2 mt-6">
        <div className="flex gap-2 items-center">
          {images.map((_, idx) => (
            <button
              key={idx}
              onClick={() => goToSlide(idx)}
              className="flex-1 h-1 bg-white/20 rounded overflow-hidden"
            >
              <div
                className="h-full bg-white transition-all"
                style={{ width: `${progress[idx]}%` }}
              />
            </button>
          ))}
        </div>
      </div>

      {/* Main Slider */}
      <div
        className="relative w-full max-w-4xl 
        h-72 md:h-96 lg:h-[500px]
        overflow-hidden rounded-2xl shadow-xl bg-black/10 my-6"
      >
        <AnimatePresence mode="wait">
          <motion.img
            key={currentIndex}
            src={images[currentIndex]}
            className="w-full h-full object-contain bg-black/5"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
          />
        </AnimatePresence>

        {/* Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 
          bg-black/40 hover:bg-black/60 text-white p-3 rounded-full shadow-md transition"
        >
          <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 
          bg-black/40 hover:bg-black/60 text-white p-3 rounded-full shadow-md transition"
        >
          <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {/* Thumbnails */}
      <div className="flex gap-4 flex-wrap justify-center mt-2">
        {images.map((img, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-20 h-16 md:w-24 md:h-20 
              overflow-hidden rounded-xl border-2 transition
              ${currentIndex === index ? 'border-purple-500 opacity-100' : 'border-transparent opacity-50 hover:opacity-100'}
            `}
          >
            <img src={img} className="w-full h-full object-cover" />
          </button>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
