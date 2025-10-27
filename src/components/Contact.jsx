import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { TypeAnimation } from "react-type-animation";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100 } },
};

const Contact = () => {
  return (
    <motion.section
      id="contact"
      className="section"
      variants={containerVariants} // <-- TAMBAHKAN INI
      initial="hidden" // <-- UBAH INI
      whileInView="visible" // <-- UBAH INI
      viewport={{ once: true, amount: 0.5 }}
    >
      <motion.h2 variants={itemVariants}>Contact Me</motion.h2>
      <motion.div variants={itemVariants}>
        <TypeAnimation
          sequence={[
            // Tulis kalimat Anda
            "Saya sangat terbuka untuk diskusi dan kolaborasi. Hubungi saya melalui:",
            5000, // Tunggu 5 detik sebelum mengulang (sesuaikan durasi)
            "", // Hapus
            1000, // Jeda hapus
          ]}
          wrapper="p" // Gunakan tag <p> sebagai pembungkus
          speed={70} // Sesuaikan kecepatan (nilai lebih tinggi = lebih lambat)
          style={{ display: "inline-block", marginBottom: "1rem" }} // Style agar mirip <p> asli
          repeat={Infinity} // Ulangi selamanya
          cursor={false} // Hilangkan kursor '|'
        />
      </motion.div>

      <motion.div className="contact-links" variants={itemVariants}>
        <motion.a
          href="mailto:zainaisy23@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{
            scale: 1.2,
            rotate: 5,
            color: "var(--primary-color)",
            transition: { type: "spring", stiffness: 300 },
          }}
          whileTap={{ scale: 0.9 }}
        >
          <MdEmail />
        </motion.a>
        <motion.a
          href="https://linkedin.com/in/aisyzain25"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{
            scale: 1.2,
            rotate: -5,
            color: "var(--primary-color)",
            transition: { type: "spring", stiffness: 300 },
          }}
          whileTap={{ scale: 0.9 }}
        >
          <FaLinkedin />
        </motion.a>
        <motion.a
          href="https://github.com/aisymz"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{
            scale: 1.2,
            color: "var(--primary-color)",
            transition: { type: "spring", stiffness: 300 },
          }}
          whileTap={{ scale: 0.9 }}
        >
          <FaGithub />
        </motion.a>
        <motion.a
          href="https://wa.me/6285624851385"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{
            scale: 1.2,
            rotate: 5,
            color: "var(--primary-color)",
            transition: { type: "spring", stiffness: 300 },
          }}
          whileTap={{ scale: 0.9 }}
        >
          <FaWhatsapp />
        </motion.a>
      </motion.div>
    </motion.section>
  );
};

export default Contact;
