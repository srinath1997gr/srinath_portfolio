import { CONTACT } from "../constants";
import { SectionWrapper } from "../hoc";
import { motion } from "framer-motion";
import { slideIn } from "../utils/motion";
import { styles } from "../styles";



const Contact = () => {
  return (
  <div
      className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}
    >
    <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className='flex-[1.0] p-8 rounded-2xl'
      >
      <p className={styles.sectionHeadText}>Get in touch</p>
      <div className="text-center tracking-tighter">
        {/* <p className="my-4">{CONTACT.address}</p> */}
        <p className="my-4">{CONTACT.phoneNo}</p>
        <a href="#" className="border-b">
          {CONTACT.email}
        </a>
      </div>
    </motion.div>
  </div>
  );
};

export default SectionWrapper(Contact, "contact");