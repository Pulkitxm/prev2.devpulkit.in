import { motion } from "framer-motion";

const transition = ({children,isDark}) => {
  return (
    <>
      <motion.div
        className="slide-in"
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 0 }}
        exit={{ scaleY: 1 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        style={{
          background: isDark ? "rgb(47 47 47)" : "#d75b5b",
        }}
      />
      {children}
      <motion.div
        className="slide-out"
        initial={{ scaleY: 1 }}
        animate={{ scaleY: 0 }}
        exit={{ scaleY:  0}}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        style={{
          background: isDark ? "rgb(47 47 47)" : "#d75b5b",
        }}
      />
    </>
  );
};

export default transition;