$(document).ready(function() {
    /* ========================================== */
    /* 1. LOGIC CHO BANNER SLIDESHOW (jQuery)     */
    /* ========================================== */
    
    // Lấy danh sách các slide
    const slides = $('.slide');
    const totalSlides = slides.length;
    let currentSlide = 0;
    let autoSlideInterval;

    // Kiểm tra xem trang có slider không (để tránh lỗi nếu dùng file này cho trang khác)
    if (totalSlides > 0) {
        
function showSlide(index) {
    slides.removeClass('active');
    slides.eq(index).addClass('active');
    currentSlide = index;
}


        // Hàm bắt đầu chạy tự động
        function startAutoSlide() {
            // Xóa interval cũ nếu có để tránh chạy chồng chéo
            if (autoSlideInterval) clearInterval(autoSlideInterval);
            
            autoSlideInterval = setInterval(function() {
                // Tăng index, nếu hết thì quay về 0
                let nextSlide = (currentSlide + 1) % totalSlides;
                showSlide(nextSlide);
            }, 6000); // 4000ms = 8 giây chuyển 1 lần
        }

        // --- XỬ LÝ SỰ KIỆN CLICK NÚT ---

        // 1. Nút Next (Tiếp theo)
        $('.next-btn').click(function() {
            clearInterval(autoSlideInterval); // Tạm dừng tự động
            let nextSlide = (currentSlide + 1) % totalSlides;
            showSlide(nextSlide);
            startAutoSlide(); // Khởi động lại tự động
        });

        // 2. Nút Prev (Lùi lại)
        $('.prev-btn').click(function() {
            clearInterval(autoSlideInterval); // Tạm dừng tự động
            // Công thức lùi vòng tròn (nếu về âm thì nhảy xuống cuối)
            let prevSlide = (currentSlide - 1 + totalSlides) % totalSlides;
            showSlide(prevSlide);
            startAutoSlide(); // Khởi động lại tự động
        });

        // Khởi tạo trạng thái ban đầu
slides.removeClass('active');
slides.eq(0).addClass('active');

        startAutoSlide();
    }

    /* ========================================== */
    /* 2. HIỆU ỨNG CUỘN TRANG (SCROLL ANIMATION)  */
    /* ========================================== */
    $(window).scroll(function() {
        // Tính vị trí cuộn hiện tại + chiều cao cửa sổ - 1 khoảng offset
        var scrollPos = $(window).scrollTop() + $(window).height() - 150; 
        
        // Duyệt qua các section cần hiệu ứng
        $('.section-doctors, .section-services-highlight, .section-promo').each(function() {
            // Nếu vị trí cuộn > vị trí của phần tử -> Thêm class hiện ra
            if (scrollPos > $(this).offset().top) {
                $(this).addClass('is-visible'); 
            }
        });
    });
});
// Dữ liệu chi tiết cho từng bác sĩ (Đã được cập nhật dữ liệu Nha khoa cho BS Thuận)
const doctorsData = {
    'thuan': {
        name: 'BS.CKII. Trần Văn Thuận',
        hospital: 'Phòng khám Nha khoa Dental Care',
        degree: 'Nha khoa Tổng quát - Trưởng phòng Chuyên môn',
        image: 'https://i.postimg.cc/tJmNSRXJ/asian-doctor-smiling-isolated-white-127345-48.jpg',
        biography: 'Bác sĩ Trần Văn Thuận có hơn 20 năm kinh nghiệm trong khám, chẩn đoán và điều trị các bệnh lý Răng Hàm Mặt. Hiện bác sĩ đang đảm nhiệm vai trò Trưởng phòng Chuyên môn, kiêm Bác sĩ chính tại Phòng khám Nha khoa Dental Care. Ông tốt nghiệp Bác sĩ Chuyên khoa II về Răng Hàm Mặt Tổng quát năm 2019.',
        workHistory: [
            '2017 – Hiện tại: Trưởng phòng Chuyên môn, Bác sĩ chính, Phòng khám Nha khoa Tâm Đức.',
            '2010 – 2017: Bác sĩ điều trị tại Khoa Răng Tổng quát, Bệnh viện Răng Hàm Mặt TP.HCM.',
        ],
        training: [
            '03/2019: Tốt nghiệp Bác sĩ Chuyên khoa II – Răng Hàm Mặt Tổng quát.',
            '2013: Chứng chỉ đào tạo chuyên sâu về Nha khoa Thẩm mỹ và Veneer sứ.',
            '2013: Khóa học Quản lý Đau và Gây mê trong Nha khoa.',
        ]
    },
    'nghia': {
        name: 'ThS.BS. Trần Minh Nghĩa',
        hospital: 'Phòng khám Nha khoa Dental Care',
        degree: 'Phó Giám đốc Chuyên môn',
        image: 'https://i.postimg.cc/qRvKPfDQ/depositphotos-28097505-stock-photo-happy-senior-chief-doctor-offering.jpg',
        biography: 'Thạc sĩ Bác sĩ Trần Minh Nghĩa là một trong những chuyên gia hàng đầu về chẩn đoán hình ảnh, với hơn 15 năm kinh nghiệm công tác tại các bệnh viện lớn tại TP.HCM.',
        workHistory: [
            '2015 – Hiện tại: Phó Giám đốc Chuyên môn, phụ trách khối Chẩn đoán hình ảnh.',
            '2008 – 2015: Trưởng phòng Siêu âm và Điện quang, Bệnh viện Đại học Y Dược.',
        ],
        training: [
            '2008: Tốt nghiệp Thạc sĩ Chuyên ngành Chẩn đoán hình ảnh.',
            '2005: Chứng chỉ đào tạo chuyên sâu về MRI và CT Scan.',
        ]
    },

    'lan': {
        name: 'BS.CKI. Nội trú Mai Thị Hương Lan',
        hospital: 'Phòng khám Nha khoa Dental Care',
        degree: 'Trưởng khoa Tổng quát & Trám răng',
        image: 'https://i.postimg.cc/kXy2mJzj/asian-female-doctor-physician-medical-uniform-with-stethoscope-cross-arms-chest-smiling-looking-like.jpg',
        biography: 'Bác sĩ Lan là bác sĩ chuyên khoa I, chuyên sâu về Nha khoa Tổng quát và Răng thẩm mỹ. Với kinh nghiệm nhiều năm trong ngành, bác sĩ đã thực hiện thành công hàng ngàn ca điều trị trám răng, nhổ răng khôn và các thủ thuật nội nha phức tạp.',
        workHistory: [
            '2018 – Hiện tại: Trưởng khoa Tổng quát, Phòng khám Nha khoa Dental Care.',
            '2015 – 2018: Bác sĩ tại Bệnh viện Răng Hàm Mặt TP.HCM.',
        ],
        training: [
            '2018: Tốt nghiệp Bác sĩ Chuyên khoa I – Nha khoa Tổng quát.',
            '2016: Chứng chỉ Veneer sứ và Phục hình thẩm mỹ.',
        ]
    },
    'ngan': {
        name: 'BS.CKI. Lã Thị Thanh Ngân',
        hospital: 'Phòng khám Nha khoa Dental Care',
        degree: 'Trưởng khoa Răng trẻ em & Nha khoa Dự phòng',
        image: 'https://i.postimg.cc/XYG6gxfq/pexels-shkrabaanthony-6749777.png',
        biography: 'Bác sĩ Ngân là chuyên gia hàng đầu về nha khoa trẻ em. Với sự tận tâm và nhẹ nhàng, bác sĩ giúp các bệnh nhân nhí vượt qua nỗi sợ hãi khi đến nha sĩ, đồng thời chuyên sâu về chỉnh nha phòng ngừa và điều trị các bệnh lý răng miệng cho trẻ.',
        workHistory: [
            '2019 – Hiện tại: Trưởng khoa Răng trẻ em, Phòng khám Nha khoa Dental Care.',
            '2014 – 2019: Bác sĩ điều trị tại Khoa Nha khoa Cộng đồng.',
        ],
        training: [
            '2019: Tốt nghiệp Bác sĩ Chuyên khoa I – Răng Hàm Mặt Trẻ Em.',
            '2015: Đào tạo chuyên sâu về Chỉnh nha Tăng trưởng và Dự phòng.',
        ]
    }
};

