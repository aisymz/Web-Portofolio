import { motion } from "framer-motion";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <motion.footer
      className="footer"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ type: "spring", stiffness: 100, duration: 0.5 }}
    >
      <hr />
      <p>
        &copy; {year} A'isy Muhammad Zain. Dibuat dengan React & Framer Motion.
      </p>
    </motion.footer>
  );
};

export default Footer;
