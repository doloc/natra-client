import { useState } from "react";
import { Fragment } from "react/jsx-runtime";

const SectionInviteFriend = () => {
  const [isReceiveCode, setIsReceiveCode] = useState(false);
  const [isCopied, setIsCopied] = useState(false);

  const inviteCode = 'XXXXXXXXXX';

  const items = [
    {reward: 2, amount: 1000},
    {reward: 1, amount: 50000},
    {reward: 5, amount: 500},
    {reward: 6, amount: 1},
  ];
    return (
      <div className="relative overflow-hidden w-full flex flex-col items-center bg-contain bg-center bg-no-repeat 
      aspect-768/1380 bg-[url('/images/bg-mb-invite-friend.jpg')] md:aspect-192/95 md:bg-[url('/images/bg-invite-friend.jpg')]">
        <div className="w-[78.65%] md:w-[31.45%] pt-[5%] md:pt-[2%] flex justify-center items-center bg-contain bg-center bg-no-repeat 
        aspect-604/122 bg-[url('/images/bg-title.png')]">
          <span className="text-2xl md:text-[2.4vw] text-[#FAF6D8] font-normal" style={{ fontFamily: 'FzHBRGame, sans-serif' }}>Mời Bạn Đăng Ký Sớm</span>
        </div>
        {/* PC */}
        <div className="hidden w-full md:flex justify-center gap-[1.5%]">
          <img src="/images/char-invite-friend-1.png" alt="" className="w-[10.52%]" />
          <img src="/images/char-invite-friend-2.png" alt="" className="w-[10.78%]" />
          <img src="/images/char-invite-friend-3.png" alt="" className="w-[10.78%]" />
          <img src="/images/char-invite-friend-4.png" alt="" className="w-[10.78%]" />
          <img src="/images/char-invite-friend-5.png" alt="" className="w-[10.78%]" />
        </div>

        {/* Mobile */}
        <div className="md:hidden flex w-full justify-center gap-[5%]">
          <img src="/images/char-invite-friend-1.png" alt="" className="w-[26.30%]" />
          <img src="/images/char-invite-friend-2.png" alt="" className="w-[26.30%]" />
        </div>
        <div className="md:hidden flex w-full justify-center gap-[5%]">
          <img src="/images/char-invite-friend-3.png" alt="" className="w-[26.30%]" />
          <img src="/images/char-invite-friend-4.png" alt="" className="w-[26.30%]" />
          <img src="/images/char-invite-friend-5.png" alt="" className="w-[26.30%]" />
        </div>

        <span className="mt-[1%] md:mt-[0.5%] text-[#E22F03] text-sm md:text-[1.2vw] font-semibold" style={{ 
                fontFamily: 'SVN-Avo, sans-serif',
                WebkitTextStroke: '1px #FDF88B',
                WebkitTextFillColor: '#E22F03',
                paintOrder: 'stroke fill'
              }}>Mời 5 bạn bè cùng tham gia nhận ngay quà có giá trị</span>
        <span className="mt-[1%] md:mt-0 text-[#E22F03] text-sm md:text-[1.2vw] font-semibold" style={{ 
                fontFamily: 'SVN-Avo, sans-serif',
                WebkitTextStroke: '1px #FDF88B',
                WebkitTextFillColor: '#E22F03',
                paintOrder: 'stroke fill'
              }}>Đã Mời 0/5 Người Bạn</span>
        <img src="/images/btn-invite-friend.png" alt="" className="mt-[1%] md:mt-0 w-[50.78%] md:w-[20.31%]" />
        <div className="mt-[2%] w-[88.80%] md:w-[33.80%] pl-[1.5%] flex justify-between items-center bg-contain bg-center bg-no-repeat aspect-649/155 bg-[url('/images/frame-item-box.png')]">
          {items.map((item, index) => (
            <Fragment key={index}>
              <div key={index} className="relative flex flex-col items-center">
                <img 
                  src={`/images/icon-milestone-reward-${item.reward}.png`} 
                  alt={`Reward ${item.reward}`}
                />
                <span 
                  className="absolute bottom-0 right-[5%] text-white font-bold text-xs whitespace-nowrap"
                  style={{
                    textShadow: '2px 2px 0px #000, -2px -2px 0px #000, 2px -2px 0px #000, -2px 2px 0px #000',
                    fontFamily: 'SVN-Avo, sans-serif'
                  }}
                >
                  x{item.amount}
                </span>
              </div>
            </Fragment>
          ))}
          <img src="/images/btn-receive-code.png" alt="" className="w-[22.96%] btn-image" onClick={() => setIsReceiveCode(true)} />
        </div>

        {isReceiveCode && (
          <div 
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4"
            onClick={(e) => {
              if (e.target === e.currentTarget) {
                setIsReceiveCode(false);
              }
            }}
          >
            <div className="relative w-[83.07%] md:w-[49.27%] bg-contain bg-center bg-no-repeat 
            aspect-648/638 bg-[url('/images/frame-popup-mb-invite-friend.png')] md:aspect-946/510 md:bg-[url('/images/frame-popup-invite-friend.png')]">
              <button
                className="absolute -top-[12%] right-0 md:-top-[4%] md:-right-[5%] w-[48px] h-[48px] hover:brightness-105 transition-opacity cursor-pointer"
                onClick={() => setIsReceiveCode(false)}
                aria-label="Đóng"
              >
                <img src="/images/icon-close.png" alt="Đóng" className="w-full h-full" />
              </button>
              <div className="absolute inset-0 flex flex-col items-center px-[8%] text-[#532B0D]" style={{ fontFamily: 'SVN-Avo, sans-serif' }}>
                <p className="mt-[10%] text-sm md:text-[1.2vw] leading-relaxed text-center">
                  Cảm ơn (...) Đạo Hữu đã mời bạn bè cùng tham gia Na Tra Phong Thần Ký,
                  Tiểu Na Tra xin gửi tặng CODE chào mừng sau:
                </p>

                {/* CODE box */}
                <div className="mt-[6%] px-[5%] w-full flex justify-center">
                  <div className="w-full bg-[#9C2A15] rounded-sm overflow-hidden flex shadow-[0_4px_0_#8a1f0e]">
                    <div className="px-8 py-4 bg-[#9C2A15] text-[#FFF7E0] text-sm md:text-[1.5vw] font-bold flex items-center justify-center whitespace-nowrap min-w-[8ch]">
                      {isCopied ? 'COPIED' : 'CODE'}
                    </div>
                    <button
                      type="button"
                      className="flex-1 px-6 py-4 bg-[#B5381A] text-[#FFF7E0] text-sm md:text-[1.5vw] font-bold flex items-center tracking-[0.25em] cursor-pointer"
                      onClick={async () => {
                        try {
                          if (navigator.clipboard && navigator.clipboard.writeText) {
                            await navigator.clipboard.writeText(inviteCode);
                          }
                        } catch (e) {
                          // ignore clipboard errors
                        }
                        setIsCopied(true);
                        setTimeout(() => setIsCopied(false), 1000);
                      }}
                    >
                      {inviteCode}
                    </button>
                  </div>
                </div>

                <p className="mt-[6%] text-sm md:text-[1.1vw] text-center">
                  Nhấn vào ô để nhận CODE
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    )
}

export default SectionInviteFriend;