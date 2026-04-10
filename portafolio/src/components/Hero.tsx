import { ArrowRight, Mail } from 'lucide-react';
import { PiGithubLogoBold } from "react-icons/pi";
import { useLanguage } from '../hooks/useLanguage';
import { motion } from 'motion/react';
import { FiLinkedin } from "react-icons/fi";
import heroImage from '../assets/favicon.webp';


export function Hero() {
  const { t } = useLanguage();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-accent/5 to-transparent" />

      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/20 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-32 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-muted-foreground mb-2">{t('hero.greeting')}</p>
              <h1 className="mb-4" style={{ fontSize: '3.5rem', fontWeight: 800, lineHeight: 1.1 }}>
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  {t('hero.name')}
                </span>
              </h1>
              <h2 className="text-foreground/80 mb-6" style={{ fontSize: '1.5rem', fontWeight: 600 }}>
                {t('hero.title')}
              </h2>
              <p className="text-muted-foreground mb-8 max-w-xl" style={{ fontSize: '1.125rem', lineHeight: 1.7 }}>
                {t('hero.description')}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-wrap gap-4 mb-12"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection('projects')}
                className="px-8 py-4 bg-gradient-to-r from-primary to-accent text-white rounded-xl flex items-center gap-2 shadow-lg shadow-primary/25"
                style={{ fontWeight: 600 }}
              >
                {t('hero.cta.primary')}
                <ArrowRight className="w-5 h-5" />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection('contact')}
                className="px-8 py-4 bg-secondary text-foreground rounded-xl border border-border"
                style={{ fontWeight: 600 }}
              >
                {t('hero.cta.secondary')}
              </motion.button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex gap-4"
            >
              {[
                { icon: PiGithubLogoBold, href: 'https://github.com/Recon0131', label: 'GitHub' },
                { icon: FiLinkedin, href: 'https://www.linkedin.com/in/rai-huerta-024207224/', label: 'LinkedIn' },
                { icon: Mail, href: 'https://mail.google.com/mail/?view=cm&fs=1&to=raihuerta01@gmail.com', label: 'Gmail' },
              ].map((social) => (
                <motion.a
                  key={social.label}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-lg bg-secondary hover:bg-accent hover:text-accent-foreground transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative hidden lg:block"
          >
            <div className="relative w-full h-[500px] rounded-3xl bg-gradient-to-br from-primary/20 to-accent/20 backdrop-blur-xl border border-border overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10" />
              <img src={heroImage} alt="Hero" className="m-auto " />
              
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
