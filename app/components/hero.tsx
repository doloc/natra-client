'use client'
import { motion } from "framer-motion";

const Hero = () => {
    return (
        <div
          className="relative overflow-hidden w-full flex justify-center bg-contain bg-center bg-no-repeat
          aspect-768/1470 bg-[url('/images/bg-mb-hero.jpg')] md:aspect-192/95 md:bg-[url('/images/bg-hero.jpg')]"
        >
            {/* PC Hero Section */}
            <motion.div
              className="hidden md:flex w-full justify-center items-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              {/* Character animations */}
              <motion.img
                src="/images/char-3.png"
                alt=""
                className="absolute top-[2%] right-[14%] w-[38.39%]"
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.8 }}
                whileHover={{ scale: 1.02 }}
              />

              <motion.img
                src="/images/char-2.png"
                alt=""
                className="absolute top-[8%] left-[23%] w-[30%]"
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.9 }}
                whileHover={{ scale: 1.02 }}
              />

              <motion.img
                src="/images/char-1.png"
                alt=""
                className="absolute bottom-0 left-0 w-[51.77%]"
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.6 }}
              />

              <motion.img
                src="/images/char-4.png"
                alt=""
                className="absolute bottom-0 right-0 w-[37.76%]"
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.7 }}
              />

              {/* Main hero content */}
              <img
                src="/images/hero-effect.png"
                alt=""
                className="absolute bottom-0 left-0 w-full"
              />

              <motion.img
                src="/images/hero-logo.png"
                alt=""
                className="z-10 w-[41.40%]"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 0.4 }}
              />

              <motion.img
                src="/images/hero-title.png"
                alt=""
                className="absolute bottom-[27%] w-[38.80%]"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.2 }}
              />

              <motion.img
                src="/images/btn-register.png"
                alt=""
                className="absolute bottom-[10%] w-[31.35%]"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 1.4 }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              />

              <motion.span
                className="absolute bottom-[2%] text-[#E22F03] text-[1.8vw] font-bold"
                style={{
                  fontFamily: 'SVN-Avo, sans-serif',
                  WebkitTextStroke: '2px #FDF88B',
                  WebkitTextFillColor: '#E22F03',
                  paintOrder: 'stroke fill'
                }}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.6 }}
              >
                Đã có 123456 Đạo Hữu đăng ký
              </motion.span>
            </motion.div>

            {/* Mobile Hero Section */}
            <motion.div
              className="flex flex-col md:hidden w-full items-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.3 }}
            >
              <motion.img
                src="/images/img-18+.png"
                alt="logo"
                className="absolute top-[9%] right-[7%] w-[28.77%]"
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                whileHover={{ scale: 1.05 }}
              />

              <motion.img
                src="/images/hero-logo.png"
                alt=""
                className="mt-[111%] w-[83.20%]"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              />

              <motion.img
                src="/images/hero-title.png"
                alt=""
                className="mt-[3%] w-[97%]"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
              />

              <motion.img
                src="/images/btn-register.png"
                alt=""
                className="mt-[2%] w-[78.38%]"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{
                  opacity: 1,
                  scale: 1,
                  y: [0, -10, 0],
                }}
                transition={{
                  duration: 2,
                  ease: "easeInOut",
                  delay: 1,
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              />
            </motion.div>

            {/* Floating decorative particles */}
            <motion.div className="absolute inset-0 pointer-events-none">
              {[...Array(5)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-2 h-2 bg-white/20 rounded-full"
                  style={{
                    left: `${15 + i * 18}%`,
                    top: `${20 + (i % 2) * 30}%`,
                  }}
                  animate={{
                    y: [0, -15, 0],
                    opacity: [0.1, 0.4, 0.1],
                    scale: [1, 1.2, 1],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    delay: i * 0.8,
                    ease: "easeInOut",
                  }}
                />
              ))}
            </motion.div>
        </div>
    )
}

export default Hero