// Sử dụng jQuery để chờ tài liệu được tải xong
$(document).ready(function() {

    // Lấy các phần tử trong Modal bằng jQuery (dùng selector ID)
    const $doctorModal = $('#doctorModal');
    const $modalDoctorName = $('#modalDoctorName');
    const $modalDoctorHospital = $('#modalDoctorHospital');
    const $modalDoctorDegree = $('#modalDoctorDegree');
    const $modalDoctorImage = $('#modalDoctorImage');
    const $modalDoctorBiography = $('#modalDoctorBiography');
    const $modalWorkHistory = $('#modalWorkHistory');
    const $modalTraining = $('#modalTraining');


    function renderList(ulElement, dataArray) {
        ulElement.empty(); // Xóa nội dung cũ bằng jQuery
        if (dataArray) {
            dataArray.forEach(item => {
                const li = $('<li>').text(item); // Tạo thẻ li bằng jQuery
                ulElement.append(li); // Thêm vào ul
            });
        }
    }

    // Hàm mở Modal Bác sĩ
    // *Lưu ý: Hàm này vẫn giữ nguyên tên để tương thích với onclick="openDoctorModal('id')" trong HTML
    window.openDoctorModal = function(doctorId) {
        const doctor = doctorsData[doctorId];
        
        if (doctor) {
            // 1. Cập nhật thông tin cơ bản bằng .text() và .attr()
            $modalDoctorName.text(doctor.name);
            $modalDoctorHospital.text(doctor.hospital);
            $modalDoctorDegree.text(doctor.degree);
            $modalDoctorImage.attr('src', doctor.image); // Cập nhật thuộc tính src
            $modalDoctorBiography.text(doctor.biography);

            // 2. Cập nhật danh sách
            renderList($modalWorkHistory, doctor.workHistory);
            renderList($modalTraining, doctor.training);
            
            // 3. Hiển thị Modal
            $doctorModal.addClass('show'); // Thêm class 'show'
            $('body').css('overflow', 'hidden'); // Ngăn cuộn trang chính
        }
    }

    // Hàm đóng Modal Bác sĩ
    // *Lưu ý: Hàm này vẫn giữ nguyên tên để tương thích với onclick="closeDoctorModal()" trong HTML
    window.closeDoctorModal = function() {
        $doctorModal.removeClass('show'); // Xóa class 'show'
        $('body').css('overflow', 'auto'); 
    }

    // Đóng Modal khi click vào nút đóng (đã được xử lý bằng onclick trong HTML)
    
    // Đóng Modal khi click ra ngoài (trên overlay) - Sử dụng event delegation
    $doctorModal.on('click', function(event) {
        // Kiểm tra xem phần tử được click có phải là chính modal overlay không
        if (event.target === this) {
            closeDoctorModal();
        }
    });

});
