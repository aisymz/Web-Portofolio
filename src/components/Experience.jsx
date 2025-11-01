import { motion } from "framer-motion";
import Projects from "./Projects";
import vscodelogo from "../assets/Photo/vscode.png";

import { FaReact, FaGitAlt } from "react-icons/fa";
import {
  SiRedux,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiAxios,
} from "react-icons/si";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100 } },
};

const skills = [
  { name: "HTML", icon: <SiHtml5 color="#E34F26" /> },
  { name: "CSS", icon: <SiCss3 color="#1572B6" /> },
  { name: "React", icon: <FaReact color="#61DAFB" /> },
  { name: "Redux", icon: <SiRedux color="#764ABC" /> },
  { name: "JavaScript", icon: <SiJavascript color="#F7DF1E" /> },
  { name: "Axios", icon: <SiAxios color="#5A29E4" /> },
  { name: "Git", icon: <FaGitAlt color="#F05032" /> },
  {
    name: "VS Code",
    icon: <img src={vscodelogo} alt="Vs Code Logo" className="skill-logo" />,
  },
];

const softSkills = [
  "Komunikasi efektif",
  "Kolaborasi",
  "Berpikir Kritis dan kreatif",
  "berpikir analitis",
  "Pemecahan masalah",
  "Manajemen waktu",
];

const languages = ["Indonesia (native)", "English (beginner)"];

