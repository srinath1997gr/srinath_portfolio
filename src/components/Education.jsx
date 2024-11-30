import { Education } from "../constants";
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";


const Educations = () => {
  return (
    <>
      <p className={styles.sectionHeadText}>Education</p>
      <div>
        {Education.map((edu, index) => (
          <div
            key={index}
            className="mb-8 flex flex-col sm:flex-row justify-between sm:gap-10"
          >
            {/* Left Section: Image */}
            <div className="w-full sm:w-1/4 mb-6 sm:mb-0">
              <img
                src={edu.image}
                width={250}
                height={250}
                alt={edu.title}
                className="rounded-lg object-cover w-full h-full"
              />
            </div>

            {/* Right Section: Text */}
            <div className="w-full sm:w-3/4">
              <h3 className="mb-2 font-semibold text-2xl">{edu.title}</h3>
              <p className="mb-4 text-stone-400">{edu.description}</p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-stone-400">
                {edu.courses.map((course, i) =>
                  i === 0 ? (
                    // First row spans both columns
                    <div
                      key={i}
                      className="col-span-1 sm:col-span-2 text-center font-semibold text-stone-600"
                    >
                      {course}
                    </div>
                  ) : (
                    // Other rows display in two-column layout
                    <li key={i} className="list-disc ml-4">
                      {course}
                    </li>
                  )
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Educations, "education");
