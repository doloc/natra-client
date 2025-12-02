'use client'
import { Fragment, useState } from "react";
import Image from "next/image";

const SectionRewards = () => {
    // State để quản lý số milestone đã đạt được (0-5)
    const [completedMilestones, setCompletedMilestones] = useState(3); // Ví dụ: đã đạt 3 milestone
    const [isRulesOpen, setIsRulesOpen] = useState(false);

    const milestones = [
      { target: '5000', rewards: [1, 2, 3, 4], amouns: [10000, 500, 10, 10] },
      { target: '10000', rewards: [1, 2, 5, 6], amouns: [50000, 1000, 500, 10] },
      { target: '20000', rewards: [2, 3, 7], amouns: [1500, 20, 20] },
      { target: '30000', rewards: [1, 2, 5, 8], amouns: [10000, 20000, 10000, 10] },
      { target: '50000', rewards: [9, 2, 3, 6], amouns: [1, 2000, 30, 20] },
    ]
    
    return (
      <div className="relative overflow-hidden w-full flex flex-col items-center bg-contain bg-center bg-no-repeat 
      aspect-768/1380 bg-[url('/images/bg-mb-rewards.jpg')] md:aspect-192/95 md:bg-[url('/images/bg-rewards.jpg')]">
        <div className="w-[78.65%] md:w-[31.45%] pt-[5%] md:pt-[2%] flex justify-center items-center bg-contain bg-center bg-no-repeat 
        aspect-604/122 bg-[url('/images/bg-title.png')]">
          <span className="text-2xl md:text-[2.4vw] text-[#FAF6D8] font-normal" style={{ fontFamily: 'FzHBRGame, sans-serif' }}>Đăng Ký Đạt Mốc Có Quà</span>
        </div>
        <img src="/images/btn-rules.png" alt="" className="absolute top-[14%] md:top-[8%] right-[40%] md:right-[26%] w-[26.95%] md:w-[10.78%] btn-image" onClick={() => setIsRulesOpen(true)} />
        <span className="mt-[2%] md:mt-[0.5%] text-[#E22F03] text-xl md:text-[1.8vw] font-bold" style={{ 
                fontFamily: 'SVN-Avo, sans-serif',
                WebkitTextStroke: '2px #FDF88B',
                WebkitTextFillColor: '#E22F03',
                paintOrder: 'stroke fill'
              }}>Đã có _____ Đạo Hữu đăng ký</span>
        <img src="/images/char-reward.png" alt="" className="hidden md:block absolute bottom-[14%] w-[33.49%]" />
        
        {/* PC - Progress Bar Section */}
        <div className="hidden md:flex relative mt-[19%] w-[60.16%] px-[1%] justify-between items-end mb-2">
          {[1, 2, 3, 4, 5].map((index) => (
            <div key={index} className="flex flex-col items-center" style={{ width: '20%' }}>
              <img src={`/images/milestone-reward-${index}.png`} alt="" className="w-[35%]" />
            </div>
          ))}
        </div>

        {/* Mobile - Progress Bar Section */}
        <div className="md:hidden absolute top-[32%] left-[10%] w-full flex flex-col justify-between space-y-[13%]">
          {[1, 2, 3, 4, 5].map((index) => (
            <div key={index} className="flex flex-col items-center w-[11.07%]">
              <img src={`/images/milestone-reward-${index}.png`} alt="" />
            </div>
          ))}
        </div>

        {/* PC - Progress Bar Container */}
        <div  className="hidden md:flex relative w-[60.16%] justify-center items-center bg-contain bg-center bg-no-repeat aspect-1155/34 bg-[url('/images/bg-progress-bar.png')]">
          <div className="w-[92%] h-3/5 rounded-full bg-[#FFFAD9]">
            <div 
              className="z-10 h-3/5 rounded-full"
              style={{ 
                width: `${(completedMilestones / 5) * 100}%`,
                background: 'linear-gradient(to bottom, #FFAD70, #FFEBA1)',
                zIndex: 2
              }}
            />
          </div>

          <div className="absolute top-0 left-0 w-full h-full flex justify-between items-center px-[10%] z-10">
            {[1, 2, 3, 4, 5].map((index) => (
              <div 
                key={index} 
                className="relative flex items-center justify-center"
              >
                <img src="/images/icon-milestone.png" alt="" className="h-full" />
              </div>
            ))}
          </div>
        </div>

        {/* Mobile - Progress Bar Container (Vertical) */}
        <div className="w-full">
          <div className="mt-[23%] ml-[25%] md:hidden relative w-[4.43%] aspect-34/975 flex items-center justify-center bg-contain bg-center bg-no-repeat bg-[url('/images/bg-mb-progress-bar.png')]">
            {/* Progress Fill Background */}
            <div className="absolute top-[5.5%] left-[50%] -translate-x-1/2 w-[60%] h-[90%] bg-[#FFFAD9] rounded-full">
              {/* Progress Fill Gradient - Completed Portion (from top to bottom) */}
              <div 
                className="absolute top-0 left-0 w-full rounded-full"
                style={{ 
                  height: `${(completedMilestones / 5) * 100}%`,
                  background: 'linear-gradient(to bottom, #FFAD70, #FFEBA1)',
                  zIndex: 2
                }}
              />
            </div>

            {/* Milestone Markers - Vertical Layout */}
            <div className="absolute top-[10%] left-0 w-full h-[80%] flex flex-col justify-between items-center z-10">
              {[1, 2, 3, 4, 5].map((index) => (
                <div 
                  key={index} 
                  className="relative flex items-center justify-center"
                >
                  <img 
                    src="/images/icon-milestone.png" 
                    alt={`Milestone ${index}`}
                    className={`w-[80%] ${index <= completedMilestones ? 'opacity-100' : 'opacity-50'}`}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* PC - Milestone Banners Row */}
        <div className="hidden md:flex relative mt-[1%] w-[60.16%] flex-col items-center">
          <div className="relative w-full flex justify-between items-center mb-[1%] gap-[2%]">
            {milestones.map((milestone, index) => (
              <div 
                key={index} 
                className="flex flex-col items-center w-1/5"
              >
                <div 
                  className="relative w-full flex justify-center items-center bg-contain bg-center bg-no-repeat aspect-604/122 bg-[url('/images/bg-milestone-title.png')]"
                >
                  <span 
                    className="text-[#FAF6D8] font-normal text-center px-2 text-[1.2vw]"
                    style={{ 
                      fontFamily: 'FzHBRGame, sans-serif',
                    }}
                  >
                    Đạt {milestone.target} Đăng Ký
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Rewards Row */}
          <div className="relative w-full flex justify-between items-start mb-[1%] gap-[2%]">
            {milestones.map((milestone, index) => (
              <div 
                key={index} 
                className={`flex flex-col items-center w-1/5 ${index !== 2 ? 'px-[2%]' : ''}`}
              >
                <div className={`w-full flex ${index === 2 ? 'flex-col' : 'flex-wrap justify-center'} items-center gap-2`}>
                  {index !==2 && (
                    <>
                      <div className="w-full flex justify-center gap-2">
                        {milestone.rewards.slice(0, 2).map((rewardIndex, rewardIdx) => (
                          <div key={rewardIdx} className="relative flex flex-col items-center">
                            <img 
                              src={`/images/icon-milestone-reward-${rewardIndex}.png`} 
                              alt={`Reward ${rewardIndex}`} 
                            />
                            <span 
                              className="absolute bottom-0 right-[5%] text-white font-bold text-xs whitespace-nowrap"
                              style={{
                                textShadow: '2px 2px 0px #000, -2px -2px 0px #000, 2px -2px 0px #000, -2px 2px 0px #000',
                                fontFamily: 'SVN-Avo, sans-serif'
                              }}
                            >
                              x{milestone.amouns[rewardIdx]}
                            </span>
                          </div>
                        ))}
                      </div>
                      <div className="w-full flex justify-center gap-2">
                        {milestone.rewards.slice(2, 4).map((rewardIndex, rewardIdx) => (
                          <div key={rewardIdx} className="relative flex flex-col items-center">
                            <img 
                              src={`/images/icon-milestone-reward-${rewardIndex}.png`} 
                              alt={`Reward ${rewardIndex}`}
                            />
                            <span 
                              className="absolute bottom-0 right-[5%] text-white font-bold text-xs whitespace-nowrap"
                              style={{
                                textShadow: '2px 2px 0px #000, -2px -2px 0px #000, 2px -2px 0px #000, -2px 2px 0px #000',
                                fontFamily: 'SVN-Avo, sans-serif'
                              }}
                            >
                              x{milestone.amouns[rewardIdx + 2]}
                            </span>
                          </div>
                        ))}
                      </div>
                    </>
                  )}
                  {index === 2 && (
                    <>
                      <img src="/images/btn-reward-register.png" alt="" className="w-full px-[2%] btn-image" />
                      <div className="flex justify-center gap-[2%]">
                        {milestone.rewards.map((rewardIndex, rewardIdx) => (
                          <div key={rewardIdx} className="relative flex flex-col items-center w-[45%]">
                            <img 
                              src={`/images/icon-milestone-reward-${rewardIndex}.png`} 
                              alt={`Reward ${rewardIndex}`}
                            />
                            <span 
                              className="absolute bottom-0 right-[5%] text-white font-bold text-xs whitespace-nowrap"
                              style={{
                                textShadow: '2px 2px 0px #000, -2px -2px 0px #000, 2px -2px 0px #000, -2px 2px 0px #000',
                                fontFamily: 'SVN-Avo, sans-serif'
                              }}
                            >
                              x{milestone.amouns[rewardIdx]}
                            </span>
                          </div>
                        ))}
                      </div>
                    </>
                  )}
                </div>
              </div>
            ))}
            <img src="/images/icon-milestone-reward-10.png" alt="" className="absolute top-[12%] -right-[8%] w-[10%]" />
          </div>
        </div>

        {/* Mobile - Milestone Banners Row */}
        <div className="md:hidden absolute top-[28%] left-[30%] w-full flex flex-col justify-between space-y-[2.5%]">
          {milestones.map((milestone, index) => (
            <div key={index} className="relative w-full flex">
              <div className="flex justify-center items-center w-[23.96%] 
              aspect-184/171 bg-contain bg-center bg-no-repeat bg-[url('/images/bg-mb-milestone-title.png')]">
                <span className="w-[80%] text-[#FAF6D8] font-semibold text-center px-2 text-xs">
                  Đạt {milestone.target} Đăng Ký
                </span>
              </div>
              
              {/* Mobile - Rewards Row */}
              <div className="flex justify-start items-center gap-[2%]">
                <div 
                  key={index} 
                  className={`flex flex-col items-center ${index === 2 ? 'w-2/3' : 'w-[30%]'}`}
                >
                  <div className={`w-full flex ${index === 2 ? 'flex-col' : 'flex-wrap justify-center'} items-center gap-1`}>
                    {index !==2 && (
                      <>
                        <div className="w-full flex justify-center gap-1">
                          {milestone.rewards.slice(0, 2).map((rewardIndex, rewardIdx) => (
                            <div key={rewardIdx} className="relative flex flex-col items-center">
                              <img 
                                src={`/images/icon-milestone-reward-${rewardIndex}.png`} 
                                alt={`Reward ${rewardIndex}`} 
                              />
                              <span 
                                className="absolute bottom-0 right-[5%] text-white font-bold text-xs whitespace-nowrap"
                                style={{
                                  textShadow: '2px 2px 0px #000, -2px -2px 0px #000, 2px -2px 0px #000, -2px 2px 0px #000',
                                  fontFamily: 'SVN-Avo, sans-serif'
                                }}
                              >
                                x{milestone.amouns[rewardIdx]}
                              </span>
                            </div>
                          ))}
                        </div>
                        <div className="w-full flex justify-center gap-1">
                          {milestone.rewards.slice(2, 4).map((rewardIndex, rewardIdx) => (
                            <div key={rewardIdx} className="relative flex flex-col items-center">
                              <img 
                                src={`/images/icon-milestone-reward-${rewardIndex}.png`} 
                                alt={`Reward ${rewardIndex}`}
                              />
                              <span 
                                className="absolute bottom-0 right-[5%] text-white font-bold text-xs whitespace-nowrap"
                                style={{
                                  textShadow: '2px 2px 0px #000, -2px -2px 0px #000, 2px -2px 0px #000, -2px 2px 0px #000',
                                  fontFamily: 'SVN-Avo, sans-serif'
                                }}
                              >
                                x{milestone.amouns[rewardIdx + 2]}
                              </span>
                            </div>
                          ))}
                        </div>
                      </>
                    )}
                    {index === 2 && (
                      <>
                        <img src="/images/btn-reward-register.png" alt="" className="w-full px-[2%] btn-image" />
                        <div className="flex justify-center gap-[2%]">
                          {milestone.rewards.map((rewardIndex, rewardIdx) => (
                            <div key={rewardIdx} className="relative flex flex-col items-center w-[45%]">
                              <img 
                                src={`/images/icon-milestone-reward-${rewardIndex}.png`} 
                                alt={`Reward ${rewardIndex}`}
                              />
                              <span 
                                className="absolute bottom-0 right-[5%] text-white font-bold text-xs whitespace-nowrap"
                                style={{
                                  textShadow: '2px 2px 0px #000, -2px -2px 0px #000, 2px -2px 0px #000, -2px 2px 0px #000',
                                  fontFamily: 'SVN-Avo, sans-serif'
                                }}
                              >
                                x{milestone.amouns[rewardIdx]}
                              </span>
                            </div>
                          ))}
                        </div>
                      </>
                    )}
                  </div>
                </div>
                
              </div>
            </div>
          ))}
          <img src="/images/icon-milestone-reward-10.png" alt="" className="absolute bottom-[3%] left-[46%] w-[20%]" />
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
                  Quà Tặng Đạt Mốc Có Quà
                </h3>
                <div className="mt-[5%] space-y-3 text-sm md:text-[1vw] font-normal text-[#532B0D] w-full">
                  <div className="flex items-start gap-2">
                    <img src="/images/icon-arrow.png" alt="" className="mt-1 w-4 h-4 md:h-[1.2vw] shrink-0" />
                    <p>Cảm ơn Đạo Hữu đã đăng ký tham gia Na Tra Phong Thần Ký.</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <img src="/images/icon-arrow.png" alt="" className="mt-1 w-4 h-4 md:h-[1.2vw] shrink-0" />
                    <p>Khi ra mắt game, quà tặng sẽ được gửi về thư trong game của Đạo Hữu với số mốc đạt được tương ứng.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    )
}

export default SectionRewards