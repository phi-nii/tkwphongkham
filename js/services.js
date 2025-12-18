// DỮ LIỆU CHI TIẾT DỊCH VỤ (Giả lập database)
const serviceData = {
    "whitening": {
        title: "Tẩy Trắng Răng Công Nghệ Laser",
        img: "https://i.postimg.cc/Ss7jZC4R/close-up-perfect-smile.jpg",
        desc: `
            <p>Công nghệ tẩy trắng răng Laser Whitening là giải pháp tiên tiến nhất hiện nay, giúp đánh bật các vết ố vàng lâu năm chỉ sau 60 phút.</p>
            <br>
            <strong>Ưu điểm:</strong>
            <ul>
                <li> Không gây ê buốt, an toàn tuyệt đối cho men răng.</li>
                <li> Hiệu quả trắng sáng duy trì từ 3 - 5 năm.</li>
                <li> Bảo vệ nướu lợi tối đa.</li>
            </ul>
        `
    },
    "braces": {
        title: "Niềng Răng Thẩm Mỹ",
        img: "https://i.postimg.cc/NFFY1HjH/smiling-young-woman-with-braces-teeth.jpg",
        desc: `
            <p>Chúng tôi cung cấp đa dạng các giải pháp chỉnh nha phù hợp với nhu cầu và tài chính của từng khách hàng.</p>
            <br>
            <strong>Các phương pháp:</strong>
            <ul>
                <li> Mắc cài kim loại: Chi phí thấp, hiệu quả cao.</li>
                <li> Mắc cài sứ: Thẩm mỹ hơn, ít lộ mắc cài.</li>
                <li> Invisalign: Khay niềng trong suốt, tháo lắp dễ dàng.</li>
            </ul>
        `
    },
    "implant": {
        title: "Cấy Ghép Implant Thụy Sĩ",
        img: "https://i.postimg.cc/859DmCJB/15064.jpg",
        desc: `
            <p>Giải pháp phục hình răng đã mất hoàn hảo nhất, cấu trúc gồm trụ Titanium tích hợp xương và mão sứ bên trên.</p>
            <br>
            <strong>Quy trình:</strong>
            <p>Khám và chụp CT Scan -> Cấy trụ Implant -> Lành thương (3-6 tháng) -> Phục hình răng sứ.</p>
        `
    },
    "kids": {
        title: "Nha Khoa Trẻ Em",
        img: "https://i.postimg.cc/rFL2V3SW/kid-portrait-holding-paper-icon.jpg",
        desc: `
            <p>Dịch vụ chuyên biệt dành cho bé với phòng khám được trang trí vui nhộn, giúp bé không còn sợ bác sĩ.</p>
            <p>Bao gồm: Nhổ răng sữa không đau, trám răng Sealant ngừa sâu răng, bôi vecni flour.</p>
        `
    },
    "veneer": {
        title: "Bọc Răng Sứ Thẩm Mỹ",
        img: "https://i.postimg.cc/HksKjgnq/dentist-examining-female-patient-with-teeth-shades.jpg",
        desc: `
            <p>Khắc phục tình trạng răng nhiễm màu, sứt mẻ hoặc thưa nhẹ. Răng sứ chính hãng nhập khẩu từ Đức, Mỹ.</p>
            <p>Bảo hành chính hãng 10-15 năm. Màu sắc tự nhiên như răng thật.</p>
        `
    },
    "extraction": {
        title: "Nhổ Răng Khôn (Tiểu Phẫu)",
        img: "https://i.postimg.cc/9FX1YB2N/dentist-treats-childs-tooth-using-rubber-dam-installing-filling-tooth.jpg",
        desc: `
            <p>Sử dụng máy siêu âm Piezotome giúp tách nướu nhẹ nhàng, nhổ răng nhanh chóng, hạn chế tối đa sưng đau sau hậu phẫu.</p>
            <p>Quy trình vô trùng tuyệt đối, an toàn cho sức khỏe.</p>
        `
    },
    "endodontics": {
        title: "Nội Nha (Điều Trị Tủy Răng)",
        img: "https://i.postimg.cc/YqVn2Wcm/model-tooth-dentist-doctor-shows-patient-tooth-reception-dentist-s-office.jpg", // Bạn cần cung cấp ảnh này
        desc: `
            <p>Điều trị và bảo tồn răng bị tổn thương tủy, viêm nhiễm hoặc sâu răng nghiêm trọng, giúp bạn giữ lại răng thật.</p>
            <br>
            <strong>Công nghệ:</strong>
            <ul>
                <li> Sử dụng kính hiển vi phẫu thuật giúp loại bỏ tủy viêm chính xác.</li>
                <li> Quy trình không đau, hiệu quả dứt điểm chỉ sau 1-2 lần hẹn.</li>
                <li> Khử trùng tuyệt đối ống tủy.</li>
            </ul>
              `
    },         
    "general_dentistry": {
        title: "Nha Khoa Tổng Quát và Dự Phòng",
        img: "https://i.postimg.cc/65Lrg4W8/R.jpg", 
        desc: `
            <p>Dịch vụ chăm sóc răng miệng định kỳ toàn diện, giúp phát hiện và điều trị sớm các vấn đề răng miệng, duy trì nụ cười khỏe mạnh.</p>
            <br>
            <strong>Bao gồm các dịch vụ:</strong>
            <ul>
                <li> Cạo vôi răng (lấy cao răng): Loại bỏ mảng bám và vi khuẩn.</li>
                <li> Trám phòng ngừa sâu răng (Sealant): Bảo vệ răng khỏi sự tấn công của vi khuẩn.</li>
                <li> Kiểm tra tổng quát: Đánh giá sức khỏe răng, nướu và mô mềm.</li>
                <li> Chụp X-quang kỹ thuật số: Phát hiện các vấn đề ẩn bên dưới.</li>
            </ul>
        `
    },
    "removable_dentures": {
        title: "Răng Giả Tháo Lắp",
        img: "https://i.postimg.cc/qMfw9d23/Removable-Dentures.jpg", 
        desc: `
            <p>Giải pháp phục hình răng mất truyền thống, nhanh chóng và tiết kiệm chi phí, giúp phục hồi chức năng ăn nhai và thẩm mỹ cơ bản.</p>
            <br>
            <strong>Các loại hàm giả tháo lắp:</strong>
            <ul>
                <li> Hàm giả tháo lắp nền nhựa: Phù hợp với ngân sách thấp.</li>
                <li> Hàm khung kim loại: Độ bền cao và ổn định hơn.</li>
                <li> Hàm dẻo (Valplast): Tạo cảm giác thoải mái và thẩm mỹ hơn.</li>
                <li> Hàm tháo lắp trên Implant: Ổn định tối đa.</li>
            </ul>
        `
    },
    "filling": {
        title: "Trám Răng Thẩm Mỹ (Aesthetic Filling)",
        img: "https://i.postimg.cc/jSPXs34S/dentist-hands-working-young-woman-patient-with-dental-tools.jpg", 
        desc: `
            <p>Phục hồi răng bị sứt mẻ, mòn hoặc sâu răng bằng vật liệu Composite có màu sắc giống hệt răng thật, đảm bảo tính thẩm mỹ cao.</p>
            <br>
            <strong>Ưu điểm:</strong>
            <ul>
                <li> Nhanh chóng, hoàn thành chỉ trong một lần khám.</li>
                <li> Chi phí hợp lý, phù hợp cho mọi đối tượng.</li>
                <li> Vật liệu composite chất lượng cao, bền chắc.</li>
            </ul>
        `
    },
    "veneers": {
        title: "Mặt Dán Sứ Veneer",
        img: "https://i.postimg.cc/vBN975tt/dentist-examining-female-patient-with-tools.jpg", 
        desc: `
            <p>Sử dụng mặt dán sứ siêu mỏng (0.2 - 0.5mm) để cải thiện hình thể, màu sắc và kẽ hở giữa các răng mà không cần mài răng nhiều.</p>
            <br>
            <strong>Đặc điểm:</strong>
            <ul>
                <li> Bảo tồn tối đa răng thật (mài răng rất ít hoặc không mài).</li>
                <li> Thiết kế nụ cười riêng biệt, màu sắc tự nhiên, trong suốt.</li>
                <li> Độ bền cao, chịu lực tốt.</li>
            </ul>
        `
    },
    "Gingivectomy": {
        title: "Điều Trị Cười Hở Lợi",
        img: "https://i.postimg.cc/Rh1SCBhX/assistant-dentist-patient-clinic.jpg", 
        desc: `
            <p>Khắc phục tình trạng nướu bao phủ quá nhiều thân răng, giúp cân đối tỷ lệ giữa răng và nướu, tạo nên nụ cười chuẩn tỷ lệ vàng mà không gây đau đớn.</p>
            <br>
            <strong>Đặc điểm:</strong>
            <ul>
                <li> Sử dụng công nghệ Laser thế hệ mới cắt nướu chính xác, không gây chảy máu.</li>
                <li> Thiết kế nụ cười riêng biệt, màu sắc tự nhiên, trong suốt.</li>
                <li> Độ bền cao, chịu lực tốt.</li>
            </ul>
        `
    }
    
};

