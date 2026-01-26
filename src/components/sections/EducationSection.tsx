import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, Calendar, MapPin, BookOpen } from "lucide-react";

const educationItems = [
  {
    degree: "Master of Science in Business Analytics",
    school: "University of New Haven",
    period: "Aug 2022 - Dec 2023",
    location: "Connecticut, USA",
    courses: [
      "Data Mining",
      "Statistical Analysis",
      "Predictive Modeling",
      "Business Intelligence",
    ],
  },
  {
    degree: "Bachelor of Technology in Electronics & Communication Engineering",
    school: "Andhra University",
    period: "Jul 2017 - Jul 2021",
    location: "Andhra Pradesh, India",
    courses: [
      "Digital Signal Processing",
      "Microprocessors",
      "Embedded Systems",
      "Communication Systems",
    ],
  },
];

export default function EducationSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <>
      {/* -------------------- EDUCATION SECTION -------------------- */}
      <section id="education" className="py-20 relative overflow-hidden" ref={ref}>
        {/* Animated Background */}
        <div className="absolute inset-0">
          <motion.div
            className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px]"
            animate={{ scale: [1, 1.3, 1], rotate: [0, 90, 0] }}
            transition={{ duration: 20, repeat: Infinity }}
          />

          <motion.div
            className="absolute bottom-1/3 right-1/4 w-[400px] h-[400px] bg-secondary/5 rounded-full blur-[80px]"
            animate={{ scale: [1.2, 1, 1.2], rotate: [0, -90, 0] }}
            transition={{ duration: 15, repeat: Infinity }}
          />

          {/* Floating geometric shapes */}
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-4 h-4 border border-primary/20 rounded"
              style={{
                left: `${10 + i * 12}%`,
                top: `${20 + (i % 3) * 25}%`,
              }}
              animate={{
                y: [0, -30, 0],
                rotate: [0, 180, 360],
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{
                duration: 4 + i * 0.5,
                repeat: Infinity,
                delay: i * 0.3,
              }}
            />
          ))}
        </div>

        {/* Main Content */}
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
              <span className="text-gradient">Education</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Building a strong foundation through continuous learning
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto space-y-8">
            {educationItems.map((edu, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 50, rotateX: -10 }}
                animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.2 + idx * 0.1 }}
                className="perspective-1000"
              >
                <motion.div
                  className="glass rounded-3xl p-8 md:p-12 relative overflow-hidden group"
                  whileHover={{
                    scale: 1.02,
                    rotateX: 2,
                    rotateY: -2,
                    boxShadow: "0 25px 50px rgb(0 0 0 / 0.25)",
                  }}
                  transition={{ type: "spring", stiffness: 200 }}
                >
                  {/* Subtle border glow */}
                  <motion.div
                    className="absolute inset-0 rounded-3xl pointer-events-none"
                    animate={{ opacity: [0.2, 0.4, 0.2] }}
                    transition={{ duration: 5, repeat: Infinity }}
                    style={{
                      border: "1px solid rgba(255,255,255,0.08)",
                      boxShadow: "0 0 30px rgba(255,255,255,0.05) inset",
                    }}
                  />

                  <div className="relative z-10 flex flex-col md:flex-row items-start gap-8">
                    {/* Icon */}
                    <motion.div
                      className="w-20 h-20 rounded-2xl bg-gradient-primary flex items-center justify-center shrink-0"
                      whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
                      transition={{ duration: 0.5 }}
                    >
                      <GraduationCap className="w-10 h-10 text-primary-foreground" />
                    </motion.div>

                    {/* Text Content */}
                    <div className="flex-grow space-y-4">
                      <motion.h3
                        className="text-2xl md:text-3xl font-heading font-bold"
                        whileHover={{ x: 10 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        {edu.degree}
                      </motion.h3>

                      <motion.p
                        className="text-xl text-primary font-semibold"
                        whileHover={{ scale: 1.02 }}
                      >
                        {edu.school}
                      </motion.p>

                      <div className="flex flex-wrap gap-6 text-muted-foreground">
                        <motion.div
                          className="flex items-center gap-2"
                          whileHover={{ x: 5, color: "hsl(var(--primary))" }}
                        >
                          <Calendar className="w-4 h-4" />
                          <span>{edu.period}</span>
                        </motion.div>

                        <motion.div
                          className="flex items-center gap-2"
                          whileHover={{ x: 5, color: "hsl(var(--primary))" }}
                        >
                          <MapPin className="w-4 h-4" />
                          <span>{edu.location}</span>
                        </motion.div>
                      </div>

                      {/* Coursework */}
                      <div className="pt-4">
                        <div className="flex items-center gap-2 text-muted-foreground mb-3">
                          <BookOpen className="w-4 h-4" />
                          <span className="text-sm font-medium">Relevant Coursework</span>
                        </div>

                        <div className="flex flex-wrap gap-2">
                          {edu.courses.map((course, index) => (
                            <motion.span
                              key={course}
                              className="px-3 py-1 rounded-full text-sm bg-muted/50 text-muted-foreground"
                              initial={{ opacity: 0, scale: 0.8 }}
                              animate={isInView ? { opacity: 1, scale: 1 } : {}}
                              transition={{ delay: 0.5 + index * 0.1 }}
                              whileHover={{
                                scale: 1.1,
                                backgroundColor: "hsl(var(--primary) / 0.2)",
                                color: "hsl(var(--primary))",
                                borderColor: "hsl(var(--primary) / 0.5)",
                                borderStyle: "solid",
                                borderWidth: "1px"
                              }}
                            >
                              {course}
                            </motion.span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Decorative Rings */}
                  <motion.div
                    className="absolute top-4 right-4 w-24 h-24 border border-primary/10 rounded-full"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                  />
                  <motion.div
                    className="absolute bottom-4 right-12 w-16 h-16 border border-secondary/10 rounded-full"
                    animate={{ rotate: -360 }}
                    transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                  />
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* -------------------- DIVIDER LINE -------------------- */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-border to-transparent my-16"></div>
    </>
  );
}
