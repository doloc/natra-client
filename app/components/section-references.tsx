import Footer from "./footer";

const SectionReferences = () => {
    return (
      <div className="relative overflow-hidden w-full flex flex-col items-center bg-contain bg-center bg-no-repeat 
      aspect-768/1112 bg-[url('/images/bg-mb-references.jpg')] md:aspect-192/75 md:bg-[url('/images/bg-references.jpg')]">
        <img src="/images/game-name.png" alt="" className="w-full md:w-[44.58%]" />
        <div className="mt-[14%] md:mt-[1%] w-full flex justify-center gap-[15%]">
          <img src="/images/icon-fb.png" alt="" className="w-[18.88%] md:w-[7.55%] btn-image" />
          <img src="/images/icon-group.png" alt="" className="w-[18.88%] md:w-[7.55%] btn-image" />
          <img src="/images/icon-zalo.png" alt="" className="w-[18.88%] md:w-[7.55%] btn-image" />
        </div>
        <Footer />
      </div>
    )
}

export default SectionReferences;