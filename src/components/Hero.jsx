import profilePic from "../assets/Srinath_profile.jpg";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";

const Hero = () => {
  return (
    <section className="relative w-full h-[calc(100vh-50px)] mx-auto flex items-center">
      <div
        className={`max-w-7xl mx-auto ${styles.paddingX} flex flex-col lg:flex-row items-center gap-10`}
      >
        {/* Right Section: Profile Picture */}
        <div className="flex-1 flex justify-center items-center sm:min-w-[250px]">
          <img
            src={profilePic}
            alt="Srinath Gownivari"
            className="w-auto max-w-[250px] sm:max-w-[300px] lg:max-w-[450px] h-auto object-cover rounded-3xl border-4 border-stone-900"
          />
        </div>

        {/* Left Section: Text Information */}
        <div className="flex-1 flex flex-col justify-center items-center text-center lg:items-start lg:text-left sm:min-w-[250px]">
          <h1 className={`${styles.heroHeadText} text-white text-[24px] sm:text-[32px] lg:text-[48px]`}>
            Hi, I'm <span className="text-[#915EFF]">Srinath Gownivari Raghunatha Reddy</span>
          </h1>
        </div>
      </div>
    </section>
  );
};

export default SectionWrapper(Hero, "hero");
