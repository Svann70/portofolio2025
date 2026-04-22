import { motion } from 'framer-motion';



const tools = [
  { name: 'PHP', note: 'Backend' },
  { name: 'MySQL', note: 'Database' },
  { name: 'Python', note: 'Scripting' },
  { name: 'HTML/CSS', note: 'Markup' },
  { name: 'JavaScript', note: 'Frontend' },
  { name: 'React', note: 'Framework' },
  { name: 'Figma', note: 'Design' },
  { name: 'Photoshop', note: 'Editing' },
  { name: 'Illustrator', note: 'Vector' },
];



const About = () => {
  return (
    <section id="about" className="py-20 sm:py-32 relative" style={{ background: 'var(--paper-warm)' }}>
      <div className="px-6 sm:px-8 lg:px-12 xl:px-16">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16 sm:mb-24"
        >
          <div className="flex items-center gap-4 mb-4">
            <div className="rule-accent" />
          </div>
          <h2
            className="font-serif italic tracking-[-0.02em]"
            style={{
              fontSize: 'clamp(2.5rem, 6vw, 5rem)',
              color: 'var(--ink)',
              lineHeight: 1,
            }}
          >
            About<br />
            <span className="font-sans font-light not-italic">Me</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left — Bio */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 space-y-12"
          >
            {/* Profile */}
            <div className="flex flex-col sm:flex-row gap-8 items-start">
              <div className="w-36 h-36 sm:w-44 sm:h-44 flex-shrink-0 overflow-hidden rounded-2xl">
                <img
                  src="/fotoprofil.jpg"
                  alt="Ivander Daniel"
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                />
              </div>
              <div className="flex-1">
                <h3 className="text-xl sm:text-2xl font-medium mb-1" style={{ color: 'var(--ink)', letterSpacing: '-0.02em' }}>
                  Ivander Daniel Napitupulu
                </h3>
                <div className="flex items-center gap-2 mb-4">
                  <span className="inline-block w-1.5 h-1.5 rounded-full" style={{ background: 'var(--accent)' }} />
                  <p className="font-mono text-xs" style={{ color: 'var(--accent)' }}>
                    Software Engineer & UI/UX Designer
                  </p>
                </div>
                <p className="text-sm leading-relaxed" style={{ color: 'var(--gray-2)' }}>
                  A junior software engineer with a strong interest in
                  web development, user interface design, and
                  educational technology. I enjoy learning new technologies,
                  improving code quality, and creating applications that are
                  not only functional but also easy to use and visually
                  well-structured.
                </p>
              </div>
            </div>

            {/* Education */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="border-l-2 pl-6"
              style={{ borderColor: 'var(--accent)' }}
            >
              <span className="font-mono text-[0.65rem] uppercase tracking-[0.15em]" style={{ color: 'var(--gray-3)' }}>
                Education
              </span>
              <h4 className="text-lg font-medium mt-2 mb-1" style={{ color: 'var(--ink)' }}>
                Cakrawala University
              </h4>
              <p className="text-sm" style={{ color: 'var(--gray-3)' }}>
                Computer Science — Software Engineering & UI/UX Design focus
              </p>
            </motion.div>

            {/* Stats */}
            <div className="flex flex-wrap gap-3">
              {[
                { label: 'Projects', value: '10+' },
                { label: 'Years', value: '1+' },
                { label: 'Skills', value: '9+' },
                { label: 'Focus', value: 'UI/UX' },
              ].map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * i }}
                  className="px-5 py-4 rounded-xl flex-1 min-w-[100px]"
                  style={{ background: 'var(--paper)' }}
                >
                  <div className="font-serif italic text-2xl sm:text-3xl mb-0.5" style={{ color: 'var(--ink)' }}>
                    {stat.value}
                  </div>
                  <div className="font-mono text-[0.55rem] uppercase tracking-[0.12em]" style={{ color: 'var(--gray-3)' }}>
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right — Skills */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="lg:col-span-5"
            id="skills"
          >
            <div>

              <h4 className="font-mono text-[0.65rem] uppercase tracking-[0.15em] mt-12 mb-6" style={{ color: 'var(--gray-3)' }}>
                Toolkit
              </h4>
              <div className="flex flex-wrap gap-2">
                {tools.map((t, i) => (
                  <motion.div
                    key={t.name}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 + i * 0.03 }}
                    className="px-4 py-2.5 rounded-xl text-center group cursor-default"
                    style={{ background: 'var(--paper)' }}
                  >
                    <div className="text-sm font-medium group-hover:text-[var(--accent)] transition-colors duration-300" style={{ color: 'var(--ink)' }}>
                      {t.name}
                    </div>
                    <div className="font-mono text-[0.5rem] mt-0.5" style={{ color: 'var(--gray-4)' }}>
                      {t.note}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
