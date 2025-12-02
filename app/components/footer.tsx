const Footer = () => {
    return (
      <footer className="absolute -bottom-[8%] md:bottom-0 w-full bg-cover bg-center bg-no-repeat
      aspect-768/570 bg-[url('/images/bg-mb-footer.jpg')] md:aspect-1920/290 md:bg-[url('/images/bg-footer.jpg')] text-[#F9E4C0] text-sm md:text-[1vw] py-8 px-4 flex flex-col items-center">
        <img src="/images/logo-zagoo.png" alt="" className="w-[21.88%] md:w-[8.75%]" />
        <div className="mt-[1%] font-semibold mb-1">Công Ty TNHH ZIE</div>
        <div className="text-center mb-2">
          Địa chỉ trụ sở chính: Tầng 17, Tòa Nhà ROX Tower, số 55A Nguyễn Chí Thanh, Phường Láng Thượng, Quận Đống Đa, Thành phố Hà Nội, Việt Nam<br/>
          Quyết định phê duyệt nội dung kịch bản trò chơi điện tử G1 trên mạng số 1177/QĐ-BTTTT do bộ thông tin và truyền thông cấp ngày 15/07/2024<br/>
          Giấy phép cung cấp dịch vụ trò chơi điện tử G1 trên mạng số: 396/GP-BTTTT do Bộ Thông tin và Truyền thông cấp ngày 24/07/2015
        </div>
        <div className="flex flex-wrap gap-2 justify-center items-center mt-2">
          <a href="#" className="hover:text-yellow-300 hover:underline font-semibold">Điều khoản</a>
          <div className="w-px h-[4vw] md:h-[1vw] bg-[#F9E4C0]"></div>
          <a href="#" className="hover:text-yellow-300 hover:underline font-semibold">Quy trình khiếu nại</a>
          <div className="w-px h-[4vw] md:h-[1vw] bg-[#F9E4C0]"></div>
          <a href="#" className="hover:text-yellow-300 hover:underline font-semibold">Tài liệu pháp lý</a>
          <div className="w-px h-[4vw] md:h-[1vw] bg-[#F9E4C0]"></div>
          <a href="#" className="hover:text-yellow-300 hover:underline font-semibold">Chính sách bảo mật</a>
        </div>
      </footer>
    );
  } 
export default Footer