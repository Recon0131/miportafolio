import { useState } from "react";
import { useLanguage } from "../hooks/useLanguage";
import { motion } from "motion/react";
import { Send, Mail, MapPin, Phone } from "lucide-react";
import { FiGithub, FiLinkedin } from "react-icons/fi";
import emailjs from "@emailjs/browser";

export function Contact() {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [notification, setNotification] = useState<string | null>(null);
  emailjs.init("iQAi7OxNlfYArr73r");
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await emailjs.send("service_9wwmk6t", "template_5igfqne", {
        name: formData.name,
        email: formData.email,
        message: formData.message,
      });
      setNotification("Correo enviado exitosamente!");
      setFormData({ name: "", email: "", message: "" });
      setTimeout(() => setNotification(null), 5000); 
    } catch (err) {
      console.error("Error:", err);
      setNotification("Error al enviar el correo. Inténtalo de nuevo.");
      setTimeout(() => setNotification(null), 5000);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: t("contact.email"),
      href: "https://mail.google.com/mail/?view=cm&fs=1&to=raihuerta01@gmail.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+51 991360679",
      href: "tel:+51991360679",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Independencia, Lima",
      href: "https://www.google.com/maps/place/Av+Coricancha,+Independencia+15331/@-11.981206,-77.0428443,277m/data=!3m1!1e3!4m6!3m5!1s0x9105cfb0909e7cf7:0x1b690e473fe39305!8m2!3d-11.9812821!4d-77.0426887!16s%2Fg%2F1tv25699?entry=ttu&g_ep=EgoyMDI2MDQwOC4wIKXMDSoASAFQAw%3D%3D",
    },
  ];

  const socials = [
    { icon: FiGithub, href: "https://github.com/Recon0131", label: "GitHub" },
    {
      icon: FiLinkedin,
      href: "https://www.linkedin.com/in/rai-huerta-024207224/",
      label: "LinkedIn",
    },
  ];

  return (
    <section id="contact" className="py-32 relative overflow-hidden" style={{ scrollMarginTop: '80px' }}>
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="mb-4" style={{ fontSize: "2.5rem", fontWeight: 700 }}>
            {t("contact.title")}
          </h2>
          <p
            className="text-muted-foreground max-w-2xl mx-auto"
            style={{ fontSize: "1.125rem" }}
          >
            {t("contact.subtitle")}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              {notification && (
                <div className={`p-4 rounded-xl border ${
                  notification.includes("Error") 
                    ? "bg-red-100 border-red-300 text-red-800" 
                    : "bg-green-100 border-green-300 text-green-800"
                }`}>
                  {notification}
                </div>
              )}
              <div>
                <label htmlFor="name" className="block mb-2 text-foreground">
                  {t("contact.form.name")}
                </label>
                <input
                  id="name"
                  type="text"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="w-full px-4 py-3 rounded-xl bg-input-background border border-border focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block mb-2 text-foreground">
                  {t("contact.form.email")}
                </label>
                <input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="w-full px-4 py-3 rounded-xl bg-input-background border border-border focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="block mb-2 text-foreground">
                  {t("contact.form.message")}
                </label>
                <textarea
                  id="message"
                  rows={6}
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  className="w-full px-4 py-3 rounded-xl bg-input-background border border-border focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all resize-none"
                  required
                />
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full px-8 py-4 bg-gradient-to-r cursor-pointer from-primary to-accent text-white rounded-xl flex items-center justify-center gap-2 shadow-lg shadow-primary/25"
                style={{ fontWeight: 600 }}
              >
                {t("contact.form.submit")}
                <Send className="w-5 h-5" />
              </motion.button>
            </form>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <motion.a
                  key={index}
                  href={info.href}
                  target="_blank"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ x: 5 }}
                  className="flex items-start gap-4 p-6 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all group"
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <info.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">
                      {info.label}
                    </p>
                    <p className="text-foreground" style={{ fontWeight: 500 }}>
                      {info.value}
                    </p>
                  </div>
                </motion.a>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="p-8 rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 border border-border"
            >
              <h3
                className="mb-4"
                style={{ fontSize: "1.25rem", fontWeight: 600 }}
              >
                Follow Me
              </h3>
              <div className="flex gap-4">
                {socials.map((social) => (
                  <motion.a
                    key={social.label}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.9 }}
                    href={social.href}
                    target="_blank"
                    className="w-12 h-12 rounded-xl bg-background border border-border hover:border-primary hover:bg-primary hover:text-white transition-all flex items-center justify-center"
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
