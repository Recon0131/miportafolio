import { useLanguage } from '../hooks/useLanguage';
import { motion } from 'motion/react';
import { GraduationCap , BriefcaseBusiness } from 'lucide-react';
import AboutVideo from '../assets/loop.mp4';

export function About() {
  const { t } = useLanguage();

  const skills = [
    { name: 'React & Next.js', level: 90 },
    { name: 'TypeScript', level: 90 },
    { name: 'Node.js & Express', level: 90 },
    { name: 'MySQL & MongoDB', level: 90 },
    { name: 'C# & .NET Framework', level: 50 },
    { name: 'Python', level: 50 },

  ];

  const experiences = [
    {
      year: '2026 - Present',
      title: 'Practicante Desarrollador Web',
      company: 'Consigue Ventas',
      icon: BriefcaseBusiness,
    },
    {
      year: '2022 - En curso',
      title: 'Ingenieering System Student',
      company: 'Universidad Peruana de Ciencias Aplicadas',
      icon: GraduationCap,
    },
    {
      year: '2020',
      title: 'Autonomic Learning',
      company: 'Udemy, Youtube, Documentation',
      icon: GraduationCap,
    }
    
  ];

  return (
    <section id="about" className="py-32 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="mb-4" style={{ fontSize: '2.5rem', fontWeight: 700 }}>
            {t('about.title')}
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto" style={{ fontSize: '1.125rem' }}>
            {t('about.subtitle')}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="w-full h-96 rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 border border-border overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-64 h-64 rounded-full bg-gradient-to-br from-primary to-accent opacity-20 blur-3xl" />
              </div>
              <div className="relative h-full flex items-center justify-center">
                
                
                <video autoPlay muted loop>
                  <source src={AboutVideo}/>
                </video>

              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <p className="text-foreground/80 mb-8" style={{ fontSize: '1.125rem', lineHeight: 1.8 }}>
              {t('about.description')}
            </p>

            <div className="space-y-6">
              <div>
                <h3 className="mb-4" style={{ fontSize: '1.25rem', fontWeight: 600 }}>
                  {t('about.skills.title')}
                </h3>
                <div className="space-y-4">
                  {skills.map((skill, index) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <div className="flex justify-between mb-2">
                        <span className="text-foreground">{skill.name}</span>
                        <span className="text-muted-foreground">{skill.level}%</span>
                      </div>
                      <div className="h-2 bg-muted rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          transition={{ duration: 1, delay: index * 0.1 }}
                          viewport={{ once: true }}
                          className="h-full bg-gradient-to-r from-primary to-accent rounded-full"
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="mb-12 text-center" style={{ fontSize: '1.875rem', fontWeight: 600 }}>
            {t('about.experience.title')}
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="p-6 rounded-2xl bg-background border border-border hover:border-primary/50 transition-all"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-4">
                  <exp.icon className="w-6 h-6 text-white" />
                </div>
                <p className="text-sm text-muted-foreground mb-2">{exp.year}</p>
                <h4 className="mb-1" style={{ fontWeight: 600 }}>{exp.title}</h4>
                <p className="text-sm text-muted-foreground">{exp.company}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
