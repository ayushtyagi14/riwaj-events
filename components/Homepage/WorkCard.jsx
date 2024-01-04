import { motion } from "framer-motion";
import { fadeIn } from "../../utils/motion";
import { useRouter } from "next/router";

const WorkCard = ({
  id,
  imgUrl,
  title,
  index,
  active,
  handleClick,
  description,
  url,
}) => {
  const router = useRouter();

  return (
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className={`relative ${
        active === id ? "lg:flex-[3.5] flex-[10]" : "lg:flex-[0.5] flex-[2]"
      } flex items-center justify-center min-w-[170px] h-[700px] transition-[flex] duration-[0.7s] ease-out-flex cursor-pointer`}
      onMouseEnter={() => handleClick(id)}
    >
      <img
        src={imgUrl}
        alt={title}
        className="absolute w-full h-full object-cover rounded-[24px]"
      />
      {active !== id ? (
        <h3 className="font-semibold md:text-[32px] text-[24px] text-white absolute z-0 lg:bottom-20 lg:rotate-[-90deg] lg:origin-[0,0] font-vibes">
          {title}
        </h3>
      ) : (
        <div className="absolute bottom-0 p-8 flex justify-start w-full flex-col bg-[rgba(0,0,0,0.5)] rounded-b-[24px]">
          <h2 className="mt-[24px] font-semibold md:text-[32px] text-[18px] text-white text-center font-vibes">
            {title}
          </h2>
          <p className="text-white mt-3 text-center italic md:text-[16px] text-[14px]">
            {description}
          </p>
          <button
            className="text-white mt-3 hover:text-[#d59a30] mx-auto px-2 italic md:text-[16px] text-[14px]"
            onClick={() => router.push(url)}
          >
            Learn More
          </button>
        </div>
      )}
    </motion.div>
  );
};

export default WorkCard;
