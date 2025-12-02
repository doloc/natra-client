'use client'

import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination } from "swiper/modules";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const features = [
  {
    image: '/images/banner-game-1.jpg',
    alt: 'Feature 1',
  },
  {
    image: '/images/banner-game-1.jpg',
    alt: 'Feature 2',
  },
  {
    image: '/images/banner-game-1.jpg',
    alt: 'Feature 3',
  },
  {
    image: '/images/banner-game-1.jpg',
    alt: 'Feature 4',
  },
];

const SpecialFeatures = () => {
    return (
      <div
        className="relative overflow-hidden w-full flex flex-col items-center bg-contain bg-center bg-no-repeat 
        aspect-768/650 bg-[url('/images/bg-mb-special-features.jpg')] md:aspect-192/95 md:bg-[url('/images/bg-special-features.jpg')]"
      >
        <motion.div
          className="w-[78.65%] md:w-[31.45%] pt-[5%] md:pt-[2%] flex justify-center items-center bg-contain bg-center bg-no-repeat 
          aspect-604/122 bg-[url('/images/bg-title.png')]"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <span className="text-2xl md:text-[2.4vw] text-[#FAF6D8] font-normal" style={{ fontFamily: 'FzHBRGame, sans-serif' }}>Tính Năng Đặc Sắc</span>
        </motion.div>
        <motion.div
          className="relative w-full md:w-[68%] aspect-1090/693 flex justify-center items-center"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="relative w-full flex items-center justify-center">
            <Swiper
              modules={[Pagination, EffectCoverflow]}
              effect={"coverflow"}
              grabCursor={true}
              centeredSlides={true}
              slidesPerView={"auto"}
              pagination={{ clickable: true, el: '.swiper-pagination-custom' }}
              coverflowEffect={{
                rotate: 50,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: true,
              }}
              loop={true}
              className="w-full flex justify-center items-center special-features-swiper"
            >
              {features.map((feature, idx) => (
                <SwiperSlide key={idx} className='swiper-slide' style={{width: '80%'}}>
                  <div
                    className="w-full p-[2%] overflow-hidden aspect-1090/693 flex items-center justify-center bg-contain bg-center bg-no-repeat bg-[url('/images/frame-banner.png')]"
                  >
                    <motion.img
                      src={feature.image}
                      alt={feature.alt}
                      className="w-full object-contain"
                      initial={{ opacity: 0.7 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4 }}
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Custom Pagination */}
            <div className="absolute swiper-pagination-custom w-full left-0 right-0 flex justify-center" />
          </div>
        </motion.div>
      </div>
    )
}

export default SpecialFeatures;