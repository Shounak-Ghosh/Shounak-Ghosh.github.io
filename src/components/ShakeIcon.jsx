import React, { useState } from "react";
import { motion } from "framer-motion";

// Define the ShakeIcon component to accept an `Icon` prop
const ShakeIcon = ({ Icon, className = "" }) => {
  const [shake, setShake] = useState(false);

  const handleHover = () => {
    if (!shake) {
      setShake(true);
      setTimeout(() => setShake(false), 500); // Duration of the shake animation
    }
  };

  return (
    <motion.div
      onHoverStart={handleHover}
      animate={shake ? { rotate: [0, -10, 10, -10, 10, 0] } : {}}
      transition={{ duration: 0.5 }}
      className={`cursor-pointer ${className}`}
    >
      <div className="rounded-2xl border-4 border-neutral-800 p-4"><Icon /></div>
    </motion.div>
  );
};

export default ShakeIcon;
