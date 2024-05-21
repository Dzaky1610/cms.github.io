


// FItur SideBar

function showSidebar() {
    const sidebar = document.querySelector(".sidebar");
    const burger = document.querySelector(".menu-button");
    const x = document.querySelector(".btn-x");
    sidebar.style.display = "flex";
    burger.classList.add("d-none");
    x.addEventListener("click", () => burger.classList.remove("d-none"));
  }
  function hideSidebar() {
    const sidebar = document.querySelector(".sidebar");
    sidebar.style.display = "none";
  }


//   Fitur Marquee
function startMarquee() {
    let marquee = document.getElementById("marqueeText"); // Elemen teks yang akan berjalan
    let containerWidth =
      document.getElementById("marqueeContainer").offsetWidth; // Lebar container
    let textWidth = marquee.offsetWidth; // Lebar teks
    let startPos = containerWidth; // Posisi awal teks (kanan container)
    let endPos = -textWidth; // Posisi akhir teks (ketika teks sudah tidak terlihat)
    // Fungsi untuk menggerakkan teks
    function marqueeMove() {
      if (startPos <= endPos) {
        // Jika teks sudah tidak terlihat
        startPos = containerWidth; // Kembalikan teks ke posisi awal
      } else {
        startPos--; // Bergerak ke kiri
      }
      marquee.style.left = startPos + "px"; // Update posisi teks
    }
    setInterval(marqueeMove, 20); // Atur interval pemanggilan fungsi marqueeMove
  }
  startMarquee(); // Memulai animasi marquee

//   Fitur Slick Slider
$('.slider').slick({
  centerMode: true,
  dots: true,
  autoplay: true,
  centerPadding: '60px',
  slidesToShow: 3,
  responsive: [{
    breakpoint: 768,
    settings: {
      arrows: false,
      centerMode: true,
      centerPadding: '40px',
      Infinity: true,
      slidesToShow: 1
    },
  }]
});




$('.slider-gallery').slick({
  centerMode: true,
  dots: true,
  autoplay: true,
  centerPadding: '60px',
  slidesToShow: 3,
  responsive: [{
    breakpoint: 768,
    settings: {
      arrows: false,
      centerMode: true,
      centerPadding: '40px',
      Infinity: true,
      slidesToShow: 1
    },
  }]
});


$(document).ready(function() {
  $('#tahun-ajaran').select2({ placeholder: "Select a state..." });
  $('#kelas').select2({ placeholder: "Select a state..." });
  $('#peminatan').select2({ placeholder: "Select a state..." });
  $('#semester').select2({ placeholder: "Select a state..." });
  $('#rombongan-belajar').select2({ placeholder: "Select a state..." });
  $('#tampil-data').select2({ placeholder: "Select a state..." });
  $('#nama-ujian').select2({ placeholder: "Select a state..." });
});