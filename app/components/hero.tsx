'use client'
import Link from "next/link"
import { useEffect, useRef } from "react";

const navLinks = [
    { href: '/', label: 'TRANG CHỦ' },
    { href: '/tin-tuc', label: 'TIN TỨC' },
    { href: '/su-kien', label: 'SỰ KIỆN' },
    { href: '/ho-tro', label: 'HỖ TRỢ' },
    { href: '/cong-dong', label: 'CỘNG ĐỒNG' },
  ]

const Hero = () => {
    return (
        <div className="relative overflow-hidden w-full flex justify-center bg-contain bg-center bg-no-repeat 
        aspect-768/1470 bg-[url('/images/bg-mb-hero.jpg')] md:aspect-192/95 md:bg-[url('/images/bg-hero.jpg')]">
            {/* <video
                className="mb:hidden top-0 left-0 w-full aspect-2560/1536 object-cover"
                src="/images/pc-banner-vid.mp4"
                autoPlay
                loop
                muted
                playsInline
            /> */}
            {/* PC */}
            <div className="hidden md:flex w-full justify-center items-center">
              <img src="/images/char-3.png" alt="" className="absolute top-[2%] right-[14%] w-[38.39%]" />
              <img src="/images/char-2.png" alt="" className="absolute top-[8%] left-[23%] w-[30%]" />
              <img src="/images/char-1.png" alt="" className="absolute bottom-0 left-0 w-[51.77%]" />
              <img src="/images/char-4.png" alt="" className="absolute bottom-0 right-0 w-[37.76%]" />
              <img src="/images/hero-effect.png" alt="" className="absolute bottom-0 left-0 w-full" />
              <img src="/images/hero-logo.png" alt="" className="z-10 w-[41.40%]" />
              <img src="/images/hero-title.png" alt="" className="absolute bottom-[27%] w-[38.80%]" />
              <img src="/images/btn-register.png" alt="" className="absolute bottom-[10%] w-[31.35%]" />
              <span 
                className="absolute bottom-[2%] text-[#E22F03] text-[1.8vw] font-bold" 
                style={{ 
                  fontFamily: 'SVN-Avo, sans-serif',
                  WebkitTextStroke: '2px #FDF88B',
                  WebkitTextFillColor: '#E22F03',
                  paintOrder: 'stroke fill'
                }}
              >
                Đã có 123456 Đạo Hữu đăng ký
              </span>
            </div>

            {/* Mobile */}
            <div className="flex flex-col md:hidden w-full items-center">
              <img src="/images/img-18+.png" alt="logo" className="absolute top-[9%] right-[7%] w-[28.77%]" />
              <img src="/images/hero-logo.png" alt="" className="mt-[111%] w-[83.20%]" />
              <img src="/images/hero-title.png" alt="" className="mt-[3%] w-[97%]" />
              <img src="/images/btn-register.png" alt="" className="mt-[2%] w-[78.38%]" />
            </div>
        </div>
    )
}

export default Hero