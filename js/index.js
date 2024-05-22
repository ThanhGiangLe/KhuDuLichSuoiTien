// Xử lý sự kiện nút bấm menu
var MobileMenu = document.getElementById("mobile-menu");
var subNavigationIconList = document.querySelector(".sub-navigation-icon_list");
MobileMenu.onclick = function () {
  subNavigationIconList.classList.toggle("open");
};

// Xử lý sự kiện nút bấm Hình ảnh và Video
var btnImage = document.getElementById("btn-imageAndVideo_image");
var btnVideo = document.getElementById("btn-imageAndVideo_video");
var image = document.querySelector(".imageAndVideo_image");
var video = document.querySelector(".imageAndVideo_video");

btnVideo.onclick = function () {
  video.classList.add("show");
  video.classList.remove("hide");
  image.classList.add("hide");
  image.classList.remove("show");
};
btnImage.onclick = function () {
  image.classList.add("show");
  image.classList.remove("hide");
  video.classList.add("hide");
  video.classList.remove("show");
};

// Xử lý Header và Navigation

// Modal
const buyBtns = document.querySelectorAll(".js-buy-ticket");
const modal = document.querySelector(".js-modal");
const modalClose = document.querySelector(".js-modal-close");
const modelContain = document.querySelector(".js-model-container");

// Viết hàm hiển thị Cửa sổ mua vé
function showBuyTickets() {
  modal.classList.add("open");
}

// Viết hàm ẩn đi cửa sổ mua vé
function hideBuyTickets() {
  modal.classList.remove("open");
}

// Dùng vòng lặp để lặp qua từng thẻ Tickets sau đó lắng nghe sự
// kiện Click vào từng Ticket để gọi lại hàm hiển thị Cửa sổ mua vé
for (const bytBtn of buyBtns) {
  bytBtn.addEventListener("click", showBuyTickets);
}

// Lắng nghe sự kiện Click vào nút Close để gọi lại hàm
// ẩn đi Cửa sổ mua vé
modalClose.addEventListener("click", hideBuyTickets);

// Lắng nghe sự kiện Click vào cả khoản không của 'thẻ Modal'
// để gọi lại hàm ẩn đi Cửa sổ mua vé
modal.addEventListener("click", hideBuyTickets);

// Ngăn chặn sự kiện nổi bọt ra ngoài thẻ cha
modelContain.addEventListener("click", function (e) {
  e.stopPropagation();
});

// Kiểm tra mua vé
// document.getElementById("buy-tickets").addEventListener("submit", function (e) {
//   console.log("thành công");
//   e.preventDefault();
// });

var buy_tickets = document.getElementById("buy-tickets");
buy_tickets.onclick = function (e) {
  let soVe = document.getElementById("tickets-quantity").value * 1;
  let lienHe = document.getElementById("tickets-phone").value * 1;
  if (soVe == 0) {
    document.getElementById("check-tickets-quantity").innerHTML =
      "***Vui lòng nhập số vé!!!";
  } else if (lienHe == 0) {
    document.getElementById("check-tickets-phone").innerHTML =
      "***Vui lòng nhập số điện thoại!!!";
  }
};
