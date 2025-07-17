import { motion } from "framer-motion";
import  { forwardRef } from "react";

interface BlogCardsProps {
  image: string;
  date: string;
  heading: string;
  description: string;
}

const HoverCard = forwardRef<HTMLDivElement, BlogCardsProps>(
  ({ date, description, heading, image }, ref) => {
    return (
      <motion.div
        ref={ref}
        initial={{ rotateY: -90 }}
        whileInView={{ rotateY: 0 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.5 }}
        whileHover={{ y: -5, scale: 1.05 }}
        className="h-[500px] w-[380px] rounded-xl overflow-hidden border border-gray-200 hover:border-violet-600 shadow-md transition duration-300"
      >
        <img src={image} alt="img" className="h-[250px] w-full object-cover" />
        <div className="flex flex-col p-5 space-y-3">
          <p className="text-sm text-gray-500 pt-4">{date}</p>
          <h3 className="text-xl font-semibold leading-snug">{heading}</h3>
          <p className="text-base text-slate-500 leading-relaxed">
            {description}
          </p>
        </div>
      </motion.div>
    );
  }
);

HoverCard.displayName = "HoverCard"; // Add displayName for debugging

export default HoverCard;
