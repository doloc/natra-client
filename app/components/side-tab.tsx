import Link from "next/link"
import { FC } from "react";

const SideTab: FC<{
    onScrollToTop: () => void;
}> = ({onScrollToTop}) => {

    return (
        <div className="hidden md:flex justify-center z-50 fixed w-[9.21%] top-[12.5%] right-[1%] bg-contain bg-center bg-no-repeat aspect-177/603 bg-[url('/images/bg-sidetab.png')]">
            <div className="absolute w-[90%] h-20 right-[6%] flex flex-col items-center">
                <img src="/images/logo-game.png" alt="logo" className="-mt-[25%] w-[80.79%] object-contain" />
                <img src="/images/btn-input-code.png" alt="" className="mt-[10%] w-[81.93%] object-contain btn-image" />
                <img src="/images/qr.png" alt="logo" className="mt-[5%] w-[80.23%] object-contain" />
                <img src="/images/btn-download-appstore.png" alt="logo" className="mt-[10%] w-[92.65%] object-contain btn-image" />
                <img src="/images/btn-download-googleplay.png" alt="logo" className="mt-[10%] w-[92.65%] object-contain btn-image" />
                <img src="/images/btn-download-apk.png" alt="logo" className="mt-[10%] w-[92.65%] object-contain btn-image" />
                <div className="mt-[10%] flex justify-between">
                    <img src="/images/btn-sidetab-fb.png" alt="" className="w-1/3 object-contain btn-image" />
                    <img src="/images/btn-sidetab-zalo.png" alt="" className="w-1/3 object-contain btn-image" />
                    <img src="/images/btn-sidetab-group.png" alt="" className="w-1/3 object-contain btn-image" />
                </div>
            </div>
            <img src="/images/btn-arrow.png" alt="" className="absolute top-[35%] -left-[11%] z-50 w-[16.38%] btn-image object-contain" />
            <img src="/images/btn-top.png" alt="" className="absolute z-50 w-[38.98%] btn-image object-contain -bottom-[6%]" onClick={onScrollToTop} />
        </div>
    )
}

export default SideTab