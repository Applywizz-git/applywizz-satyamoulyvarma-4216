import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { FaDatabase, FaChartBar, FaFileAlt, FaProjectDiagram, FaCheckDouble, FaUsers, FaFileExcel, FaCode, FaCloud } from 'react-icons/fa';
import { Cloud, Zap, Code, Database, FileText, Settings } from 'lucide-react';

const skillCategories = [
  {
    title: 'Analytics & BI',
    skills: [
      { name: 'Power BI', icon: FaChartBar, color: '#f2c811' },
      { name: 'Tableau', icon: FaChartBar, color: '#e97627' },
      { name: 'Looker Studio', icon: FaChartBar, color: '#4285f4' },
      { name: 'Excel', icon: FaFileExcel, color: '#217346' },
      { name: 'DAX', icon: FaChartBar, color: '#f2c811' },
      { name: 'Data Modeling', icon: FaDatabase, color: '#336791' },
    ],
  },
  {
    title: 'Databases & Engineering',
    skills: [
      { name: 'SQL', icon: FaDatabase, color: '#003b57' },
      { name: 'MS SQL Server', icon: FaDatabase, color: '#a91d22' },
      { name: 'MySQL', icon: FaDatabase, color: '#4479a1' },
      { name: 'Snowflake', icon: FaDatabase, color: '#29b5e8' },
      { name: 'Amazon Redshift', icon: FaDatabase, color: '#2496ed' },
      { name: 'ETL/ELT Pipelines', icon: Settings, color: '#ff9900' },
    ],
  },
  {
    title: 'Business Analysis',
    skills: [
      { name: 'BRD/FRD/SRS', icon: FaFileAlt, color: '#6db33f' },
      { name: 'User Stories', icon: FaFileAlt, color: '#6db33f' },
      { name: 'BPMN/Process Flow', icon: FaProjectDiagram, color: '#6db33f' },
      { name: 'RTM', icon: FaCheckDouble, color: '#6db33f' },
      { name: 'Wireframing', icon: FaProjectDiagram, color: '#6db33f' },
      { name: 'Gap Analysis', icon: FaCheckDouble, color: '#6db33f' },
    ],
  },
  {
    title: 'Platforms & Integrations',
    skills: [
      { name: 'Salesforce (SOQL)', icon: FaCloud, color: '#00a1e0' },
      { name: 'SAP FI/CO', icon: FaDatabase, color: '#008fd3' },
      { name: 'FHIR/HL7', icon: FaChartBar, color: '#ff9900' },
      { name: 'Epic/Athena', icon: Database, color: '#0078d4' },
      { name: 'AWS (S3/Lambda)', icon: Cloud, color: '#ff9900' },
    ],
  },
  {
    title: 'Methods & Quality',
    skills: [
      { name: 'Agile/Scrum', icon: FaUsers, color: '#f7df1e' },
      { name: 'UAT', icon: FaCheckDouble, color: '#e34f26' },
      { name: 'Regression Testing', icon: FaCheckDouble, color: '#1572b6' },
      { name: 'KPI & Metrics', icon: FaChartBar, color: '#06b6d4' },
    ],
  },
  {
    title: 'Collaboration Tools',
    skills: [
      { name: 'Jira', icon: FaCheckDouble, color: '#0052cc' },
      { name: 'Confluence', icon: FaFileAlt, color: '#172b4d' },
      { name: 'MS Teams/Slack', icon: FaUsers, color: '#6264a7' },
      { name: 'Visio/Lucidchart', icon: FaProjectDiagram, color: '#7952b3' },
    ],
  },
];

export default function SkillsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  return (
    <section id="skills" className="py-20 relative overflow-hidden" ref={ref}>
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
            Technical <span className="text-gradient">Skills</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolkit for building modern, scalable enterprise applications
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              className="glass rounded-2xl p-6 hover:shadow-glow transition-all duration-500"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <h3 className="text-lg font-heading font-semibold mb-4 text-gradient">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    className="relative group"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: categoryIndex * 0.1 + skillIndex * 0.05 }}
                    onMouseEnter={() => setHoveredSkill(skill.name)}
                    onMouseLeave={() => setHoveredSkill(null)}
                  >
                    <motion.div
                      className="flex items-center gap-2 px-3 py-2 rounded-lg bg-muted/50 hover:bg-muted transition-all cursor-pointer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <skill.icon
                        className="w-5 h-5 transition-colors"
                        style={{ color: hoveredSkill === skill.name ? skill.color : 'currentColor' }}
                      />
                      <span className="text-sm font-medium">{skill.name}</span>
                    </motion.div>

                    {/* Tooltip */}
                    <motion.div
                      className="absolute -top-10 left-1/2 -translate-x-1/2 px-3 py-1.5 rounded-lg bg-card text-xs font-medium whitespace-nowrap opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity shadow-elevated z-10"
                      style={{ borderColor: skill.color, borderWidth: 1 }}
                    >
                      {skill.name}
                    </motion.div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
