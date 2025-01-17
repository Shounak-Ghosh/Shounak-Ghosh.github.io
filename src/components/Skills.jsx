import { RiReactjsLine } from "react-icons/ri";
import { FaPython } from "react-icons/fa";
import { motion } from "framer-motion";
import ShakeIcon from "./ShakeIcon";
import { FaGolang } from "react-icons/fa6";
import { FaJava } from "react-icons/fa6";
import { FaAws } from "react-icons/fa6";
import { SiMysql } from "react-icons/si";
import { SiTensorflow } from "react-icons/si";
import { CgCPlusPlus } from "react-icons/cg";

const iconVariants = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [-10, 10],

    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
  hover: {
    scale: 1.1,
  },
});

const Skills = () => {
  return (
    <div className=" pb-20">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="my-20 text-center text-4xl font-medium"
      >
        <span className="text-purple-400">Technical</span> Skills
      </motion.h1>
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1.5 }}
        className="lg:px-40 md:px-40 grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1"
      >
        <div className=" p-2 flex items-center justify-center">
          <ShakeIcon
            Icon={FaPython}
            className="text-7xl text-yellow-500 hover:text-yellow-400"
          />
        </div>
        <div className=" p-2 flex items-center justify-center">
          <ShakeIcon
            Icon={FaGolang}
            className="text-7xl text-sky-600 hover:text-sky-400"
          />
        </div>
        <div className=" p-2 flex items-center justify-center">
          <ShakeIcon
            Icon={FaJava}
            className="text-7xl text-amber-600 hover:text-amber-500"
          />
        </div>
        <div className=" p-2 flex items-center justify-center">
          <ShakeIcon
            Icon={CgCPlusPlus}
            className="text-7xl text-neutral-400 hover:text-neutral-300"
          />
        </div>
        <div className=" p-4 flex items-center justify-center">
          <ShakeIcon
            Icon={FaAws}
            className="text-7xl text-orange-600 hover:text-orange-400"
          />
        </div>
        <div className=" p-4 flex items-center justify-center">
          <ShakeIcon
            Icon={SiMysql}
            className="text-7xl text-blue-600 hover:text-blue-400"
          />
        </div>
        <div className=" p-4 flex items-center justify-center">
          <ShakeIcon
            Icon={SiTensorflow}
            className="text-7xl text-yellow-600 hover:text-orange-400"
          />
        </div>
        <div className=" p-4 flex items-center justify-center">
          <ShakeIcon
            Icon={RiReactjsLine}
            className="text-7xl text-cyan-600 hover:text-cyan-400"
          />
        </div>
      </motion.div>
    </div>
  );
};

export default Skills;
