import { motion } from "framer-motion";
import { ArrowDown, FileText, Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function HeroSection() {
  const scrollToContact = () => {
    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToAbout = () => {
    document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden pt-24 md:pt-32">
      {/* Animated Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-dark" />

        <motion.div
          className="absolute top-1/4 left-1/4 w-[600px] h-[600px] rounded-full bg-primary/10 blur-[120px]"
          animate={{ scale: [1, 1.2, 1], x: [0, 50, 0], y: [0, -30, 0] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        />

        <motion.div
          className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] rounded-full bg-secondary/10 blur-[100px]"
          animate={{ scale: [1.2, 1, 1.2], x: [0, -40, 0], y: [0, 40, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Floating particles */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-primary/40 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{ y: [0, -100, 0], opacity: [0, 1, 0] }}
            transition={{
              duration: 3 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/30 to-background pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-heading font-bold leading-tight">
                <motion.span
                  className="text-foreground block"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  Hi, I'm
                </motion.span>
                <motion.span
                  className="text-gradient block"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  Naga Venkata
                </motion.span>

              </h1>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="space-y-4"
            >
              <motion.h2
                className="text-2xl md:text-3xl font-heading font-semibold text-gray-500"
                whileHover={{ x: 10, color: "hsl(var(--primary))" }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                Business Analyst
              </motion.h2>

              <p className="text-lg text-gray-500 max-w-xl leading-relaxed">
                4+ years of experience in healthcare, banking, fintech, and enterprise operations.
                Skilled in <span className="text-primary font-semibold">SQL, Power BI, Tableau</span>, and Agile delivery.
              </p>

              <motion.div
                className="flex items-center gap-2 text-gray-500"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
              >
                <MapPin className="w-4 h-4 text-primary" />
                <span>Louisville, KY (Open to Relocate)</span>
              </motion.div>
            </motion.div>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-wrap gap-4"
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button variant="hero" size="xl" onClick={scrollToContact}>
                  <Mail className="w-5 h-5" />
                  Get in Touch
                </Button>
              </motion.div>

              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button variant="glass" size="lg" asChild>
                  <a href="/AWL-4216-12122025-0406-resume_naga-venkata_ba.pdf" target="_blank" rel="noopener noreferrer">
                    <FileText className="w-5 h-5" />
                    Resume
                  </a>
                </Button>
              </motion.div>
            </motion.div>

            {/* Tech Pills */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-wrap gap-2 pt-4"
            >
              {["SQL", "Power BI", "Tableau", "Agile", "Excel", "Data Modeling"].map((tech, index) => (
                <motion.span
                  key={tech}
                  className="px-3 py-1 rounded-full text-sm bg-muted text-muted-foreground"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.8 + index * 0.1 }}
                  whileHover={{
                    scale: 1.1,
                    backgroundColor: "hsl(var(--primary) / 0.2)",
                    color: "hsl(var(--primary))",
                  }}
                >
                  {tech}
                </motion.span>
              ))}
            </motion.div>
          </div>

          {/* Right Column */}
          <motion.div
            className="flex flex-col items-center gap-8"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <motion.div className="relative" whileHover={{ scale: 1.02 }} transition={{ stiffness: 300 }}>
              {/* Rings */}
              <motion.div
                className="absolute -inset-4 rounded-full border-2 border-primary/30"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              />

              <motion.div
                className="absolute -inset-8 rounded-full border border-secondary/20"
                animate={{ rotate: -360 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              />

              <motion.div
                className="absolute -inset-12 rounded-full border border-primary/10"
                animate={{ rotate: 360 }}
                transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
              />

              {/* Glow */}
              <div className="absolute inset-0 rounded-full bg-gradient-primary blur-2xl opacity-30 animate-pulse-glow" />

              {/* Image */}
              <motion.div
                className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-primary/50 shadow-glow"
                animate={{
                  boxShadow: [
                    "0 0 40px hsl(186 100% 50% / 0.3)",
                    "0 0 60px hsl(186 100% 50% / 0.5)",
                    "0 0 40px hsl(186 100% 50% / 0.3)",
                  ],
                }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                <div className="w-full h-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                  <img
                    src="/image.png"
                    alt="Naga Venkata"
                    className="object-cover w-full h-full rounded-full"
                  />
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.button
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        whileHover={{ scale: 1.1 }}
      >
        <span className="text-sm">Scroll to explore</span>
        <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
          <ArrowDown className="w-5 h-5" />
        </motion.div>
      </motion.button>
    </section>
  );
}