const Experience = () => {
  return (
    <motion.section
      id="experience"
      className="section"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={containerVariants}
    >
      <motion.h2 variants={itemVariants}>Skill & Education</motion.h2>

      {/* Hard Skill */}
      <div className="experience-category">
        <motion.h3 variants={itemVariants}>Hard Skills</motion.h3>
        <motion.div className="skills-grid">
          {skills.map((skill) => (
            <motion.div
              key={skill.name}
              className="skill-card"
              variants={itemVariants}
              whileHover={{
                y: -10,
                scale: 1.05,
                transition: { type: "spring", stiffness: 300 },
              }}
            >
              {skill.icon}
              <span>{skill.name}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Soft Skill */}
      <div className="experience-category">
        <motion.h3 variants={itemVariants}>Soft Skills</motion.h3>
        <motion.div className="skill-cloud" variants={itemVariants}>
          {softSkills.map((skill) => (
            <motion.span
              key={skill}
              className="skill-tag-cloud"
              variants={itemVariants}
              whileHover={{
                scale: 1.15,
                transition: { type: "spring", stiffness: 300 },
              }}
            >
              {skill}
            </motion.span>
          ))}
        </motion.div>
      </div>

      {/* Bahasa */}
      <div className="experience-category">
        <motion.h3 variants={itemVariants}>Language</motion.h3>
        <motion.div className="soft-skills-list" variants={itemVariants}>
          {languages.map((lang) => (
            <motion.span
              key={lang}
              className="soft-skill-tag"
              variants={itemVariants}
              whileHover={{
                scale: 1.1,
                y: -3,
                transition: { type: "spring", stiffness: 300 },
              }}
            >
              {lang}
            </motion.span>
          ))}
        </motion.div>
      </div>

      {/* Pendidikan */}
      <div className="experience-category">
        <motion.h3 variants={itemVariants}>Education</motion.h3>
        <ul className="experience-list">
          <motion.li
            className="experience-item"
            variants={itemVariants}
            whileHover={{
              y: -5,
              borderColor: "var(--primary-color)",
              transition: { type: "spring", stiffness: 300 },
            }}
          >
            <div className="experience-item-content">
              <div className="experience-item-header">
                <h4>Bootcamp Harisenin</h4>
              </div>
              <p className="experience-item-subheader">
                Full Stack Web Developer
              </p>
              <span>Juni - November 2025</span>
            </div>
          </motion.li>
          <motion.li
            className="experience-item"
            variants={itemVariants}
            whileHover={{
              y: -5,
              borderColor: "var(--primary-color)",
              transition: { type: "spring", stiffness: 300 },
            }}
          >
            <div className="experience-item-content">
              <div className="experience-item-header">
                <h4>Universitas Pendidikan Indonesia</h4>
              </div>
              <p className="experience-item-subheader">
                S1 Pendidikan Geografi
              </p>
              <p
                style={{
                  fontSize: "0.9rem",
                  opacity: 0.8,
                  marginBottom: "0.5rem",
                }}
              >
                IPK / GPA: 3,45 / 4.00
              </p>
              <span>2020 - 2024</span>
            </div>
          </motion.li>
        </ul>
      </div>
      <Projects />

      <motion.h2 variants={itemVariants}>Experience & Organization</motion.h2>

      {/* Pengalaman */}
      <div className="experience-category">
        <motion.h3 variants={itemVariants}>Experience</motion.h3>
        <ul className="experience-list">
          <motion.li
            className="experience-item"
            variants={itemVariants}
            whileHover={{
              y: -5,
              borderColor: "var(--primary-color)",
              transition: { type: "spring", stiffness: 300 },
            }}
          >
            <div className="experience-item-content">
              <div className="experience-item-header">
                <h4>SMAN 13 Bandung</h4>
              </div>
              <p className="experience-item-subheader">Guru Geografi</p>
              <ul className="experience-item-details">
                <li>
                  Merancang dan mengembangkan perangkat pembelajaran yang
                  terstruktur untuk menyederhanakan konsep-konsep kompleks bagi
                  lebih dari 90 siswa di 5 kelas.
                </li>
                <li>
                  Membantu pengelolaan administrasi sekolah yang melibatkan
                  pendataan pemeliharaan dokumen secara terorganisir untuk
                  menjaga kelancaran operasional.
                </li>
                <li>
                  Menganalisis dan mengevaluasi hasil belajar serta memberikan
                  umpan balik (feedback) yang konstruktif untuk mendukung
                  perkembangan setiap peserta didik. Berkontribusi aktif dalam
                  perencanaan dan pelaksanaan ekstrakulikuler.
                </li>
              </ul>
              <span>Februari - Juli 2023</span>
            </div>
          </motion.li>
        </ul>
      </div>

      {/* Organisasi */}
      <div className="experience-category">
        <motion.h3 variants={itemVariants}>Organization Experience</motion.h3>
        <ul className="experience-list organization-grid">
          <motion.li
            className="experience-item"
            variants={itemVariants}
            whileHover={{
              y: -5,
              borderColor: "var(--primary-color)",
              transition: { type: "spring", stiffness: 300 },
            }}
          >
            <div className="experience-item-content">
              <div className="experience-item-header">
                <h4>BEM Himpunan Mahasiswa Pendidikan Geografi</h4>
              </div>
              <p className="experience-item-subheader">
                Staf Komisi Aspirasi | Dewan Perwakilan Mahasiswa (DPM)
              </p>
              <ul className="experience-item-details">
                <li>
                  Menginisiasi sistem untuk menampung aspirasi dan feedback dari
                  seluruh departemen guna memastikan keterwakilan dalam
                  pengambilan keputusan strategis BEM.
                </li>
              </ul>
              <p
                className="experience-item-subheader"
                style={{ marginTop: "1.5rem", marginBottom: "0.25rem" }}
              >
                Staf Biro Seni | Departemen Minat dan Bakat
              </p>
              <ul className="experience-item-details">
                <li>
                  Berkolaborasi dalam tim untuk merancang dan mengeksekusi
                  program kerja yang bertujuan meningkatkan partisipasi
                  mahasiswa dalam bidang kesenian.
                </li>
              </ul>
              <span>2021 - 2024</span>
            </div>
          </motion.li>{" "}
          <motion.li
            className="experience-item"
            variants={itemVariants}
            whileHover={{
              y: -5,
              borderColor: "var(--primary-color)",
              transition: { type: "spring", stiffness: 300 },
            }}
          >
            <div className="experience-item-content">
              <div className="experience-item-header">
                <h4>Kuliah Kerja Lapangan Tahap II & III (UPI)</h4>
              </div>
              <p className="experience-item-subheader">
                Panitia Teknis Lapangan
              </p>
              <ul className="experience-item-details">
                <li>
                  {" "}
                  Mengkoordinasikan logistik dan alur kegiatan lapangan untuk
                  peserta di dua lokasi di Desa Wisata Dieng (KKL Tahap 1) dan
                  Provinsi Bali (KKL Tahap 2).
                </li>
                <li>
                  {" "}
                  Memastikan semua aktivitas berjalan sesuai prosedur yang
                  ditetapkan, serta proaktif dalam menyelesaikan masalah
                  (problem solving) yang muncul di lapangan.
                </li>
              </ul>
              <span>2022 - 2023</span>
            </div>
          </motion.li>{" "}
        </ul>
      </div>
    </motion.section>
  );
};

export default Experience;
