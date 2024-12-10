import { CONTACT } from "../constants";
import { SectionWrapper } from "../hoc";
import { motion } from "framer-motion";
import { slideIn } from "../utils/motion";
import { styles } from "../styles";
import { FiPhone, FiMail } from "react-icons/fi";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const Contact = () => {
  return (
    <div
      className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}
    >
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[1.0] p-8 rounded-2xl"
      >
        <p className={styles.sectionHeadText}>Get in touch</p>
        <div className="text-center tracking-tighter">
          {/* Phone Section */}
          <div className="flex items-center justify-center gap-4 my-4">
            <FiPhone className="text-xl text-gray-600" />
            <p>{CONTACT.phoneNo}</p>
          </div>

          {/* Email Section */}
          <div className="flex items-center justify-center gap-4 my-4">
            <FiMail className="text-xl text-gray-600" />
            <a href={`mailto:${CONTACT.email}`} className="border-b">
              {CONTACT.email}
            </a>
          </div>

          {/* Social Links Section */}
          <div className="flex items-center justify-center gap-6 mt-6">
            <a href={CONTACT.linkedin} target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="text-3xl text-blue-700 hover:text-blue-800" />
            </a>
            <a href={CONTACT.github} target="_blank" rel="noopener noreferrer">
              <FaGithub className="text-3xl text-gray-800 hover:text-gray-900" />
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
