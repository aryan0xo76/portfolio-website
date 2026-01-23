"use client";
import { motion } from "framer-motion";
import { ReactNode } from "react";

export default function Section({ children, delay = 0 }: { children: ReactNode, delay?: number }) {
  return (
    <motion.div
      initial={{ y: 40, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.7, delay: delay, ease: "easeOut" }}
      className="mb-24"
    >
      {children}
    </motion.div>
  );
}