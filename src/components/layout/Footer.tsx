import { motion } from 'framer-motion';


export default function Footer() {
  return (
    <footer className="py-8 border-t border-border">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row items-center justify-between gap-4"
        >
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} Naga Venkata. All rights reserved.
          </p>

        </motion.div>
      </div>
    </footer>
  );
}
