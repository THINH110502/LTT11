// document.addEventListener("DOMContentLoaded", function() {
//     const form = document.getElementById("form-signup");
//     form.addEventListener("submit", function(event) {
//         event.preventDefault();
//         const username = document.querySelector(".form-signup").value;
//         const email = document.querySelector(".form-email").value;
//         const password = document.querySelector(".form-password").value;
//         if (username === "") {
//             alert("Vui lòng nhập tên đăng nhập");
//             return;
//         }
//         if (email === "") {
//             alert("Vui lòng nhập email");
//             return;
//         }
//         if (!validateEmail(email)) {
//             alert("Email không hợp lệ");
//             return;
//         }
//         if (password === "") {
//             alert("Vui lòng nhập mật khẩu");
//             return;
//         }
//         alert("Đăng ký thành công!");
//         form.reset();
//     });

//     function validateEmail(email) {
//         const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//         return re.test(String(email).toLowerCase());
//     }
// });


