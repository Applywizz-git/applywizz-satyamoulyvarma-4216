import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Zap, Heart, Plane } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Healthcare Data Quality & HEDIS Analytics Platform",
    subtitle: "Clinical Data Interoperability & Quality Metrics",
    description:
      "Engineered an end-to-end clinical data platform that maps Epic and Athena fields to FHIR resources, ensuring high-quality HEDIS reporting and population health insights.",
    features: [
      "Mapped Epic/Athena fields to FHIR resources for clinical interoperability",
      "Automated HEDIS monitoring with Power BI dashboards and DAX",
      "Implemented source-to-target validation rules with SQL and Python",
      "Elicited requirements from Quality, Population Health, and Informatics teams",
      "Raised HEDIS data completeness and measure readiness by 35%",
    ],
    technologies: ["SQL Server", "Power BI", "Python", "FHIR/HL7", "Epic/Athena", "Jira", "DAX"],
    icon: Heart,
    image: "/healthcare-project.png",
    gradient: "from-cyan-500 to-blue-600",
    metrics: [
      { label: "Data Quality", value: "+35%" },
      { label: "Manual Work", value: "-40%" },
      { label: "Members", value: "100K+" },
    ],
  },
  {
    id: 2,
    title: "Enterprise Payments Operations Insights Hub",
    subtitle: "Payment Reconciliation & Exception Handling",
    description:
      "Developed a centralized operational visibility hub for payment reconciliation, standardizing exception handling across Operations, Risk, and Finance teams.",
    features: [
      "Gathered cross-functional reporting requirements for payment workflows",
      "Designed ETL mapping and SQL/SOQL transforms for transaction feeds",
      "Developed Tableau KPI dashboards with drill-throughs and SLA views",
      "Standardized exception detection across 10+ banking functions",
      "Reduced investigation time by 25% through proactive alerting",
    ],
    technologies: ["Tableau", "SQL", "Salesforce (SOQL)", "Visio", "ETL Mapping", "Agile"],
    icon: Zap,
    image: "/banking-project.png",
    gradient: "from-purple-500 to-pink-600",
    metrics: [
      { label: "Detection Acc", value: "+30%" },
      { label: "Investigation", value: "-25%" },
      { label: "Functions", value: "10+" },
    ],
  },
];

export default function ProjectsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [flippedCard, setFlippedCard] = useState<number | null>(null);

  return (
    <>
      {/* ---------------- PROJECTS SECTION ---------------- */}
      <section id="projects" className="py-20 relative overflow-hidden" ref={ref}>
        {/* Top gradient line */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-secondary/50 to-transparent" />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
              Featured <span className="text-gradient">Projects</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              End-to-end solutions demonstrating technical expertise across healthcare, banking, and airline industries
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                className="perspective-1000"
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.2 }}
              >
                <motion.div
                  className={`relative h-[550px] transform-style-3d transition-transform duration-700 cursor-pointer ${flippedCard === project.id ? "rotate-y-180" : ""
                    }`}
                  onClick={() =>
                    setFlippedCard(flippedCard === project.id ? null : project.id)
                  }
                >
                  {/* ---- FRONT ---- */}
                  <div className="absolute inset-0 backface-hidden">
                    <div className="glass rounded-3xl p-6 h-full flex flex-col hover:shadow-glow transition-all duration-500 overflow-hidden group">
                      {/* Image Area */}
                      <div className="relative w-full h-48 mb-6 rounded-2xl overflow-hidden">
                        <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-20 group-hover:opacity-10 transition-opacity`} />
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                          onError={(e) => {
                            // Fallback if image fails
                            e.currentTarget.style.display = 'none';
                            e.currentTarget.parentElement?.classList.add('bg-gradient-to-br', ...project.gradient.split(' '));
                          }}
                        />
                        {/* Icon overlay */}
                        <div className="absolute top-2 right-2 w-10 h-10 rounded-xl bg-black/40 backdrop-blur-md flex items-center justify-center border border-white/10">
                          <project.icon className="w-5 h-5 text-white" />
                        </div>
                      </div>

                      <h3 className="text-xl font-heading font-bold mb-2 leading-tight">
                        {project.title}
                      </h3>
                      <p className="text-primary text-sm font-medium mb-4">
                        {project.subtitle}
                      </p>

                      <p className="text-muted-foreground text-sm mb-6 flex-grow line-clamp-3">
                        {project.description}
                      </p>

                      {/* Tech Stack */}
                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.technologies.slice(0, 3).map((tech) => (
                          <span
                            key={tech}
                            className="px-2 py-1 rounded-full text-[10px] bg-muted text-muted-foreground"
                          >
                            {tech}
                          </span>
                        ))}
                        {project.technologies.length > 3 && (
                          <span className="px-2 py-1 rounded-full text-[10px] bg-primary/20 text-primary">
                            +{project.technologies.length - 3}
                          </span>
                        )}
                      </div>

                      {/* Metrics */}
                      <div className="grid grid-cols-3 gap-2 pt-4 border-t border-border">
                        {project.metrics.map((metric) => (
                          <div key={metric.label} className="text-center">
                            <div
                              className={`text-lg font-bold bg-gradient-to-r ${project.gradient} bg-clip-text text-transparent`}
                            >
                              {metric.value}
                            </div>
                            <div className="text-[10px] text-muted-foreground truncate">
                              {metric.label}
                            </div>
                          </div>
                        ))}
                      </div>

                      <div className="mt-4 text-center">
                        <span className="text-xs text-muted-foreground group-hover:text-primary transition-colors flex items-center justify-center gap-1">
                          View Details <Zap className="w-3 h-3" />
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* ---- BACK ---- */}
                  <div className="absolute inset-0 backface-hidden rotate-y-180">
                    <div className="glass rounded-3xl p-8 h-full flex flex-col hover:shadow-glow transition-all">
                      <h4 className="text-xl font-heading font-bold mb-4">
                        Key Features
                      </h4>

                      <div className="space-y-3 flex-grow">
                        {project.features.map((feature, i) => (
                          <motion.div
                            key={i}
                            className="flex items-start gap-3"
                            initial={{ opacity: 0, x: -20 }}
                            animate={
                              flippedCard === project.id
                                ? { opacity: 1, x: 0 }
                                : {}
                            }
                            transition={{ delay: i * 0.1 }}
                          >
                            <div
                              className={`w-6 h-6 rounded-full bg-gradient-to-br ${project.gradient} flex items-center justify-center shrink-0 mt-0.5`}
                            >
                              <Zap className="w-3 h-3 text-white" />
                            </div>
                            <p className="text-muted-foreground text-sm">
                              {feature}
                            </p>
                          </motion.div>
                        ))}
                      </div>

                      <div className="mt-6 pt-6 border-t border-border">
                        <p className="text-sm font-medium mb-3">
                          Full Tech Stack
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.map((tech) => (
                            <span
                              key={tech}
                              className="px-3 py-1 rounded-full text-xs bg-muted text-muted-foreground"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      <p className="text-xs text-muted-foreground text-center mt-4">
                        ← Click to flip back
                      </p>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ----------- DIVIDER LINE AFTER PROJECTS ----------- */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-border to-transparent my-16"></div>
    </>
  );
}
