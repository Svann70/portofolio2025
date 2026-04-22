import { motion } from 'framer-motion';
import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = `Contact from ${formData.name}`;
    const body = `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`;
    window.location.href = `mailto:ivanderdaniel79@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <section id="contact" className="py-20 sm:py-32 relative" style={{ background: 'var(--paper)' }}>
      <div className="absolute top-0 left-0 right-0 h-px" style={{ background: 'var(--gray-5)' }} />

      <div className="px-6 sm:px-8 lg:px-12 xl:px-16">
        {/* Header */}
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
            Get in<br />
            <span className="font-sans font-light not-italic">Touch</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7 order-1"
          >
            <form onSubmit={handleSubmit} className="space-y-2">
              <div className="grid sm:grid-cols-2 gap-8">
                <div>
                  <label className="font-mono text-[0.65rem] uppercase tracking-[0.15em] block mb-1" style={{ color: 'var(--gray-3)' }}>
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="form-input"
                    placeholder="Your name"
                    required
                  />
                </div>
                <div>
                  <label className="font-mono text-[0.65rem] uppercase tracking-[0.15em] block mb-1" style={{ color: 'var(--gray-3)' }}>
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="form-input"
                    placeholder="your@email.com"
                    required
                  />
                </div>
              </div>
              <div className="pt-6">
                <label className="font-mono text-[0.65rem] uppercase tracking-[0.15em] block mb-1" style={{ color: 'var(--gray-3)' }}>
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="form-input resize-none"
                  placeholder="Tell me about your project..."
                  required
                />
              </div>

              <motion.button
                type="submit"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="mt-8 px-8 py-4 text-sm tracking-wide transition-all duration-300 rounded-full"
                style={{
                  background: 'var(--ink)',
                  color: 'var(--paper)',
                }}
              >
                Send Message →
              </motion.button>
            </form>
          </motion.div>

          {/* Side info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-5 order-2"
          >
            <div className="space-y-10">
              <div>
                <span className="font-mono text-[0.65rem] uppercase tracking-[0.15em] block mb-2" style={{ color: 'var(--gray-3)' }}>
                  Email
                </span>
                <a
                  href="mailto:ivanderdaniel79@gmail.com"
                  className="link-underline text-sm"
                  style={{ color: 'var(--ink)' }}
                >
                  ivanderdaniel79@gmail.com
                </a>
              </div>

              <div>
                <span className="font-mono text-[0.65rem] uppercase tracking-[0.15em] block mb-3" style={{ color: 'var(--gray-3)' }}>
                  Socials
                </span>
                <div className="space-y-3">
                  <a
                    href="https://github.com/Svann70"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between py-3 border-b group"
                    style={{ borderColor: 'var(--gray-5)' }}
                  >
                    <div>
                      <span className="text-sm block" style={{ color: 'var(--ink)' }}>Github</span>
                      <span className="font-mono text-xs" style={{ color: 'var(--gray-4)' }}>@Svann70</span>
                    </div>
                    <span className="text-xs group-hover:translate-x-1 transition-transform" style={{ color: 'var(--gray-3)' }}>→</span>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/ivander-daniel-napitupulu-04a465275/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between py-3 border-b group"
                    style={{ borderColor: 'var(--gray-5)' }}
                  >
                    <div>
                      <span className="text-sm block" style={{ color: 'var(--ink)' }}>LinkedIn</span>
                      <span className="font-mono text-xs" style={{ color: 'var(--gray-4)' }}>Ivander Daniel</span>
                    </div>
                    <span className="text-xs group-hover:translate-x-1 transition-transform" style={{ color: 'var(--gray-3)' }}>→</span>
                  </a>
                </div>
              </div>

              <div>
                <span className="font-mono text-[0.65rem] uppercase tracking-[0.15em] block mb-2" style={{ color: 'var(--gray-3)' }}>
                  Location
                </span>
                <span className="text-sm" style={{ color: 'var(--gray-2)' }}>Indonesia</span>
              </div>

              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="pt-8 border-t"
                style={{ borderColor: 'var(--gray-5)' }}
              >
                <p className="font-serif italic text-lg leading-relaxed" style={{ color: 'var(--gray-2)' }}>
                  "Great design is not just what it looks like. It's how it works."
                </p>
                <span className="font-mono text-xs mt-3 block" style={{ color: 'var(--gray-4)' }}>
                  — Steve Jobs
                </span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
