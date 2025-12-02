'use client'
import { FC, useState, Fragment } from "react";
import Link from "next/link";
import Image from "next/image";
import { cn } from "../lib/utils";

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
      <header className="z-100 w-full bg-contain bg-center bg-no-repeat aspect-768/132 md:aspect-1920/79 bg-[#6F1B14] md:bg-[url('/images/bg-header.jpg')] 
      flex justify-center items-center gap-[2%] md:pl-[8%] fixed">
        <div className="hidden md:flex absolute w-1/5 left-[11%] top-[28%] gap-[2%]">
          <img src="/images/logo-game.png" alt="logo" className="w-[26.30%]" />
          <img src="/images/img-18+.png" alt="logo" className="w-[57.55%]" />
        </div>
        <div className="hidden md:flex w-full justify-center items-center gap-[2%]">
        {navLinks.map((link, idx) => (
          <Fragment key={link.href}>
            <Link 
              href={link.href}
              className="text-[1.1vw] text-[#FDF3E6] font-semibold tracking-wide hover:text-yellow-300 uppercase"
            >
              {link.label}          
            </Link>
            {idx < navLinks.length - 1 && (
              <img 
                src="/images/icon-nav.png" 
                alt="separator" 
                className="inline-block w-[0.6vw]"
              />
            )}
          </Fragment>
        ))}
       </div>

       <div className="md:hidden w-full flex justify-between items-center px-[8%]">
        <img src="/images/logo-game.png" alt="logo" className="w-[13.15%]" />
        <img src="/images/btn-download.png" alt="" className="w-[34.76%] btn-image" />
        <button
          type="button"
          className="w-[9.375%] btn-image"
          onClick={() => setIsMenuOpen((prev) => !prev)}
        >
          <img
            src={isMenuOpen ? "/images/icon-mobile-close.png" : "/images/icon-menu.png"}
            alt="Menu"
            className="w-full h-auto"
          />
        </button>
       </div>

       {/* Mobile nav menu */}
       {isMenuOpen && (
        <nav className="md:hidden absolute top-full left-0 w-full bg-[#E5C975]">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="block w-full px-[8%] py-6 border-b border-[#F2DE9D] text-[4.5vw] font-bold text-[#4B2307]"
              onClick={() => setIsMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </nav>
       )}
      </header>
  );
}

export default Header