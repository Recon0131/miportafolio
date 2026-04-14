import { useLanguage } from '../hooks/useLanguage';
import { motion } from 'motion/react';
import { Smartphone, Globe, Server } from 'lucide-react';

export function Services() {
  const { t } = useLanguage();

  const services = [
    {
      icon: Smartphone,
      titleKey: 'services.mobile.title',
      descriptionKey: 'services.mobile.description',
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      icon: Globe,
      titleKey: 'services.web.title',
      descriptionKey: 'services.web.description',
      gradient: 'from-purple-500 to-pink-500',
    },
    {
      icon: Server,
      titleKey: 'services.backend.title',
      descriptionKey: 'services.backend.description',
      gradient: 'from-orange-500 to-red-500',
    },
  ];

  return (
    <section id="services" className="py-32 bg-secondary/30" style={{ scrollMarginTop: '80px' }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="mb-4" style={{ fontSize: '2.5rem', fontWeight: 700 }}>
            {t('services.title')}
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto" style={{ fontSize: '1.125rem' }}>
            {t('services.subtitle')}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all opacity-0 group-hover:opacity-100" />

              <div className="relative p-8 rounded-3xl bg-background border border-border hover:border-primary/50 transition-all h-full">
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-6 shadow-lg`}
                >
                  <service.icon className="w-8 h-8 text-white" />
                </motion.div>

                <h3 className="mb-4" style={{ fontSize: '1.5rem', fontWeight: 600 }}>
                  {t(service.titleKey)}
                </h3>

                <p className="text-muted-foreground leading-relaxed">
                  {t(service.descriptionKey)}
                </p>

                <motion.div
                  className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-accent rounded-b-3xl"
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
