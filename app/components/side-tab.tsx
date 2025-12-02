import { FC } from "react";
import { motion } from "framer-motion";

const SideTab: FC<{
    onScrollToTop: () => void;
}> = ({onScrollToTop}) => {

    return (
        <motion.div
          className="hidden md:flex justify-center z-50 fixed w-[9.21%] top-[12.5%] right-[1%] bg-contain bg-center bg-no-repeat aspect-177/603 bg-[url('/images/bg-sidetab.png')]"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 1.5, ease: "easeOut" }}
        >
            <motion.div
              className="absolute w-[90%] h-20 right-[6%] flex flex-col items-center"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 2 }}
            >
                <motion.img
                  src="/images/logo-game.png"
                  alt="logo"
                  className="-mt-[25%] w-[80.79%] object-contain"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 2.2 }}
                  whileHover={{ scale: 1.1 }}
                />

                <motion.img
                  src="/images/btn-input-code.png"
                  alt=""
                  className="mt-[10%] w-[81.93%] object-contain btn-image"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 2.4 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                />

                <motion.img
                  src="/images/qr.png"
                  alt="logo"
                  className="mt-[5%] w-[80.23%] object-contain"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 2.6 }}
                  whileHover={{ scale: 1.05 }}
                />

                <motion.img
                  src="/images/btn-download-appstore.png"
                  alt="logo"
                  className="mt-[10%] w-[92.65%] object-contain btn-image"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 2.8 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                />

                <motion.img
                  src="/images/btn-download-googleplay.png"
                  alt="logo"
                  className="mt-[10%] w-[92.65%] object-contain btn-image"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 3 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                />

                <motion.img
                  src="/images/btn-download-apk.png"
                  alt="logo"
                  className="mt-[10%] w-[92.65%] object-contain btn-image"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 3.2 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                />

                <motion.div
                  className="mt-[10%] flex justify-between"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 3.4 }}
                >
                    <motion.img
                      src="/images/btn-sidetab-fb.png"
                      alt=""
                      className="w-1/3 object-contain btn-image"
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: 3.6 }}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    />

                    <motion.img
                      src="/images/btn-sidetab-zalo.png"
                      alt=""
                      className="w-1/3 object-contain btn-image"
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: 3.7 }}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    />

                    <motion.img
                      src="/images/btn-sidetab-group.png"
                      alt=""
                      className="w-1/3 object-contain btn-image"
                      initial={{ opacity: 0, x: 10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: 3.8 }}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    />
                </motion.div>
            </motion.div>

            <motion.img
              src="/images/btn-arrow.png"
              alt=""
              className="absolute top-[35%] -left-[11%] z-50 w-[16.38%] btn-image object-contain"
              initial={{ opacity: 0, x: 100 }}
              animate={{
                opacity: 1,
                x: 0,
                y: [0, -10, 0],
              }}
              transition={{
                duration: 2,
                delay: 4,
                ease: "easeInOut",
              }}
              whileHover={{ scale: 1.1, rotate: [0, 10, -10, 0] }}
              whileTap={{ scale: 0.9 }}
            />

            <motion.img
              src="/images/btn-top.png"
              alt=""
              className="absolute z-50 w-[38.98%] btn-image object-contain -bottom-[6%]"
              onClick={onScrollToTop}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{
                opacity: 1,
                scale: 1,
                y: [0, -10, 0],
              }}
              transition={{
                duration: 2,
                delay: 4.2,
                ease: "easeInOut",
              }}
              whileHover={{
                scale: 1.1,
                filter: "drop-shadow(0 0 15px rgba(255, 255, 255, 0.5))"
              }}
              whileTap={{ scale: 0.9 }}
            />
        </motion.div>
    )
}

export default SideTab