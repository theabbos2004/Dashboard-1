import React from "react";
import styles from "./style.module.scss";
import { motion } from "framer-motion";
export default function Box({ children, sx}) {
  return (
    <motion.div
      className={styles.Box}
      style={sx}
    >
        {children}
    </motion.div>
  );
}
