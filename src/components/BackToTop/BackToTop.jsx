import { useEffect, useState } from "react";
import styles from "./BackToTop.module.css";

const goTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 150) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    });
  }, []);

  return (
    <div
      className={`fixed ${styles.icon_sticky} ${
        isVisible
          ? `${styles.sticky} bottom-4 end-4 block sm:bottom-6 sm:end-6 lg:bottom-8 lg:end-8`
          : "hidden"
      } `}
    >
      <button
        className="inline-block rounded-full bg-soil p-2 text-white shadow transition hover:bg-custom_purple-500 sm:p-3 lg:p-4"
        onClick={goTop}
      >
        <span className="sr-only">Back to top</span>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z"
            clipRule="evenodd"
          />
        </svg>
      </button>
    </div>
  );
};

export default BackToTop;
