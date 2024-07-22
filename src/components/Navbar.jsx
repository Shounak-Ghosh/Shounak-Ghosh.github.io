import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { SOCIAL_LINKS } from "../constants/index";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        {/* <img className="mx-2 w-10" src={logo} alt="logo" /> */}
        <motion.span
          initial={{ width: 0, overflow: "hidden" }}
          animate={{ width: "auto" }}
          transition={{delay: 1, duration: 1 }}
          className="text-3xl text-purple-400 font-semibold"
        >
          SG
        </motion.span>
      </div>
      <div className="m-8 flex itemcenter justify-center gap-4 text-2xl">
        <motion.a
          whileHover={{ scale: 1.2, color: "#a78bfa" }}
          href={SOCIAL_LINKS.linkedin}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin />
        </motion.a>

        <motion.a
          whileHover={{ scale: 1.2, color: "#a78bfa" }}
          href={SOCIAL_LINKS.github}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub />
        </motion.a>

        <motion.a
          href={SOCIAL_LINKS.instagram}
          whileHover={{ scale: 1.2, color: "#a78bfa" }}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram />
        </motion.a>
      </div>
    </nav>
  );
};

export default Navbar;
