'use client'
import { useState } from "react";
import { motion } from "framer-motion";

const SectionPrivilege = () => {
    const [phoneNumber, setPhoneNumber] = useState('');
    const [isFocused, setIsFocused] = useState(false);
    const [isRulesOpen, setIsRulesOpen] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle form submission here
        console.log('Phone number:', phoneNumber);
    };

    return (
      <div
        className="relative overflow-hidden w-full flex flex-col items-center bg-contain bg-center bg-no-repeat 
        aspect-768/1383 bg-[url('/images/bg-mb-privilege.jpg')] md:aspect-192/95 md:bg-[url('/images/bg-privilege.jpg')]"
      >
        <motion.img 
          src="/images/btn-rules.png" 
          alt="Xem thể lệ" 
          className="z-10 absolute top-[10%] md:top-0 right-[10%] md:left-[23%] w-[26.95%] md:w-[10.78%] cursor-pointer btn-image" 
          onClick={() => setIsRulesOpen(true)}
          initial={{ opacity: 0, scale: 0.9, y: -10 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.2 }}
          whileTap={{ scale: 0.95 }}
        />
        <motion.div
          className="w-[78.65%] md:w-[31.45%] pt-[5%] md:pt-[2%] flex justify-center items-center bg-contain bg-center bg-no-repeat 
          aspect-604/122 bg-[url('/images/bg-title.png')]"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <span className="text-2xl md:text-[2.4vw] text-[#FAF6D8] font-normal" style={{ fontFamily: 'FzHBRGame, sans-serif' }}>Đặc Quyền Đăng Ký Sớm</span>
        </motion.div>

        {/* PC */}
        <motion.img
          src="/images/char-privilege.png"
          alt=""
          className="hidden md:block absolute bottom-0 left-[7%] w-[50.78%]"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
        />
        <motion.img
          src="/images/char-privilege-effect.png"
          alt=""
          className="hidden md:block absolute bottom-0 left-[6%] w-[51.77%] mix-blend-screen"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        />

        {/* Mobile */}
        <motion.img
          src="/images/char-mb-privilege.png"
          alt=""
          className="md:hidden absolute top-[10%] w-full"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        />
        <motion.img
          src="/images/char-mb-privilege-effect.png"
          alt=""
          className="md:hidden absolute top-[10%] w-full mix-blend-screen"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        />

        <motion.div
          className="z-10 absolute bottom-[1%] md:bottom-[6%] md:right-[18%] w-[69.14%] md:w-[27.66%] flex flex-col items-center bg-contain bg-center bg-no-repeat aspect-531/769 md:aspect-531/769 bg-[url('/images/frame-privilege.png')]"
          initial={{ opacity: 0, y: 40, scale: 0.96 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
        >
          <motion.div
            className="mt-[22%] w-[84.74%] flex flex-col space-y-[2%] items-center bg-contain bg-center bg-no-repeat aspect-450/206 bg-[url('/images/sub-frame-privilege-1.png')]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div className="mt-[22%] w-full flex justify-center items-center gap-[2%]">
              <motion.img
                src="/images/app-store.png"
                alt=""
                className="w-[30.61%] btn-image"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.5 }}
              />
              <motion.img
                src="/images/google-play.png"
                alt=""
                className="w-[30.61%] btn-image"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.6 }}
              />
            </div>
            <span className="text-[#E22F03] font-normal" style={{ 
                fontFamily: 'SVN-Avo, sans-serif',
              }}>Vui lòng bật cài đặt “Tải xuống tự động”</span>
          </motion.div>
          <motion.div
            className="w-[84.74%] flex flex-col items-center justify-center bg-contain bg-center bg-no-repeat aspect-450/206 bg-[url('/images/sub-frame-privilege-2.png')]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <form onSubmit={handleSubmit} className="mt-[20%] w-full flex flex-col items-center space-y-[2%] px-[13%]">
              <input
                type="tel"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
                placeholder={isFocused || phoneNumber ? '' : 'Nhập SĐT'}
                className="w-full px-1 py-1 text-[#E22F03] placeholder:text-[#E22F03] bg-[#FBF2C6] border-2 border-transparent focus:outline-none focus:ring-2 focus:ring-[#ee947e] text-center font-semibold"
                style={{ fontFamily: 'SVN-Avo, sans-serif' }}
              />
              <motion.button
                type="submit"
                className="w-[70%] hover:brightness-105 transition-opacity cursor-pointer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.img
                  src="/images/btn-privilege-register.png"
                  alt="Đăng ký"
                  className="w-full"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.7 }}
                />
              </motion.button>
            </form>
          </motion.div>
          <motion.div
            className="w-[84.74%] flex flex-col items-center bg-contain bg-center bg-no-repeat aspect-450/206 bg-[url('/images/sub-frame-privilege-3.png')]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            <motion.img
              src="/images/btn-privilege-fanpage.png"
              alt=""
              className="mt-[22%] w-[52.67%] btn-image"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            />
          </motion.div>
        </motion.div>

        {isRulesOpen && (
          <div 
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4"
            onClick={(e) => {
              if (e.target === e.currentTarget) {
                setIsRulesOpen(false);
              }
            }}
          >
            <div className="relative w-[83.07%] md:w-[49.27%] bg-contain bg-center bg-no-repeat 
            aspect-648/638 bg-[url('/images/frame-popup-mb-privilege-rules.png')] md:aspect-946/510 md:bg-[url('/images/frame-popup-privilege-rules.png')]" >
              <button
                className="absolute -top-[12%] right-0 md:-top-[4%] md:-right-[5%] w-[48px] h-[48px] hover:brightness-105 transition-opacity cursor-pointer"
                onClick={() => setIsRulesOpen(false)}
                aria-label="Đóng"
              >
                <img src="/images/icon-close.png" alt="Đóng" className="w-full h-full" />
              </button>
              <div className="absolute inset-0 flex flex-col items-center px-[12%] gap-4 text-[#8A2401]" style={{ fontFamily: 'SVN-Avo, sans-serif' }}>
                <h3 className="mt-[12%] md:mt-[9%] text-[#CA3A1A] text-xl md:text-[1.7vw] font-normal text-center w-full" style={{ fontFamily: 'FzHBRGame, sans-serif' }}>
                  Đặc Quyền Đăng Ký Sớm
                </h3>
                <div className="mt-[5%] space-y-3 text-sm md:text-[1vw] font-normal text-[#532B0D] w-full">
                  <div className="flex items-start gap-2">
                    <img src="/images/icon-arrow.png" alt="" className="mt-1 w-4 h-4 md:h-[1.2vw] shrink-0" />
                    <p>Đạo hữu khi đăng ký sớm sẽ nhận được quà tặng giá trị khi game ra mắt.</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <img src="/images/icon-arrow.png" alt="" className="mt-1 w-4 h-4 md:h-[1.2vw] shrink-0" />
                    <p>Chọn &quot;Nhập SĐT&quot; để điền thông tin nhận quà.</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <img src="/images/icon-arrow.png" alt="" className="mt-1 w-4 h-4 md:h-[1.2vw] shrink-0" />
                    <p>Khi game ra mắt, quà sẽ được gửi tới Đạo Hữu qua tin nhắn Zalo.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    )
}

export default SectionPrivilege