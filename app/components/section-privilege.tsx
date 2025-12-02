'use client'
import { useState } from "react";

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
      <div className="relative overflow-hidden w-full flex flex-col items-center bg-contain bg-center bg-no-repeat 
      aspect-768/1383 bg-[url('/images/bg-mb-privilege.jpg')] md:aspect-192/95 md:bg-[url('/images/bg-privilege.jpg')]">
        <img 
          src="/images/btn-rules.png" 
          alt="Xem thể lệ" 
          className="z-10 absolute top-[10%] md:top-0 right-[10%] md:left-[23%] w-[26.95%] md:w-[10.78%] cursor-pointer btn-image" 
          onClick={() => setIsRulesOpen(true)}
        />
        <div className="w-[78.65%] md:w-[31.45%] pt-[5%] md:pt-[2%] flex justify-center items-center bg-contain bg-center bg-no-repeat 
        aspect-604/122 bg-[url('/images/bg-title.png')]">
          <span className="text-2xl md:text-[2.4vw] text-[#FAF6D8] font-normal" style={{ fontFamily: 'FzHBRGame, sans-serif' }}>Đặc Quyền Đăng Ký Sớm</span>
        </div>

        {/* PC */}
        <img src="/images/char-privilege.png" alt="" className="hidden md:block absolute bottom-0 left-[7%] w-[50.78%]" />
        <img src="/images/char-privilege-effect.png" alt="" className="hidden md:block absolute bottom-0 left-[6%] w-[51.77%] mix-blend-screen" />

        {/* Mobile */}
        <img src="/images/char-mb-privilege.png" alt="" className="md:hidden absolute top-[10%] w-full" />
        <img src="/images/char-mb-privilege-effect.png" alt="" className="md:hidden absolute top-[10%] w-full mix-blend-screen" />

        <div className="z-10 absolute bottom-[1%] md:bottom-[6%] md:right-[18%] w-[69.14%] md:w-[27.66%] flex flex-col items-center bg-contain bg-center bg-no-repeat aspect-531/769 md:aspect-531/769 bg-[url('/images/frame-privilege.png')]">
          <div className="mt-[22%] w-[84.74%] flex flex-col space-y-[2%] items-center bg-contain bg-center bg-no-repeat aspect-450/206 bg-[url('/images/sub-frame-privilege-1.png')]">
            <div className="mt-[22%] w-full flex justify-center items-center gap-[2%]">
              <img src="/images/app-store.png" alt="" className="w-[30.61%] btn-image" />
              <img src="/images/google-play.png" alt="" className="w-[30.61%] btn-image" />
            </div>
            <span className="text-[#E22F03] font-normal" style={{ 
                fontFamily: 'SVN-Avo, sans-serif',
              }}>Vui lòng bật cài đặt “Tải xuống tự động”</span>
          </div>
          <div className="w-[84.74%] flex flex-col items-center justify-center bg-contain bg-center bg-no-repeat aspect-450/206 bg-[url('/images/sub-frame-privilege-2.png')]">
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
              <button
                type="submit"
                className="w-[70%] hover:brightness-105 hover:scale-105 transition-opacity cursor-pointer"
              >
                <img src="/images/btn-privilege-register.png" alt="Đăng ký" className="w-full" />
              </button>
            </form>
          </div>
          <div className="w-[84.74%] flex flex-col items-center bg-contain bg-center bg-no-repeat aspect-450/206 bg-[url('/images/sub-frame-privilege-3.png')]">
            <img src="/images/btn-privilege-fanpage.png" alt="" className="mt-[22%] w-[52.67%] btn-image" />
          </div>
        </div>

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