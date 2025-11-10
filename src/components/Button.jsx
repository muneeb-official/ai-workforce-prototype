import { motion } from "framer-motion";

const Button = ({ text, primary = true }) => {
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.97 }}
      className={`${
        primary
          ? "bg-gradient-to-r from-[#7770FF] to-[#002B86] text-white"
          : "border border-gray-300 text-gray-800 bg-white"
      } px-6 py-3 rounded-full font-medium shadow-sm transition-all hover:shadow-md`}
    >
      {text}
    </motion.button>
  );
};

export default Button;
