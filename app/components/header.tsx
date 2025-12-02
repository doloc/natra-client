'use client'

import { FC, useState, Fragment } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { href: '/', label: 'Trang chủ' },
  { href: '/tin-tuc', label: 'Tin tức' },
  { href: '/su-kien', label: 'Sự kiện' },
  { href: '/ho-tro', label: 'Hỗ trợ' },
  { href: '/cong-dong', label: 'Cộng đồng' },
]

const Header: FC<{
    onScrollToNews?: () => void;
}> = ({onScrollToNews}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
      <header
        className="z-100 w-full bg-contain bg-center bg-no-repeat aspect-768/132 md:aspect-1920/79 bg-[#6F1B14] md:bg-[url('/images/bg-header.jpg')]
        flex justify-center items-center gap-[2%] md:pl-[8%] fixed"
      >
        <motion.div
          className="hidden md:flex absolute w-1/5 left-[11%] top-[28%] gap-[2%]"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.img
            src="/images/logo-game.png"
            alt="logo"
            className="w-[26.30%]"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          />
          <motion.img
            src="/images/img-18+.png"
            alt="logo"
            className="w-[57.55%]"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            whileHover={{ scale: 1.05 }}
          />
        </motion.div>

        <motion.div
          className="hidden md:flex w-full justify-center items-center gap-[2%]"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
        {navLinks.map((link, idx) => (
          <Fragment key={link.href}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <Link
                href={link.href}
                className="text-[1.1vw] text-[#FDF3E6] font-semibold tracking-wide hover:text-yellow-300 uppercase block"
              >
                {link.label}
              </Link>
            </motion.div>
            {idx < navLinks.length - 1 && (
              <motion.img
                src="/images/icon-nav.png"
                alt="separator"
                className="inline-block w-[0.6vw]"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: 0.5 + idx * 0.1 }}
              />
            )}
          </Fragment>
        ))}
       </motion.div>

       <motion.div
         className="md:hidden w-full flex justify-between items-center px-[8%]"
         initial={{ opacity: 0, x: -20 }}
         animate={{ opacity: 1, x: 0 }}
         transition={{ duration: 0.6 }}
       >
        <motion.img
          src="/images/logo-game.png"
          alt="logo"
          className="w-[13.15%]"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        />
        <motion.img
          src="/images/btn-download.png"
          alt=""
          className="w-[34.76%] btn-image"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        />
        <motion.button
          type="button"
          className="w-[9.375%] btn-image"
          onClick={() => setIsMenuOpen((prev) => !prev)}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <motion.img
            src={isMenuOpen ? "/images/icon-mobile-close.png" : "/images/icon-menu.png"}
            alt="Menu"
            className="w-full h-auto"
            animate={{ rotate: isMenuOpen ? 90 : 0 }}
            transition={{ duration: 0.3 }}
          />
        </motion.button>
       </motion.div>

       {/* Mobile nav menu */}
       <AnimatePresence>
        {isMenuOpen && (
          <motion.nav
            className="md:hidden absolute top-full left-0 w-full bg-[#E5C975]"
            initial={{ opacity: 0, y: -20, height: 0 }}
            animate={{ opacity: 1, y: 0, height: "auto" }}
            exit={{ opacity: 0, y: -20, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            {navLinks.map((link, idx) => (
              <motion.div
                key={link.href}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3, delay: idx * 0.1 }}
              >
                <Link
                  href={link.href}
                  className="block w-full px-[8%] py-6 border-b border-[#F2DE9D] text-[4.5vw] font-bold text-[#4B2307]"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </Link>
              </motion.div>
            ))}
          </motion.nav>
        )}
       </AnimatePresence>
      </header>
  );
}

export default Header