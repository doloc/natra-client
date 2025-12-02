import Footer from "./footer";
import { motion } from "framer-motion";

const SectionReferences = () => {
    return (
      <div
        className="relative overflow-hidden w-full flex flex-col items-center bg-contain bg-center bg-no-repeat 
        aspect-768/1112 bg-[url('/images/bg-mb-references.jpg')] md:aspect-192/75 md:bg-[url('/images/bg-references.jpg')]"
      >
        <motion.img
          src="/images/game-name.png"
          alt=""
          className="w-full md:w-[44.58%]"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        />
        <motion.div
          className="mt-[14%] md:mt-[1%] w-full flex justify-center gap-[15%]"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <motion.img
            src="/images/icon-fb.png"
            alt=""
            className="w-[18.88%] md:w-[7.55%] btn-image"
            whileTap={{ scale: 0.95 }}
          />
          <motion.img
            src="/images/icon-group.png"
            alt=""
            className="w-[18.88%] md:w-[7.55%] btn-image"
            whileTap={{ scale: 0.95 }}
          />
          <motion.img
            src="/images/icon-zalo.png"
            alt=""
            className="w-[18.88%] md:w-[7.55%] btn-image"
            whileTap={{ scale: 0.95 }}
          />
        </motion.div>
        <Footer />
      </div>
    )
}

export default SectionReferences;