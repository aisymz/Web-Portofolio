import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggleTheme } from "../store/themeSlice";
import { motion } from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa";

const Header = () => {
  const dispatch = useDispatch();
  const { theme } = useSelector((state) => state.theme);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <motion.header
      className="header"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 120, damping: 10, delay: 0.2 }}
    >
      <motion.div
        className="logo"
        whileHover={{
          scale: 1.05,
          rotate: [0, -5, 5, -5, 0],
          transition: { duration: 0.5, repeat: Infinity },
        }}
      >
        My Portofolio
      </motion.div>
      <nav className={isMobileMenuOpen ? "mobile-nav-open" : ""}>
        <motion.a
          href="#hero"
          whileHover={{ y: -2, color: "var(--primary-color)" }}
        >
          Home
        </motion.a>
        <motion.a
          href="#about"
          whileHover={{ y: -2, color: "var(--primary-color)" }}
        >
          About
        </motion.a>
        <motion.a
          href="#experience"
          whileHover={{ y: -2, color: "var(--primary-color)" }}
        >
          Skills
        </motion.a>
        <motion.a
          href="#projects"
          whileHover={{ y: -2, color: "var(--primary-color)" }}
        >
          Projects
        </motion.a>
        <motion.a
          href="#contact"
          whileHover={{ y: -2, color: "var(--primary-color)" }}
        >
          Contact
        </motion.a>
      </nav>
      <div className="header-right">
        <motion.button
          onClick={() => dispatch(toggleTheme())}
          className="theme-toggle"
          whileHover={{ scale: 1.2, rotate: 360 }}
          whileTap={{ scale: 0.9, rotate: -360 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          {theme === "light" ? "🌙" : "☀️"}
        </motion.button>
        <motion.button
          className="mobile-menu-toggle"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
          aria-label="Toggle mobile menu"
        >
          {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
        </motion.button>
      </div>
    </motion.header>
  );
};
export default Header;
