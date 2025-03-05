import { useRef } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.3 } }
};

function App() {
  const scrollRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ["start start", "end end"]
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

 

  return (
    <div ref={scrollRef} className="bg-[#0a0a0a] text-white min-h-screen">
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 transform-origin-0 z-50"
        style={{ scaleX }}
      />

      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="min-h-screen flex items-center justify-center relative overflow-hidden"
      >
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(51,65,85,0.3)_0,#000_100%)]" />
          <motion.div
            animate={{
              backgroundPosition: ['0% 0%', '100% 100%'],
              opacity: [0.3, 0.15]
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              repeatType: "reverse"
            }}
            className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa')] bg-cover bg-center"
          />
        </div>

        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="z-10 text-center space-y-8 px-4"
        >
          <motion.h1
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", stiffness: 100 }}
            className="text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500"
          >
            Ziad Bouhabbadi
          </motion.h1>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-2xl text-gray-300"
          >
            Développeur Full Stack & SEO
          </motion.p>

          {/* Social Icons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex justify-center gap-6 mt-8"
          >
            {[
              {
                name: "GitHub",
                path: "M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z",
                link: "https://github.com/ziadbouh"
              },
              {
                name: "LinkedIn",
                path: "M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z",
                link: "https://www.linkedin.com/in/ziad-bouhabbadi/"
              },
              {
                name: "Email",
                path: "M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z",
                link: "mailto:your.ziad09.otz@gmail.com"
              }
            ].map((icon) => (
              <motion.a
                key={icon.name}
                href={icon.link}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                className="w-10 h-10 relative group"
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg blur opacity-0 group-hover:opacity-70 transition-opacity"
                />
                <motion.svg
                  viewBox="0 0 24 24"
                  className="w-full h-full fill-current text-white relative z-10"
                >
                  <path d={icon.path} />
                </motion.svg>
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
      </motion.section>

      {/* Statistiques */}
      <motion.section
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="py-20 px-4 bg-gradient-to-b from-transparent to-gray-900/30"
      >
        <div className="max-w-6xl mx-auto">
  <div className="grid grid-cols-2 md:grid-cols-4 gap-8 justify-center">
    {[
      { number: "20+", text: "Projets Réalisés" },
      { number: "99%", text: "Taux de Satisfaction" }
    ].map((achievement, index) => (
      <motion.div
        key={index}
        variants={itemVariants}
        className="text-center col-span-2"
      >
        <motion.div
          whileHover={{ scale: 1.1 }}
          className="p-6 rounded-2xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-lg"
        >
          <motion.h3
            className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500"
          >
            {achievement.number}
          </motion.h3>
          <p className="text-gray-300 mt-2">{achievement.text}</p>
        </motion.div>
      </motion.div>
       
            ))}
          </div>
        </div>
      </motion.section>

      {/* À propos */}
      <motion.section
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        className="py-20 px-4"
      >
        <div className="max-w-4xl mx-auto">
          <motion.h2
            variants={itemVariants}
            className="text-4xl font-bold mb-12 text-center"
          >
            À propos
          </motion.h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              variants={itemVariants}
              className="relative group"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="relative z-10 rounded-2xl overflow-hidden"
              >
                <img
                  src="/image/IMG_0614.jpg" // Remplacez par le chemin réel de votre image
                  alt="Profile"
                  className="w-full rounded-xl shadow-2xl"
                />
                <motion.div
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-6"
                >
                  <p className="text-white text-sm">développeur freelance </p>
                </motion.div>
              </motion.div>
            </motion.div>
            <motion.div
              variants={itemVariants}
              className="space-y-6"
            >
              <p className="text-lg text-gray-300 ">
                Passionné par le développement web , je crée des expériences
                digitales uniques qui allient performance et esthétique.
              </p>
              <p className="text-lg text-gray-300">
                Mon approche combine créativité et expertise technique pour donner vie à des
                projets innovants qui dépassent les attentes.
              </p>
             
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Skills Section */}
      <motion.section
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="py-20 px-4 bg-gray-900/50"
      >
        <div className="max-w-4xl mx-auto">
        <motion.h2
    variants={itemVariants}
    className="text-4xl font-bold mb-12 text-center"
  >
    Compétences
  </motion.h2>
  <div className="grid grid-cols-2 md:grid-cols-4 gap-8 justify-center">
    <div className="col-span-2">
      <h3 className="text-2xl font-semibold mb-4 text-center">Frontend</h3>
      {[
        { name: "React & Next.js", level: 95 },
        { name: "Boostrap", level: 80 },
        { name: "Méthode agile", level: 100 },
        { name: "JavaScript", level: 85 },
        { name: "Tailwind CSS", level: 95 },
        { name: "Figma", level: 60 }
      ].map((skill) => (
        <motion.div
          key={skill.name}
          variants={itemVariants}
          whileHover={{ scale: 1.02 }}
          className="bg-gray-800/30 p-6 rounded-xl backdrop-blur-lg mb-4"
        >
          <div className="flex justify-between mb-2">
            <span className="font-medium">{skill.name}</span>
            <span>{skill.level}%</span>
          </div>
          <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: `${skill.level}%` }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              className="h-full bg-gradient-to-r from-blue-500 to-purple-600"
            />
          </div>
        </motion.div>
      ))}
    </div>
    <div className="col-span-2">
      <h3 className="text-2xl font-semibold mb-4 text-center">Backend</h3>
      {[
        { name: "Node.js", level: 80 },
        { name: "Bash", level: 85 },
        { name: "linux", level: 70 },
        { name: "Nest.js", level: 75 },
        { name: "sqlite", level: 70 },
        { name: "MongoDB", level: 30 },
        { name: "postres SQL", level: 60 },
        { name: "express", level: 80 }
      ].map((skill) => (
        <motion.div
          key={skill.name}
          variants={itemVariants}
          whileHover={{ scale: 1.02 }}
          className="bg-gray-800/30 p-6 rounded-xl backdrop-blur-lg mb-4"
        >
          <div className="flex justify-between mb-2">
            <span className="font-medium">{skill.name}</span>
            <span>{skill.level}%</span>
          </div>
          <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: `${skill.level}%` }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              className="h-full bg-gradient-to-r from-blue-500 to-purple-600"
            />
          </div>
        </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.section>

      {/* Projects Section */}
      <motion.section
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="py-20 px-4"
      >
        <div className="max-w-6xl mx-auto">
          <motion.h2
            variants={itemVariants}
            className="text-4xl font-bold mb-12 text-center"
          >
           quelque  Projets
          </motion.h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "application de musique en javascript ",
                description: "Une expérience d'achat premium avec un design épuré et des animations fluides",
                video: "../src/public/image/Enregistrement de l'écran 2024-10-11 204503.mp4",
                
                tags: ["javascript"],
              },
              {
                title: "platefome de e-commerce full stack seo",
                description: "Interface d'analyse prédictive avec visualisation de données en temps réel",
                video: "../src/public/image/Vidéo sans titre ‐ Réalisée avec Clipchamp.mp4",
                tags: ["ejs", "postres SQL", "express", "node.js"],
              },
              {
                title: "calculatrice en javascript",
                description: "j'ai fait une calculatrice en javascript",
                image: "../src/public/image/Capture d'écran 2024-11-04 201018.png", // Chemin corrigé
                tags: ["JavaScript"],
              },
              {
                title: "Système Solaire",
                video: "../src/public/image/Enregistrement de l'écran 2024-12-27 125529.mp4",
                tags: ["HTML", "CSS"],
              }
            ].map((project, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -10 }}
                className="bg-gray-800/30 rounded-xl overflow-hidden backdrop-blur-lg"
              >
                <div className="h-48">
                  {project.video ? (
                    <motion.video
                      whileHover={{ scale: 1.1 }}
                      src={project.video}
                      alt={project.title}
                      className="w-full h-full object-cover"
                      controls
                    />
                  ) : (
                    <motion.img
                      whileHover={{ scale: 1.1 }}
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                  )}
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-gray-400 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-3 py-1 bg-gray-700/50 rounded-full text-sm font-medium text-blue-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                 
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Contact Section */}
      <motion.section
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="py-20 px-4"
      >
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            variants={itemVariants}
            className="text-4xl font-bold mb-8"
          >
            Contact
          </motion.h2>
          <motion.a
            href="mailto:ziad09.otz@gmail.com"
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            className="inline-block bg-gradient-to-r from-blue-500 to-purple-600 px-8 py-4 rounded-full font-semibold text-lg"
          >
            Me contacter
          </motion.a>
        </div>
      </motion.section>
    </div>
  );
}

export default App;