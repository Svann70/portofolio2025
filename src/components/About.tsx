import { motion } from 'framer-motion';
import { Code2, Palette, Layers, GraduationCap } from 'lucide-react';

const skills = [
  {
    icon: Code2,
    title: 'Development',
    description: 'PHP, MySQL, Python, HTML/CSS, JavaScript, React',
  },
  {
    icon: Palette,
    title: 'Design',
    description: 'Figma, Illustrator, Photoshop, Brand Identity',
  },
  {
    icon: Layers,
    title: 'UI/UX',
    description: 'User Research, Prototyping, Interaction Design',
  },
];

const About = () => {
  return (
    <section id="about" className="py-16 sm:py-24 lg:py-32 relative overflow-hidden">
      {/* Subtle background gradient */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-0 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] rounded-full bg-primary/5 blur-[80px] sm:blur-[120px]" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-12 relative">
        <div className="grid lg:grid-cols-12 gap-10 sm:gap-12 lg:gap-20 items-start">
          {/* Left Column - Main Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-6 sm:space-y-8"
          >
            <div>
              <span className="text-sm font-medium text-primary mb-3 sm:mb-4 block">About</span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-semibold text-foreground mb-4 sm:mb-6">
                Engineer by training,
                <br />
                <span className="text-gradient">designer by passion.</span>
              </h2>
            </div>

            <div className="space-y-4 sm:space-y-6 text-muted-foreground text-base sm:text-lg leading-relaxed">
              <p>
                I am Ivander Daniel Napitupulu, a junior software engineer with a strong interest in web development, user interface design, and educational technology.
              </p>
              <p>
                I enjoy learning new technologies, improving code quality, and creating applications that are not only functional but also easy to use and visually well-structured. I am currently focusing on developing my skills in frontend development and modern web technologies.
              </p>
            </div>

            {/* Education */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="glass-card p-4 sm:p-6 flex items-start gap-3 sm:gap-4"
            >
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                <GraduationCap className="text-primary w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-1 text-sm sm:text-base">Education</h4>
                <p className="text-muted-foreground text-sm sm:text-base">
                  Computer Science Background at Cakrawala University with focus on software engineering and UI/UX Designing.
                </p>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column - Skills */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5 space-y-4 sm:space-y-6"
          >
            <h3 className="text-base sm:text-lg font-semibold text-foreground mb-4 sm:mb-6">Skills & Expertise</h3>

            {skills.map((skill, index) => (
              <motion.div
                key={skill.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                className="glass-card p-4 sm:p-6 group hover:bg-card/80 transition-all duration-300 relative overflow-hidden"
              >
                {/* Background SVG Icon */}
                <div className="absolute right-[-10px] bottom-[-10px] opacity-[0.05] group-hover:opacity-[0.1] transition-opacity duration-300 pointer-events-none">
                  {skill.title === 'Development' && (
                    <svg viewBox="0 0 128 128" className="w-24 h-24 text-foreground fill-current">
                      <path d="M63.6 15.6C44.3 15.6 37 24.3 37 36.3V44h26.5v3.4H24.8C12 47.4 5.7 54.3 5.7 66.8v16.7c0 12.3 5.7 18 19 18h9.8v-3.7c0-12 5.5-17.7 17.7-17.7h18.2c6.4 0 9.2-2.7 9.2-9.2V50.6c0-6.4-2.8-9.2-9.2-9.2h-18v-3c0-6 2.8-8.8 8.8-8.8h19.8c6 0 8.8 2.8 8.8 8.8v2.8h15V36.3c0-11.8-6.1-20.7-27.1-20.7zM45.5 28.1c2.4 0 4.3 2 4.3 4.3s-2 4.3-4.3 4.3c-2.4 0-4.3-2-4.3-4.3s2-4.3 4.3-4.3zm20.8 35.8H48.1c-6.4 0-9.2 2.7-9.2 9.2V93c0 6.4 2.8 9.2 9.2 9.2h18v3c0 6-2.8 8.8-8.8 8.8H37.5c-6 0-8.8-2.8-8.8-8.8v-2.8H13.7v4c0 11.8 6.1 20.7 27.2 20.7 19.3 0 26.5-8.8 26.5-20.7V99.7H40.8v-3.4h38.7c12.7 0 19-6.9 19-19.5V60.2c0-12.3-5.7-18-19-18H66.3v3.7c0 12-5.5 17.8-17.8 17.8h-.1zM84.4 91.3c2.4 0 4.3 2 4.3 4.3s-2 4.3-4.3 4.3c-2.4 0-4.3-2-4.3-4.3s1.9-4.3 4.3-4.3z" />
                    </svg>
                  )}
                  {skill.title === 'Design' && (
                    <svg viewBox="0 0 24 24" className="w-24 h-24 text-foreground fill-current">
                      <path d="M20 18v-1c0-2.21-3.58-4-8-4s-8 1.79-8 4v1h16zm-8-6c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm9 8l1 2H2l1-2h18z" />
                    </svg>
                  )}
                  {skill.title === 'UI/UX' && (
                    <svg viewBox="0 0 128 128" className="w-24 h-24 text-foreground fill-current">
                      <path d="M14.5 9h99v99h-99V9zm87.3 75.2c1.7-10.2-3.7-13.4-6.8-14.7-5-2.2-9 1-10.5 2.6-1 1-3.2-.8-2.6-2.9 1.7-5.5 9-8.4 15.6-5.8 5.6 2.2 9.5 7.8 8.1 16.5-.9 5.8-3.7 28.5-3.7 28.5s-.8 5.2-6.9 5.2c-5.5 0-9.2-2.3-11.4-6.9-1.2-2.5 1.5-4.3 2.9-2.9 2 2 4 1.9 4.3.4.5-2.3 3.6-17.7 3.6-17.7s.9-5.1 7.4-2.3zm-39.4 4c0-2-1.3-3.6-3.3-3.9-3.4-.6-6.1-2.9-6.1-6.9 0-4.9 3.9-8.5 9-8.5 4.3 0 7.4 2.5 8.7 6.4.5 1.6-1.9 2.9-2.7 1.4-1.1-2.2-2.7-3.7-5.5-3.7-2.6 0-4.4 1.8-4.4 4.3 0 1.9 1.4 3.3 4.2 3.9 4.5 1 7.9 3.2 7.9 8.2 0 5.3-4.1 9-9.6 9-5.1 0-8.7-2.9-10.2-7.1-.6-1.7 1.8-3.1 2.8-1.5 1.2 1.9 3.2 4.4 6.8 4.4 2.9 0 4.8-1.7 4.8-4.5z" />
                    </svg>
                  )}
                </div>

                <div className="flex items-start gap-3 sm:gap-4 relative z-10">
                  <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-muted flex items-center justify-center group-hover:bg-primary/10 transition-colors flex-shrink-0">
                    <skill.icon className="text-muted-foreground group-hover:text-primary transition-colors w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1 text-sm sm:text-base">{skill.title}</h4>
                    <p className="text-xs sm:text-sm text-muted-foreground">{skill.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}

            {/* Stats */}
            <div className="grid grid-cols-2 gap-3 sm:gap-4 pt-2 sm:pt-4">
              <div className="glass-card p-4 sm:p-5 text-center">
                <div className="text-xl sm:text-2xl font-display font-semibold text-primary mb-1">10+</div>
                <div className="text-xs sm:text-sm text-muted-foreground">Projects</div>
              </div>
              <div className="glass-card p-4 sm:p-5 text-center">
                <div className="text-xl sm:text-2xl font-display font-semibold text-primary mb-1">1+</div>
                <div className="text-xs sm:text-sm text-muted-foreground">Years Experience</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;