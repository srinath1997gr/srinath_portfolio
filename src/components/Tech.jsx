import { RiReactjsLine } from "react-icons/ri";
import { SiMongodb, SiPython, SiHtml5, SiCss3, SiDocker, SiKubernetes, SiSpringboot, SiMysql } from "react-icons/si";
import { DiJava } from "react-icons/di"; 
import { FaNodeJs, FaAws } from "react-icons/fa"; 
import { BiLogoPostgresql } from "react-icons/bi";
import { SectionWrapper } from "../hoc";
import { motion } from "framer-motion";
import { slideIn } from "../utils/motion";
import { styles } from "../styles";

const Tech = () => {
  return (
      <motion.div
        className='flex-[0.75] bg-black-100 p-8 rounded-2xl'
      >
      <h2 className={`${styles.sectionHeadText}`}>Technologies</h2>

      <div className="flex flex-wrap items-center justify-center gap-4">
        <div>
          <RiReactjsLine className="text-7xl text-cyan-400" />
        </div>
        <div className="p-4">
          <SiMongodb className="text-7xl text-cyan-500" />
        </div>
        <div className="p-4">
          <FaNodeJs className="text-7xl text-green-500" />
        </div>
        <div className="p-4">
          <BiLogoPostgresql className="text-7xl text-sky-700" />
        </div>
        <div className="p-4">
          <SiPython className="text-7xl text-yellow-500" />
        </div>
        <div className="p-4">
          <DiJava className="text-7xl text-red-600" /> 
        </div>
        <div className="p-4">
          <SiHtml5 className="text-7xl text-orange-500" />
        </div>
        <div className="p-4">
          <SiCss3 className="text-7xl text-blue-500" />
        </div>
        <div className="p-4">
          <SiDocker className="text-7xl text-blue-400" />
        </div>
        <div className="p-4">
          <SiKubernetes className="text-7xl text-blue-600" />
        </div>
        <div className="p-4">
          <FaAws className="text-7xl text-orange-400" /> 
        </div>
        <div className="p-4">
          <SiSpringboot className="text-7xl text-green-600" />
        </div>
        <div className="p-4">
          <SiMysql className="text-7xl text-blue-600" /> 
        </div>
      </div>
      </motion.div>
  );
};

export default SectionWrapper(Tech, "tech");