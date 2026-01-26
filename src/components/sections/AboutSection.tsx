import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Code2, Server, Cloud, Users } from 'lucide-react';

const highlights = [
  {
    icon: Server,
    title: 'Data Analytics',
    description: 'Transforming complex datasets into actionable insights using SQL, Power BI, and Tableau.',
  },
  {
    icon: Cloud,
    title: 'Process Modeling',
    description: 'Mapping AS-IS/TO-BE workflows and improving system interoperability using FHIR/HL7 standards.',
  },
  {
    icon: Code2,
    title: 'Business Analysis',
    description: 'Documenting BRDs, FRDs, and user stories to align business needs with technical delivery.',
  },
  {
    icon: Users,
    title: 'Agile Delivery',
    description: 'Collaborating in Scrum/Kanban environments to drive UAT and accelerate project timelines.',
  },
];

export default function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-20 relative overflow-hidden" ref={ref}>
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
            About <span className="text-gradient">Me</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Business Analyst with 4+ years of experience improving healthcare, banking, fintech, and enterprise operations through data-driven analysis and workflow optimization.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="glass rounded-3xl p-8 space-y-6"
          >
            <h3 className="text-2xl font-heading font-semibold text-gradient">
              Professional Summary
            </h3>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                I'm a Business Analyst skilled in SQL, Power BI, Tableau, and ETL/ELT pipelines, with a strong ability to translate complex business needs into actionable requirements and process models.
              </p>
              <p>
                At Providence Health Plan, I consolidated clinical data from Epic and Athena using FHIR mapping, improving interoperability by 30%. At PNC Bank, I mapped payment and reconciliation workflows, standardizing processes across 10+ banking functions.
              </p>
              <p>
                I am adept at supporting Agile delivery, UAT, and system enhancements while strengthening reporting accuracy, operational efficiency, and stakeholder decision-making across cross-functional teams.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid grid-cols-2 gap-4"
          >
            {highlights.map((item, index) => (
              <motion.div
                key={item.title}
                className="glass rounded-2xl p-6 hover:shadow-glow transition-all duration-300 group"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.4 + index * 0.1 }}
                whileHover={{ scale: 1.02, y: -5 }}
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center mb-4 group-hover:shadow-glow transition-all">
                  <item.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <h4 className="font-heading font-semibold mb-2">{item.title}</h4>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Stats Bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="glass rounded-3xl p-8 grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {[
            { value: '4+', label: 'Years of Experience' },
            { value: '15+', label: 'Projects Delivered' },
            { value: 'MS', label: 'Business Analytics' },
            { value: '5+', label: 'Certifications' },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              className="text-center"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.8 + index * 0.1 }}
            >
              <div className="text-3xl md:text-4xl font-bold text-gradient mb-2">{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
