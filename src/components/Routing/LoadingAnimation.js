import React from "react";
import { motion } from "framer-motion";
import NeptuneLoad from "./loading.gif";

export function LoadingAnimation() {
  return (
    <motion.div
      className="LoadingAnimation"
      animate={{ y: -6969, opacity: 0, transition: { delay: 1, duration: 1 } }}
    >
      <motion.img
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        src={NeptuneLoad}
      />
    </motion.div>
  );
}

export const LoadingAnimationSettings = {
  key: "Loading",
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: {
    opacity: 0,
    transition: { duration: 1, ease: "easeOut" },
  },
  transition: { duration: 1, ease: "easeOut" },
};
