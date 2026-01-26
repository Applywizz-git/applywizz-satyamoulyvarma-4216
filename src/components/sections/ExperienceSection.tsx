import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { MapPin, Calendar, TrendingUp, Zap, Database, Cloud } from 'lucide-react';

const experiences = [
  {
    id: 1,
    company: 'Providence Health Plan',
    role: 'Business Analyst',
    location: 'Portland, OR',
    period: 'Oct 2024 - Present',
    highlights: [
      { text: 'Consolidated clinical data from Epic and Athena using FHIR and HL7 mapping, improving interoperability by 30%.', icon: Database },
      { text: 'Produced Cotiviti risk adjustment and quality extract specifications ensuring error-free submissions and regulatory compliance.', icon: Zap },
      { text: 'Led JAD discussions and translated requirements into structured Jira user stories, raising delivery accuracy by 25%.', icon: TrendingUp },
      { text: 'Built Power BI dashboards with DAX and automated Dataflows, reducing recurring manual reporting by 40%.', icon: TrendingUp },
      { text: 'Used SQL profiling and reconciliation scripts to validate Epic and Athena feeds, increasing data accuracy by 35%.', icon: Database },
      { text: 'Identified clinical gaps by examining outreach metrics with SQL and Power BI for 100K+ members.', icon: Zap },
    ],
    color: 'hsl(186, 100%, 50%)',
    stats: [
      { value: '30%', label: 'Interoperability' },
      { value: '40%', label: 'Reporting Efficiency' },
      { value: '25%', label: 'Delivery Accuracy' },
    ]
  },
  {
    id: 2,
    company: 'PNC Bank',
    role: 'Business Analyst',
    location: 'Hartford, CT',
    period: 'Apr 2024 - Oct 2024',
    highlights: [
      { text: 'Mapped payment and reconciliation workflows in Visio and validated with SQL Server, standardizing 10+ banking functions.', icon: Database },
      { text: 'Designed Power BI and Tableau dashboards with DAX, improving real-time visibility and strengthening AML/KYC oversight.', icon: TrendingUp },
      { text: 'Translated business needs into BRDs, FRDs, and RTMs, reducing review cycle delays and ensuring regulatory compliance.', icon: Zap },
      { text: 'Evaluated control gaps across banking features, strengthening internal controls and lowering exposure to processing defects.', icon: Zap },
      { text: 'Planned UAT and regression cycles, coordinating defect triage to increase deployment stability.', icon: Cloud },
      { text: 'Investigated reconciliation breaks using SQL, addressing root causes faster and reducing resolution timelines.', icon: Database },
    ],
    color: 'hsl(260, 60%, 55%)',
  },
  {
    id: 3,
    company: 'I-Soft Corp',
    role: 'Business Intelligence Analyst',
    location: 'West Haven, CT',
    period: 'May 2023 - Dec 2023',
    highlights: [
      { text: 'Reviewed e-commerce and banking workflows through GAP and KPI analysis for 10+ third-party partners.', icon: TrendingUp },
      { text: 'Built Tableau and Excel dashboards using Power Query, broadening visibility into payment and refund trends.', icon: TrendingUp },
      { text: 'Coordinated Jira sprint plans for analytics enhancements, stabilizing release timelines.', icon: Zap },
      { text: 'Decreased data defects by applying SQL and MySQL validation across 200+ customer and payment scenarios.', icon: Database },
      { text: 'Combined SQL and API sources to create decision-support dashboards for resource allocation.', icon: Database },
      { text: 'Improved requirement transparency by preparing BRDs and FRDs aligned to BI reporting needs.', icon: Zap },
    ],
    color: 'hsl(45, 100%, 50%)',
  },
  {
    id: 4,
    company: 'Adani',
    role: 'Business Process Analyst',
    location: 'Visakhapatnam, India',
    period: 'Jan 2021 - Jul 2022',
    highlights: [
      { text: 'Improved operational efficiency by 25% through end-to-end workflow review and GAP analysis.', icon: TrendingUp },
      { text: 'Created BPMN diagrams and TO-BE models in Visio, improving engineering alignment by 40%.', icon: Database },
      { text: 'Translated business needs into BRDs and FRDs, ensuring consistent understanding during dev and testing.', icon: Zap },
      { text: 'Reduced defect leakage by 30% by coordinating UAT cycles and executing 50+ test cases.', icon: Cloud },
      { text: 'Shortened reporting cycles by 60% by developing Power BI dashboards with DAX and Power Query.', icon: TrendingUp },
      { text: 'Contributed to a 12% reduction in customer churn through SQL-based validation and root-cause checks.', icon: Database },
    ],
    color: 'hsl(210, 100%, 50%)',
  },
];

export default function ExperienceSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="experience" className="py-20 relative overflow-hidden" ref={ref}>
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 left-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
            Work <span className="text-gradient">Experience</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Building impactful solutions across healthcare, banking, and airline industries
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              className="relative"
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <motion.div
                className="glass rounded-3xl p-8 transition-all duration-500 shadow-glow"
                whileHover={{ y: -5 }}
                style={{
                  borderColor: exp.color,
                  borderWidth: 2,
                }}
              >
                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                  <div>
                    <h3
                      className="text-2xl font-heading font-bold"
                      style={{ color: exp.color }}
                    >
                      {exp.company}
                    </h3>
                    <p className="text-lg font-medium text-foreground">{exp.role}</p>
                  </div>
                  <div className="flex flex-col gap-2 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4" />
                      {exp.location}
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      {exp.period}
                    </div>
                  </div>
                </div>

                {/* Highlights – always visible */}
                <div className="space-y-4 pt-4 border-t border-border">
                  {exp.highlights.map((highlight, hIndex) => (
                    <motion.div
                      key={hIndex}
                      className="flex items-start gap-4"
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: 0.2 + hIndex * 0.05 }}
                    >
                      <div
                        className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                        style={{ backgroundColor: `${exp.color}20` }}
                      >
                        <highlight.icon
                          className="w-5 h-5"
                          style={{ color: exp.color }}
                        />
                      </div>
                      <p className="text-muted-foreground pt-2">{highlight.text}</p>
                    </motion.div>
                  ))}
                </div>

                {/* Quick Stats – for relevant roles */}
                {exp.stats && (
                  <div className="grid grid-cols-3 gap-4 mt-6 pt-6 border-t border-border">
                    {exp.stats.map((stat, statIndex) => (
                      <motion.div
                        key={stat.label}
                        className="text-center"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ delay: 0.5 + statIndex * 0.1 }}
                      >
                        <div
                          className="text-2xl font-bold"
                          style={{ color: exp.color }}
                        >
                          {stat.value}
                        </div>
                        <div className="text-xs text-muted-foreground">
                          {stat.label}
                        </div>
                      </motion.div>
                    ))}
                  </div>
                )}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
