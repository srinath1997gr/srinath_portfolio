
import { SectionWrapper } from "../hoc";
import { motion } from "framer-motion";
import { slideIn } from "../utils/motion";
import { styles } from "../styles";
import { categories } from "../constants";

const Tech = () => {
  return (
    <div
      className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}
    >
    <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className='flex-[1.0] p-8 rounded-2xl'
      >
      <p className={`${styles.sectionHeadText} text-center`}>Technologies</p>
      {Object.entries(categories).map(([category, items]) => (
         <div
         className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}
       >
        <motion.div
          variants={slideIn("left", "tween", 0.7, 1)}
            className='flex-[1.0]  rounded-2xl'
        >
        <div key={category} className="mb-8">
          <h3 className="text-2xl font-bold text-white mb-4 capitalize">{category}</h3>
          <div className="flex flex-wrap items-center justify-center gap-6">
            {items.map(({ Icon, name, color }) => (

              <div key={name} className="flex flex-col items-center">
                <Icon className={`text-7xl ${color}`} />
                <span className="text-white mt-2">{name}</span>
              </div>
            ))}
          </div>
        </div>
        </motion.div>
        </div>
      ))}
    </motion.div>
    </div>
  );
};

export default SectionWrapper(Tech, "tech");
