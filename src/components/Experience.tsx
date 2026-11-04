import { motion } from 'framer-motion';

type Job = {
  role: string;
  org: string;
  period: string;
  note?: string;
  points: string[];
};

const jobs: Job[] = [
  {
    role: 'UI/UX Designer — Internship',
    org: 'PPKD Jakarta Selatan',
    period: 'Mar 2026 — Aug 2026',
    note: 'WFH',
    points: [
      'Redesigned the SILATIPE website to improve usability, visual clarity, and overall user experience.',
      'Simplified layout and navigation into a more intuitive, user-friendly interface.',
      'Developed wireframes and high-fidelity designs in Figma based on user-centered design principles.',
      'Improved consistency across UI components, typography, and spacing for a cleaner, modern design.',
    ],
  },
  {
    role: 'UI/UX Designer',
    org: 'Student Government Association, Cakrawala University',
    period: 'Feb 2026 — Present',
    points: [
      'Designed and developed the UI/UX for the Student Government Association landing page.',
      'Created user flows, wireframes, and high-fidelity prototypes using Figma.',
      'Structured a clean, intuitive layout to improve navigation and information accessibility.',
      'Ensured visual consistency in typography, spacing, and UI components.',
    ],
  },
  {
    role: 'Website Developer — Freelance',
    org: 'Depok, Indonesia',
    period: 'Dec 2025 — Present',
    points: [
      'Developed and deployed custom web applications using modern JavaScript, HTML/CSS, and relational database backends.',
      'Handled end-to-end client consultation, requirements analysis, implementation, testing, and production deployment.',
    ],
  },
  {
    role: 'Musician — Freelance',
    org: 'Depok, Indonesia',
    period: 'Dec 2023 — Present',
    points: ['Performed as a musician for various events.'],
  },
];

const awards = [
  '2nd Place — UI/UX Competition, Cakrawala Arena (Jual Beli Musang Team)',
  'Best Collaboration Project — Ekonomi Kreatif Design Festival 2025 (PenDuduk)',
  'Ranked Top 10 in the Science (IPA) SNBP Eligibility List',
];

const courses = [
  'Guest Lecture: Creative Problem Solving & Python Mini Project — Cakrawala University (Oct 2025)',
  'Guest Lecture: Data Visualization with Tableau — Cakrawala University (Nov 2025)',
  'Anthropic Certificate of Completion: AI Fluency Framework & Foundations (May 2026)',
];

const organization = {
  role: 'Music Division, Vice Chair',
  org: 'Christian Student Fellowship of SMAN 4 Depok',
  period: '2023 — 2025',
  points: [
    'Performed as a musician for Easter services, Christmas celebrations, and weekly Friday worship sessions.',
    'Assisted in leading and coordinating the Music Division — equipment, song arrangements, and rehearsals.',
    'Contributed as Vice Chair in planning and organizing major events such as Easter and Christmas.',
    'Collaborated with team members to manage workflow and support regular worship activities.',
  ],
};

const Experience = () => {
  return (
    <section id="experience" className="py-20 sm:py-32 relative" style={{ background: 'var(--paper)' }}>
      <div className="absolute top-0 left-0 right-0 h-px" style={{ background: 'var(--gray-5)' }} />

      <div className="px-6 sm:px-8 lg:px-12 xl:px-16">
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
            style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)', color: 'var(--ink)', lineHeight: 1 }}
          >
            Work<br />
            <span className="font-sans font-light not-italic">Experience</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Jobs */}
          <div className="lg:col-span-7 space-y-12">
            {jobs.map((job, i) => (
              <motion.div
                key={job.role + job.org}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.6 }}
                className="border-l-2 pl-6"
                style={{ borderColor: 'var(--accent)' }}
              >
                <span className="font-mono text-[0.6rem] uppercase tracking-[0.15em]" style={{ color: 'var(--gray-3)' }}>
                  {job.period}{job.note ? ` · ${job.note}` : ''}
                </span>
                <h3 className="text-lg font-medium mt-2" style={{ color: 'var(--ink)', letterSpacing: '-0.02em' }}>
                  {job.role}
                </h3>
                <p className="text-sm mb-3" style={{ color: 'var(--accent)' }}>{job.org}</p>
                <ul className="space-y-2">
                  {job.points.map((p) => (
                    <li key={p} className="text-sm leading-relaxed flex gap-2" style={{ color: 'var(--gray-2)' }}>
                      <span style={{ color: 'var(--gray-4)' }}>—</span>
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          {/* Side: awards, courses, org */}
          <div className="lg:col-span-5 space-y-12">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 }}
            >
              <h4 className="font-mono text-[0.65rem] uppercase tracking-[0.15em] mb-4" style={{ color: 'var(--gray-3)' }}>
                Honors & Awards
              </h4>
              <ul className="space-y-3">
                {awards.map((a) => (
                  <li key={a} className="text-sm leading-relaxed flex gap-2" style={{ color: 'var(--gray-2)' }}>
                    <span style={{ color: 'var(--accent)' }}>•</span>
                    <span>{a}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <h4 className="font-mono text-[0.65rem] uppercase tracking-[0.15em] mb-4" style={{ color: 'var(--gray-3)' }}>
                Training & Courses
              </h4>
              <ul className="space-y-3">
                {courses.map((c) => (
                  <li key={c} className="text-sm leading-relaxed flex gap-2" style={{ color: 'var(--gray-2)' }}>
                    <span style={{ color: 'var(--accent)' }}>•</span>
                    <span>{c}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.25 }}
              className="p-6 rounded-2xl"
              style={{ background: 'var(--paper-warm)' }}
            >
              <h4 className="font-mono text-[0.65rem] uppercase tracking-[0.15em] mb-3" style={{ color: 'var(--gray-3)' }}>
                Organization
              </h4>
              <h3 className="text-base font-medium" style={{ color: 'var(--ink)' }}>{organization.role}</h3>
              <p className="text-sm mb-1" style={{ color: 'var(--accent)' }}>{organization.org}</p>
              <p className="font-mono text-[0.6rem] mb-4" style={{ color: 'var(--gray-4)' }}>{organization.period}</p>
              <ul className="space-y-2">
                {organization.points.map((p) => (
                  <li key={p} className="text-sm leading-relaxed flex gap-2" style={{ color: 'var(--gray-2)' }}>
                    <span style={{ color: 'var(--gray-4)' }}>—</span>
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;