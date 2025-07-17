import { motion } from "framer-motion";
import { useEffect, useState } from "react"; // Import useState and useEffect

type NormalCardProps = {
  image: string;
  name: string;
  specification: string;
  text?: string;
  isArabic?: boolean;
  vtext?: string;
};

export default function NormalCard({
  image,
  name,
  specification,
  vtext,
}: NormalCardProps) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Function to check if the screen is mobile size
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 768); // You can adjust this breakpoint as needed
    };

    // Initial check
    checkIsMobile();

    // Add event listener for window resize
    window.addEventListener("resize", checkIsMobile);

    // Clean up event listener on component unmount
    return () => {
      window.removeEventListener("resize", checkIsMobile);
    };
  }, []);

  return (
    <div className="w-full flex flex-col">
      <motion.div
        className="aspect-[3/4] w-full rounded-xl mt-10 overflow-hidden relative group"
        initial="initial"
        // Apply hover effect only if not mobile
        whileHover={!isMobile ? "hover" : "initial"}
      >
        {/* Image */}
        <img
          src={image}
          alt={name}
          className="w-full h-full rounded-md object-cover object-top transition-transform duration-500 group-hover:scale-105"
        />

        {/* Overlay Panel */}
        <motion.div
          className="absolute bottom-0 left-0 w-full z-20 card-overlay"
          variants={{
            initial: { y: "100%" },
            hover: { y: "0%" },
          }}
          // If mobile, set animate to "hover" to keep it fixed, otherwise use initial/hover logic
          animate={isMobile ? "hover" : undefined}
          transition={{
            duration: 0.4,
            ease: [0.25, 1, 0.5, 1],
          }}
        >
          <div className="w-full bg-gradient-to-t from-white/95 via-white/80 to-transparent backdrop-blur-md p-4 rounded-t-2xl flex flex-col justify-start items-start text-center">
            <motion.div
              className="w-full"
              variants={{
                initial: { opacity: 0, y: 20 },
                hover: { opacity: 1, y: 0 },
              }}
              // If mobile, set animate to "hover" to keep it fixed, otherwise use initial/hover logic
              animate={isMobile ? "hover" : undefined}
              transition={{
                duration: 0.3,
                delay: 0.1,
              }}
            >
              <h3 className="text-lg font-semibold text-gray-800 leading-[20px] pt-7">
                {name}
              </h3>
              <p className="text-[#1a5681] md:text-lg text-sm mb-2">
                {specification.charAt(0).toUpperCase() + specification.slice(1)}
              </p>

              {/* Optional text if needed */}
              {/* <p className="text-gray-700 md:text-lg text-xs mt-1">{text}</p> */}

              <button className="bg-gradient-custom text-white rounded text-xs mt-1 cursor-pointer px-5">
                {vtext}
              </button>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}