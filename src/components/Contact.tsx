import { motion } from 'framer-motion';
import { Send, Mail, MapPin, Github, Linkedin } from 'lucide-react';
import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = `Contact from ${formData.name}`;
    const body = `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`;

    // Create mailto link
    const mailtoLink = `mailto:ivanderdaniel79@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    // Open email client
    window.location.href = mailtoLink;

    // Optional: clear form or show success message
    console.log('Opening email client with:', formData);
  };

  const socialLinks = [
    { icon: Github, href: 'https://github.com/Svann70', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/ivander-daniel-napitupulu-04a465275/', label: 'LinkedIn' },
  ];

  return (
    <section id="contact" className="py-16 sm:py-24 lg:py-32 relative overflow-hidden">
      {/* Background accent */}
      {/* Background accent */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/2 right-0 w-[300px] sm:w-[600px] h-[300px] sm:h-[600px] rounded-full bg-primary/5 blur-[100px] sm:blur-[150px] -translate-y-1/2" />

        {/* Python Icon - Bottom Left */}
        <svg
          viewBox="0 0 128 128"
          className="absolute bottom-10 left-10 w-24 h-24 sm:w-32 sm:h-32 text-foreground opacity-[0.03] rotate-12"
          fill="currentColor"
        >
          <path d="M63.6 15.6C44.3 15.6 37 24.3 37 36.3V44h26.5v3.4H24.8C12 47.4 5.7 54.3 5.7 66.8v16.7c0 12.3 5.7 18 19 18h9.8v-3.7c0-12 5.5-17.7 17.7-17.7h18.2c6.4 0 9.2-2.7 9.2-9.2V50.6c0-6.4-2.8-9.2-9.2-9.2h-18v-3c0-6 2.8-8.8 8.8-8.8h19.8c6 0 8.8 2.8 8.8 8.8v2.8h15V36.3c0-11.8-6.1-20.7-27.1-20.7zM45.5 28.1c2.4 0 4.3 2 4.3 4.3s-2 4.3-4.3 4.3c-2.4 0-4.3-2-4.3-4.3s2-4.3 4.3-4.3zm20.8 35.8H48.1c-6.4 0-9.2 2.7-9.2 9.2V93c0 6.4 2.8 9.2 9.2 9.2h18v3c0 6-2.8 8.8-8.8 8.8H37.5c-6 0-8.8-2.8-8.8-8.8v-2.8H13.7v4c0 11.8 6.1 20.7 27.2 20.7 19.3 0 26.5-8.8 26.5-20.7V99.7H40.8v-3.4h38.7c12.7 0 19-6.9 19-19.5V60.2c0-12.3-5.7-18-19-18H66.3v3.7c0 12-5.5 17.8-17.8 17.8h-.1zM84.4 91.3c2.4 0 4.3 2 4.3 4.3s-2 4.3-4.3 4.3c-2.4 0-4.3-2-4.3-4.3s1.9-4.3 4.3-4.3z" />
        </svg>

        {/* Person with Laptop - Top Left */}
        <svg
          viewBox="0 0 24 24"
          className="absolute top-20 left-10 sm:left-20 w-32 h-32 sm:w-48 sm:h-48 text-foreground opacity-[0.03] -rotate-12"
          fill="currentColor"
        >
          <path d="M20 18v-1c0-2.21-3.58-4-8-4s-8 1.79-8 4v1h16zm-8-6c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm9 8l1 2H2l1-2h18z" />
        </svg>

        {/* JavaScript Icon - Bottom Right */}
        <svg
          viewBox="0 0 128 128"
          className="absolute bottom-20 right-10 sm:right-20 w-24 h-24 sm:w-32 sm:h-32 text-foreground opacity-[0.03] rotate-6"
          fill="currentColor"
        >
          <path d="M14.5 9h99v99h-99V9zm87.3 75.2c1.7-10.2-3.7-13.4-6.8-14.7-5-2.2-9 1-10.5 2.6-1 1-3.2-.8-2.6-2.9 1.7-5.5 9-8.4 15.6-5.8 5.6 2.2 9.5 7.8 8.1 16.5-.9 5.8-3.7 28.5-3.7 28.5s-.8 5.2-6.9 5.2c-5.5 0-9.2-2.3-11.4-6.9-1.2-2.5 1.5-4.3 2.9-2.9 2 2 4 1.9 4.3.4.5-2.3 3.6-17.7 3.6-17.7s.9-5.1 7.4-2.3zm-39.4 4c0-2-1.3-3.6-3.3-3.9-3.4-.6-6.1-2.9-6.1-6.9 0-4.9 3.9-8.5 9-8.5 4.3 0 7.4 2.5 8.7 6.4.5 1.6-1.9 2.9-2.7 1.4-1.1-2.2-2.7-3.7-5.5-3.7-2.6 0-4.4 1.8-4.4 4.3 0 1.9 1.4 3.3 4.2 3.9 4.5 1 7.9 3.2 7.9 8.2 0 5.3-4.1 9-9.6 9-5.1 0-8.7-2.9-10.2-7.1-.6-1.7 1.8-3.1 2.8-1.5 1.2 1.9 3.2 4.4 6.8 4.4 2.9 0 4.8-1.7 4.8-4.5z" />
        </svg>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-12 relative">
        <div className="grid lg:grid-cols-2 gap-10 sm:gap-12 lg:gap-20">
          {/* Left - Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6 sm:space-y-8"
          >
            <div>
              <span className="text-sm font-medium text-primary mb-3 sm:mb-4 block">Contact</span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-semibold text-foreground mb-4 sm:mb-6">
                Let's work
                <br />
                together.
              </h2>
              <p className="text-muted-foreground text-base sm:text-lg max-w-md">
                Have a project in mind or want to discuss potential opportunities? I'd love to hear from you.
              </p>
            </div>

            <div className="space-y-3 sm:space-y-4">
              <motion.a
                href="mailto:ivanderdaniel79@gmail.com"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.2 }}
                className="flex items-center gap-3 sm:gap-4 text-muted-foreground hover:text-foreground transition-colors group"
              >
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-muted flex items-center justify-center group-hover:bg-primary/10 transition-colors flex-shrink-0">
                  <Mail className="group-hover:text-primary transition-colors w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <span className="text-sm sm:text-base">svann70@gmail.com</span>
              </motion.a>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.3 }}
                className="flex items-center gap-3 sm:gap-4 text-muted-foreground"
              >
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-muted flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <span className="text-sm sm:text-base">Indonesia</span>
              </motion.div>
            </div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.4 }}
              className="flex gap-2 sm:gap-3 pt-2 sm:pt-4"
            >
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  aria-label={link.label}
                  className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-muted flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-primary/10 transition-all touch-manipulation"
                >
                  <link.icon className="w-4 h-4 sm:w-5 sm:h-5" />
                </a>
              ))}
            </motion.div>
          </motion.div>

          {/* Right - Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <form onSubmit={handleSubmit} className="glass-card p-4 sm:p-6 md:p-8 space-y-4 sm:space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="form-input"
                  placeholder="Your name"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="form-input"
                  placeholder="your@email.com"
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="form-input resize-none"
                  placeholder="Tell me about your project..."
                  required
                />
              </div>

              <button type="submit" className="btn-primary w-full justify-center">
                Send Message
                <Send size={18} />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;