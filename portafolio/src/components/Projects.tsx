import { useLanguage } from '../hooks/useLanguage';
import { motion, AnimatePresence } from 'motion/react';
import { ExternalLink } from 'lucide-react';
import { FaGithub } from "react-icons/fa";


type ProjectCategory = 'all' | 'web' | 'mobile' | 'design';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  category: ProjectCategory;
  tech: string[];
  liveUrl: string;
  codeUrl: string;
}

export function Projects() {
  const { t } = useLanguage();
  

  const projects: Project[] = [
    {
      id: 1,
      title: 'FriendFind',
      description: 'Red Social en forma de practica con publicaciones, comentarios, usuarios y chat en tiempo real.',
      image: 'https://res.cloudinary.com/dpuap0fag/image/upload/v1704478286/Page3_mkagcj.png',
      category: 'web',
      tech: ['React', 'Express.js', 'Graphql', 'MongoDB','TailwindCSS'],
      liveUrl: 'https://frontend-proyect3.onrender.com/login',
      codeUrl: 'https://github.com/Recon0131/proyect3-frontend',
    },
    {
      id: 2,
      title: 'Fake Store',
      description: 'Tienda de muestra con filtros, carrito de compras.',
      image: 'https://res.cloudinary.com/dpuap0fag/image/upload/v1703703168/Page1_odyc21.png',
      category: 'mobile',
      tech: ['Next.js', 'React', 'TailwindCSS'],
      liveUrl: 'https://practicefakestore.vercel.app/',
      codeUrl: 'https://github.com/Recon0131/FakeStoreProyect',
    },
    {
      id: 3,
      title: 'Find your doctor',
      description: 'Web en forma de practica. Uso de base de datos,jwt y cookies.',
      image: 'https://res.cloudinary.com/dpuap0fag/image/upload/v1703715045/Page2_c3yuhg.png',
      category: 'web',
      tech: ['React', 'TailwindCSS', 'MongoDB', 'Express.js', 'JWT'],
      liveUrl: '',
      codeUrl: 'https://github.com/Recon0131/proyect2-fullstack',
    },
    
  ];

 

  return (
    <section id="projects" className="py-32" style={{ scrollMarginTop: '80px' }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="mb-4" style={{ fontSize: '2.5rem', fontWeight: 700 }}>
            {t('projects.title')}
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto" style={{ fontSize: '1.125rem' }}>
            {t('projects.subtitle')}
          </p>
        </motion.div>



        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="group rounded-2xl overflow-hidden bg-card border border-border hover:border-primary/50 transition-all shadow-sm hover:shadow-xl"
              >
                <div className="relative h-56 overflow-hidden bg-muted">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-card/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                    <div className="flex gap-3">
                      <motion.a
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        href={project.liveUrl}
                        className={`p-2 rounded-lg ${project.liveUrl ? 'bg-primary text-white' : 'bg-transparent text-muted-foreground pointer-events-none'}`}
                        aria-label="View project"
                        target="_blank"
                      >
                        <ExternalLink className="w-5 h-5" />
                      </motion.a>
                      <motion.a
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        href={project.codeUrl}
                        className="p-2 rounded-lg bg-accent text-white"
                        aria-label="View code"
                        target="_blank"
                      >
                        <FaGithub className="w-5 h-5" />
                      </motion.a>
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="mb-2" style={{ fontSize: '1.25rem', fontWeight: 600 }}>
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-xs rounded-lg bg-secondary text-foreground"
                        style={{ fontWeight: 500 }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
