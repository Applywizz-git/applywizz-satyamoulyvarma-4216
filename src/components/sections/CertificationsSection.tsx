import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Award, CheckCircle, GraduationCap } from "lucide-react";
import { FaAws, FaChartBar, FaLinkedin, FaDatabase, FaUsers } from "react-icons/fa";

const certifications = [
  {
    name: "Google Data Analytics Professional Certificate",
    issuer: "Coursera",
    icon: FaChartBar,
    color: "hsl(210, 100%, 50%)",
    description: "Data preparation, analysis, and visualization with SQL and Tableau",
  },
  {
    name: "IBM Business Analyst Professional Certificate",
    issuer: "Coursera",
    icon: Award,
    color: "hsl(210, 80%, 45%)",
    description: "Business analysis, requirements elicitation, and process modeling",
  },
  {
    name: "Microsoft Power BI Data Analyst (PL-300)",
    issuer: "LinkedIn Learning",
    icon: FaChartBar,
    color: "hsl(48, 100%, 50%)",
    description: "Data modeling, visualization, and DAX in Power BI",
  },
  {
    name: "Tableau Data Analyst Skill Path",
    issuer: "DataCamp",
    icon: FaChartBar,
    color: "hsl(25, 100%, 50%)",
    description: "Advanced Tableau dashboards and data storytelling",
  },
  {
    name: "SQL for Data Analysis Specialization",
    issuer: "Coursera",
    icon: FaDatabase,
    color: "hsl(210, 100%, 50%)",
    description: "Complex SQL queries, window functions, and data optimization",
  },
  {
    name: "Agile Business Analysis (Agile BA)",
    issuer: "LinkedIn Learning",
    icon: FaLinkedin,
    color: "hsl(210, 80%, 45%)",
    description: "Agile methodologies, user stories, and Scrum framework",
  },
];

export default function CertificationsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <>
      {/* -------------------- CERTIFICATIONS SECTION -------------------- */}
      <section
        id="certifications"
        className="py-20 relative overflow-hidden"
        ref={ref}
      >
        {/* Animated Background */}
        <div className="absolute inset-0">
          <motion.div
            className="absolute top-1/2 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-primary/20 to-transparent"
            animate={{ scaleX: [0, 1, 0], x: ["-100%", "0%", "100%"] }}
            transition={{ duration: 8, repeat: Infinity }}
          />

          {/* Floating icons */}
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute text-primary/10"
              style={{
                left: `${15 + i * 15}%`,
                top: `${10 + (i % 3) * 30}%`,
              }}
              animate={{
                y: [0, -20, 0],
                rotate: [0, 10, -10, 0],
                opacity: [0.1, 0.3, 0.1],
              }}
              transition={{
                duration: 5 + i,
                repeat: Infinity,
                delay: i * 0.5,
              }}
            >
              <Award size={40 + i * 5} />
            </motion.div>
          ))}
        </div>

        <div className="container mx-auto px-6 relative z-10">
          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
              <span className="text-gradient">Certifications</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Continuous learning and professional skill validation
            </p>
          </motion.div>

          {/* Cards */}
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {certifications.map((cert, index) => (
                <motion.div
                  key={cert.name}
                  initial={{ opacity: 0, y: 50, rotateY: -10 }}
                  animate={isInView ? { opacity: 1, y: 0, rotateY: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="perspective-1000"
                >
                  <motion.div
                    className="glass rounded-2xl p-6 h-full relative overflow-hidden group cursor-pointer"
                    whileHover={{
                      scale: 1.05,
                      rotateY: 5,
                      rotateX: 5,
                      boxShadow: `0 20px 40px ${cert.color}20`,
                    }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    {/* Hover gradient */}
                    <motion.div
                      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                      style={{
                        background: `linear-gradient(135deg, ${cert.color}10, transparent)`,
                      }}
                    />

                    {/* Icon */}
                    <motion.div
                      className="w-14 h-14 rounded-xl flex items-center justify-center mb-4 relative z-10"
                      style={{ backgroundColor: `${cert.color}20` }}
                      whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
                    >
                      <cert.icon className="w-7 h-7" style={{ color: cert.color }} />
                    </motion.div>

                    {/* Info */}
                    <div className="relative z-10 space-y-2">
                      <motion.h4
                        className="font-semibold text-lg leading-tight group-hover:text-primary transition-colors"
                        whileHover={{ x: 5 }}
                      >
                        {cert.name}
                      </motion.h4>

                      <p className="text-sm text-muted-foreground">
                        {cert.issuer}
                      </p>

                      <p className="text-xs text-muted-foreground/70 pt-2">
                        {cert.description}
                      </p>
                    </div>

                    {/* Verified Badge */}
                    <motion.div
                      className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity"
                      initial={{ scale: 0 }}
                      whileHover={{ scale: 1.2 }}
                    >
                      <CheckCircle className="w-5 h-5 text-green-500" />
                    </motion.div>

                    {/* Decorative corner */}
                    <motion.div
                      className="absolute -bottom-2 -right-2 w-20 h-20 rounded-full opacity-20"
                      style={{ backgroundColor: cert.color }}
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 3, repeat: Infinity, delay: index * 0.2 }}
                    />
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* -------------------- DIVIDER LINE AFTER CERTIFICATIONS -------------------- */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-border to-transparent my-16"></div>
    </>
  );
}
