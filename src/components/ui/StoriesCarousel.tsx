import { useEffect } from "react";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";

export default function StoriesCarousel() {
  useEffect(() => {
    const slides = document.querySelectorAll<HTMLDivElement>(".slide");
    const thumbnails = document.querySelectorAll<HTMLDivElement>(".thumbnail");
    const prevBtns = document.querySelectorAll<HTMLButtonElement>(".prev-btn");
    const nextBtns = document.querySelectorAll<HTMLButtonElement>(".next-btn");
    const currentSlideSpan = document.querySelector<HTMLSpanElement>(".current-slide");
    const progressFills = document.querySelectorAll<HTMLDivElement>(".progress-fill");

    let currentSlide = 0;
    const totalSlides = slides.length;
    let autoPlayInterval: ReturnType<typeof setInterval>;
    let isAutoPlaying = true;

    const startProgressAnimation = () => {
      progressFills.forEach((fill) => {
        fill.style.width = "0%";
        fill.style.transition = "none";
      });

      void progressFills[0]?.offsetWidth;

      const currentProgress = progressFills[currentSlide];
      if (currentProgress) {
        currentProgress.style.transition = "width 5s linear";
        currentProgress.style.width = "100%";
      }
    };

    const showSlide = (index: number) => {
      slides[currentSlide]?.classList.remove("opacity-100", "scale-100");
      slides[currentSlide]?.classList.add("opacity-0", "scale-105");

      slides[index]?.classList.remove("opacity-0", "scale-105");
      slides[index]?.classList.add("opacity-100", "scale-100");

      thumbnails.forEach((thumb, i) => {
        if (i === index) {
          thumb.classList.add("border-blue-500", "scale-105", "shadow-lg");
          thumb.classList.remove("border-gray-300", "border-blue-300");
        } else {
          thumb.classList.remove("border-blue-500", "scale-105", "shadow-lg");
          thumb.classList.add("border-gray-300");
        }
      });

      if (currentSlideSpan) currentSlideSpan.textContent = String(index + 1);
      currentSlide = index;
      startProgressAnimation();
    };

    const nextSlide = () => showSlide((currentSlide + 1) % totalSlides);
    const prevSlide = () => showSlide((currentSlide - 1 + totalSlides) % totalSlides);

    const startAutoPlay = () => {
      if (isAutoPlaying) {
        autoPlayInterval = setInterval(nextSlide, 5000);
        startProgressAnimation();
      }
    };

    const pauseAutoPlay = () => clearInterval(autoPlayInterval);

    prevBtns.forEach((btn) => btn.addEventListener("click", prevSlide));
    nextBtns.forEach((btn) => btn.addEventListener("click", nextSlide));

    thumbnails.forEach((thumb, index) => {
      thumb.addEventListener("click", () => {
        showSlide(index);
        resetAutoPlay();
      });

      const overlay = thumb.querySelector(".thumbnail-overlay");
      thumb.addEventListener("mouseenter", () => {
        overlay?.classList.remove("opacity-0");
        overlay?.classList.add("opacity-100");
      });
      thumb.addEventListener("mouseleave", () => {
        overlay?.classList.remove("opacity-100");
        overlay?.classList.add("opacity-0");
      });
    });

    const slider = document.querySelector<HTMLDivElement>(".relative.bg-black");
    if (slider) {
      slider.addEventListener("mouseenter", pauseAutoPlay);
      slider.addEventListener("mouseleave", startAutoPlay);

      let startX = 0;
      slider.addEventListener("touchstart", (e) => {
        startX = e.touches[0].clientX;
        pauseAutoPlay();
      });
      slider.addEventListener("touchend", (e) => {
        const endX = e.changedTouches[0].clientX;
        const diff = startX - endX;
        if (Math.abs(diff) > 50) diff > 0 ? nextSlide() : prevSlide();
        startAutoPlay();
      });
    }

    const resetAutoPlay = () => {
      pauseAutoPlay();
      startAutoPlay();
    };

    startAutoPlay();

    return () => {
      pauseAutoPlay();
    };
  }, []);

  return (
    <div className="max-w-4xl px-2 mx-auto my-4 overflow-hidden bg-white shadow-2xl md:my-8 rounded-2xl">


      {/* Main Slider */}
      <div className="relative bg-black slider-container" style={{ height: "clamp(300px, 70vh, 600px)" }}>
        {/* Progress Bars */}
        <div className="absolute top-0 left-0 right-0 z-20 flex gap-1 p-3 md:p-4">
          {Array.from({ length: 5 }).map((_, i) => (
            <div key={i} className="flex-1 h-1 overflow-hidden rounded-full bg-white/30">
              <div
                className="h-full transition-all duration-100 bg-white progress-fill"
                style={{ width: i === 0 ? "100%" : "0%" }}
                data-segment={i}
              ></div>
            </div>
          ))}
        </div>

        {/* Slides */}
        {[
          "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&w=1287&q=80",
          "https://images.unsplash.com/photo-1537151625747-768eb6cf92b2?auto=format&fit=crop&w=1285&q=80",
          "https://images.unsplash.com/photo-1552053831-71594a27632d?auto=format&fit=crop&w=1262&q=80",
          "https://images.unsplash.com/photo-1513360371669-4adf3dd7dff8?auto=format&fit=crop&w=1170&q=80",
          "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&w=1064&q=80",
        ].map((src, i) => (
          <div
            key={i}
            className={`absolute inset-0 transition-all duration-500 ease-out slide ${
              i === 0 ? "opacity-100 scale-100" : "opacity-0 scale-105"
            }`}
            data-slide={i + 1}
          >
            <div className="flex items-center justify-center w-full h-full p-2 md:p-4">
              <img src={src} alt={`Story ${i + 1}`} className="object-contain w-auto h-auto max-w-full max-h-full" />
            </div>
            <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
          </div>
        ))}

        {/* Navigation */}
        <div className="absolute inset-0 z-10 flex items-center justify-between p-3 pointer-events-none md:p-6">
          <button className="flex items-center justify-center w-8 h-8 transition-all duration-300 rounded-full cursor-pointer pointer-events-auto slider-nav prev-btn md:w-12 md:h-12 bg-white/20 hover:bg-white/30 backdrop-blur-sm hover:scale-110">
            <GoArrowRight className="text-lg text-white md:text-xl" />
          </button>
          <button className="flex items-center justify-center w-8 h-8 transition-all duration-300 rounded-full cursor-pointer pointer-events-auto slider-nav next-btn md:w-12 md:h-12 bg-white/20 hover:bg-white/30 backdrop-blur-sm hover:scale-110">
          <GoArrowLeft className="text-lg text-white md:text-xl" />
          </button>
        </div>
      </div>

      {/* Thumbnails */}
      <div className="p-4 md:p-6 bg-gradient-to-b from-gray-50 to-white">
        <div className="flex gap-2 pb-2 overflow-x-auto md:gap-3 thumbnails-container">
          {[
            "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&w=1287&q=80",
            "https://images.unsplash.com/photo-1537151625747-768eb6cf92b2?auto=format&fit=crop&w=1285&q=80",
            "https://images.unsplash.com/photo-1552053831-71594a27632d?auto=format&fit=crop&w=1262&q=80",
            "https://images.unsplash.com/photo-1513360371669-4adf3dd7dff8?auto=format&fit=crop&w=1170&q=80",
            "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&w=1064&q=80",
          ].map((src, i) => (
            <div
              key={i}
              className={`flex-shrink-0 overflow-hidden transition-all duration-300 rounded-lg cursor-pointer thumbnail w-14 h-14 md:w-20 md:h-20 md:rounded-xl border-2 ${
                i === 0 ? "border-blue-500 scale-105 shadow-lg" : "border-gray-300"
              }`}
              data-slide={i + 1}
            >
              <img src={src} alt={`Thumb ${i + 1}`} className="object-cover w-full h-full transition-transform duration-300 hover:scale-110" />
              <div className="absolute inset-0 flex items-center justify-center text-white transition-opacity duration-300 opacity-0 bg-black/40 thumbnail-overlay">
                <span className="text-xs font-bold md:text-sm">{i + 1}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
