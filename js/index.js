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
const buyBtn = document.querySelector(".js-buy-ticket");
const modal = document.querySelector(".js-modal");
const modalClose = document.querySelector(".js-modal-close");
const modelContain = document.querySelector(".js-model-container");

function showBuyTickets() {
  modal.classList.add("show");
}
function hideBuyTickets() {
  modal.classList.remove("show");
}

buyBtn.addEventListener("click", showBuyTickets);

modalClose.addEventListener("click", hideBuyTickets);

modal.addEventListener("click", hideBuyTickets);

// Ngăn chặn sự kiện nổi bọt ra ngoài thẻ cha
modelContain.addEventListener("click", function (e) {
  e.stopPropagation();
});

// Kiểm tra mua vé
// var buy_tickets = document.getElementById("buy-tickets");
// buy_tickets.onclick = function (e) {
//   let soVe = document.getElementById("tickets-quantity").value * 1;
//   let lienHe = document.getElementById("tickets-phone").value * 1;
//   if (soVe == 0) {
//     document.getElementById("check-tickets-quantity").innerHTML =
//       "***Vui lòng nhập số vé!!!";
//   } else if (lienHe == 0) {
//     document.getElementById("check-tickets-phone").innerHTML =
//       "***Vui lòng nhập số điện thoại!!!";
//   }
// };

//Mail
function sendMail() {
  var params = {
    name: document.getElementById("tickets-name").value,
    email: document.getElementById("tickets-mail").value,
    quantity: document.getElementById("tickets-quantity").value,
    phone: document.getElementById("tickets-phone").value,
  };

  const serviceID = "service_erzczjb";
  const templateID = "template_9yvz7di";

  emailjs
    .send(serviceID, templateID, params)
    .then((res) => {
      document.getElementById("tickets-name").value = "";
      document.getElementById("tickets-mail").value = "";
      document.getElementById("tickets-quantity").value = "";
      document.getElementById("tickets-phone").value = "";
      console.log(res);
      alert("Your message sent successfully!!");
    })
    .catch((err) => console.log(err));
}
