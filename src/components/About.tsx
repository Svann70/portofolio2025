import { motion } from 'framer-motion';

const skills = {
  'Technical': ['Python', 'Go', 'JavaScript', 'Next.js', 'React', 'HTML/CSS', 'C++', 'MySQL', 'PostgreSQL', 'Git', 'Microsoft Excel'],
  'AI & Tools': ['Hermes Agent', 'Autonomous AI Coding Agents', 'LLM APIs (OpenAI & Anthropic)', 'Figma', 'VSCode', 'Adobe Photoshop', 'Microsoft Office'],
  'Soft': ['Teamwork', 'Communication', 'Time Management', 'Problem Solving', 'Critical Thinking', 'Creativity'],
  'Languages': ['Indonesian (Native)', 'English (Intermediate)'],
};

const stats = [
  { label: 'GPA', value: '3.96' },
  { label: 'Projects', value: '10+' },
  { label: 'Semester', value: '3rd' },
  { label: 'Focus', value: 'UI/UX' },
];

const education = [
  {
    school: 'Universitas Cakrawala',
    place: 'Jakarta, Indonesia',
    detail: 'B.Sc. Computer Science — 3rd Semester · GPA 3.96 / 4.00 (Semesters 1–2)',
  },
  {
    school: 'SMAN 4 Depok',
    place: 'Depok, Indonesia',
    detail: '2022 — 2025 · Majors: IPA · Ranked Top 10 in the Science (IPA) SNBP Eligibility List',
  },
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
                    Software Engineer &amp; UI/UX Designer
                  </p>
                </div>
                <p className="text-sm leading-relaxed" style={{ color: 'var(--gray-2)' }}>
                  Curious and fast-learning Computer Science student with a dual
                  focus on software engineering and UI/UX design. Hands-on
                  experience building web applications with Next.js, Go, React,
                  JavaScript, Python, PostgreSQL, and MySQL — with active
                  adoption of autonomous AI agents in daily engineering
                  workflows. A track record spanning full-stack AI applications,
                  technical marketing, freelance web development, student
                  leadership, and international grant-awarded software projects.
                </p>
              </div>
            </div>

            {/* Education */}
            <div>
              <span className="font-mono text-[0.65rem] uppercase tracking-[0.15em]" style={{ color: 'var(--gray-3)' }}>
                Education
              </span>
              <div className="space-y-6 mt-4">
                {education.map((e, i) => (
                  <motion.div
                    key={e.school}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 * i }}
                    className="border-l-2 pl-6"
                    style={{ borderColor: 'var(--accent)' }}
                  >
                    <h4 className="text-lg font-medium mb-1" style={{ color: 'var(--ink)' }}>
                      {e.school}
                    </h4>
                    <p className="text-sm mb-1" style={{ color: 'var(--gray-3)' }}>{e.place}</p>
                    <p className="text-sm" style={{ color: 'var(--gray-3)' }}>{e.detail}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-3">
              {stats.map((stat, i) => (
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
            <div className="space-y-10">
              {Object.entries(skills).map(([group, items], gi) => (
                <div key={group}>
                  <h4
                    className="font-mono text-[0.65rem] uppercase tracking-[0.15em] mb-4"
                    style={{ color: 'var(--gray-3)' }}
                  >
                    {group}
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {items.map((item, i) => (
                      <motion.span
                        key={item}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.05 * gi + i * 0.02 }}
                        className="px-3.5 py-2 rounded-xl text-xs font-medium cursor-default transition-colors duration-300 hover:text-[var(--accent)]"
                        style={{ background: 'var(--paper)', color: 'var(--ink)' }}
                      >
                        {item}
                      </motion.span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;