document.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById('serviceModal');
    const closeBtn = document.querySelector('.close-btn');
    const modalTitle = document.getElementById('modalTitle');
    const modalImg = document.getElementById('modalImg');
    const modalDesc = document.getElementById('modalDesc');
    const serviceCards = document.querySelectorAll('.service-card');

    // 1. MỞ MODAL
    serviceCards.forEach(card => {
        card.addEventListener('click', function() {
            // Lấy ID từ data-attribute
            const id = this.getAttribute('data-id');
            const data = serviceData[id];

            if (data) {
                // Điền dữ liệu vào modal
                modalTitle.innerText = data.title;
                modalImg.src = data.img;
                modalDesc.innerHTML = data.desc;

                // Hiện modal
                modal.classList.add('show');
            }
        });
    });

    // 2. ĐÓNG MODAL (Nút X)
    closeBtn.addEventListener('click', closeModal);

    // 3. ĐÓNG MODAL (Click ra ngoài)
    window.addEventListener('click', function(e) {
        if (e.target == modal) {
            closeModal();
        }
    });

    // 4. ĐÓNG MODAL (Phím ESC)
    document.addEventListener('keydown', function(e) {
        if (e.key === "Escape" && modal.classList.contains('show')) {
            closeModal();
        }
    });

    function closeModal() {
        modal.classList.remove('show');
    }
});
// 5. MỞ MODAL TỪ URL HASH (Ví dụ: services.html#whitening)
    function openModalFromHash() {
        const hash = window.location.hash.substring(1); // Lấy phần hash, bỏ dấu #
        
        if (hash && serviceData[hash]) {
            const data = serviceData[hash];
            
            modalTitle.innerText = data.title;
            modalImg.src = data.img;
            modalDesc.innerHTML = data.desc;
            
            modal.classList.add('show');
            // Xóa hash khỏi URL sau khi mở modal để tránh mở lại nếu reload
            history.replaceState(null, null, ' '); 
        }
    }

    // Chạy hàm kiểm tra khi tải trang
    openModalFromHash();