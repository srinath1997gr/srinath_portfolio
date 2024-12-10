import profilePic from "../assets/Srinath_profile.jpg";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { motion } from "framer-motion";
import { slideIn } from "../utils/motion";

const Hero = () => {
  return (
    <div
    className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}
  >
  <motion.div
      variants={slideIn("left", "tween", 0.2, 1)}
      className='flex-[1.0] p-8 rounded-2xl'
    >
    <section className="relative w-full sm:h-[calc(100vh-45px)] lg:h-[calc(70vh-45px)] mx-auto flex justify-center items-center">
      <div
        className={`max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-20 md:gap-18`}
      >
        <div className=" flex justify-center sm:min-w-[250px]">
          <img
            src={profilePic}
            alt="Srinath Gownivari"
            className="w-auto max-w-[250px] sm:max-w-[300px] lg:max-w-[450px] h-auto object-cover rounded-3xl border-4 border-stone-900"
          />
        </div>

        <div className="flex-1 flex flex-col justify-center items-center text-center lg:items-start lg:text-left sm:min-w-[250px]">
          <h1 className={`${styles.heroHeadText} text-white text-[24px] sm:text-[32px] lg:text-[48px]`}>
            Hi, I'm <span className="text-[#915EFF]">Srinath Gownivari Raghunatha Reddy</span>
          </h1>
        </div>
      </div>
    </section>
    </motion.div>
    </div>
  );
};

export default SectionWrapper(Hero, "hero");
