import { motion } from "framer-motion";
import profilePicture from "../assets/Profile.jpg";
import { TypeAnimation } from "react-type-animation";

const Hero = () => {
  return (
    <section id="hero" className="hero">
      <motion.img
        src={profilePicture}
        alt="Foto Profil A'isy Muhammad Zain"
        className="profile-picture"
        initial={{ opacity: 0, scale: 0.5, y: 50 }}
        animate={{ opacity: 1, scale: 1, y: [0, -10, 0] }}
        transition={{
          duration: 0.6,
          delay: 0,
          y: { repeat: Infinity, duration: 4, ease: "easeInOut" },
        }}
      />
      <motion.h1
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ type: "spring", stiffness: 100, delay: 0.2 }}
      >
        A'isy Muhammad Zain
      </motion.h1>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ type: "spring", stiffness: 100, delay: 0.4 }}
      >
        <TypeAnimation
          sequence={[
            "Front-End Web Developer",
            3000,
            "",
            1000,
            "Front-End Web Developer",
            3000,
            "",
            1000,
          ]}
          wrapper="span"
          speed={50}
          className="subtitle"
          style={{ display: "inline-block" }}
          repeat={Infinity}
          cursor={false}
        />
      </motion.div>
      <motion.p
        className="description"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ type: "spring", stiffness: 100, delay: 0.6 }}
      >
        Menciptakan web aplikasi yang inovatif fungsional dan User-Frendly untuk
        solusi digital.
      </motion.p>
      <motion.div
        className="hero-buttons"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ type: "spring", stiffness: 100, delay: 0.8 }}
        style={{
          display: "flex",
          gap: "1rem",
          justifyContent: "center",
          marginTop: "1rem",
        }}
      >
        <motion.a
          href="#projects"
          className="cta-button"
          whileHover={{
            scale: 1.05,
            y: -3,
            transition: { type: "spring", stiffness: 300 },
          }}
          whileTap={{ scale: 0.95 }}
          style={{
            padding: "0.8rem 1.5rem",
            backgroundColor: "var(--primary-color)",
            color: "#fff",
            borderRadius: "8px",
            fontWeight: 600,
            textDecoration: "none",
          }}
        >
          Projects Me
        </motion.a>
        <motion.a
          href="/CV_A'isy_Muhammad_Zain.pdf"
          download
          className="cta-button secondary"
          whileHover={{
            scale: 1.05,
            y: -3,
            transition: { type: "spring", stiffness: 300 },
          }}
          whileTap={{ scale: 0.95 }}
          style={{
            padding: "0.8rem 1.5rem",
            backgroundColor: "transparent",
            color: "var(--primary-color)",
            border: "2px solid var(--primary-color)",
            borderRadius: "8px",
            fontWeight: 600,
            textDecoration: "none",
          }}
        >
          Download CV
        </motion.a>
      </motion.div>
    </section>
  );
};

export default Hero;
