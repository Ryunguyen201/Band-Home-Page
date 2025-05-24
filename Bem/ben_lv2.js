function toast({
    title = '', 
    message = '', 
    type = '', 
    duration=3000,
}) {
    // Lấy tên ID thẻ cha
    const main = document.getElementById('toast')
    // Kiếm tra nế có
    if (main) {
        // Tạo thẻ div
        const toast = document.createElement('div');

        //Auto remove toast. Sau một khoản duration (1s) thì gỡ thông báo (bên phải) đi
        const autoRemoveID = setTimeout(function() {
            main.removeChild(toast);
        }, duration + 1000);

        //Remove toast when clicked. Bắt sự kiện nút close đóng thông báo
        toast.onclick = function(e) {
            // Tìm class của chính nó xem nó có class này hay ko, nếu ko có nữa thì tìm ra thẻ cha
            if (e.target.closest('.toast__close')) {
                main.removeChild(toast);
                // Khi bấm click thì clear timeout
                clearTimeout(autoRemove)
            }
        }
        // thay đổi icon
        const icons = {
            seccess: 'fa-sharp fa-regular fa-circle-check',
            info: 'fa-sharp fa-solid fa-circle-info',
            warning: 'fa-sharp fa-solid fa-circle-exclamation',
            erorr: 'fa-sharp fa-solid fa-circle-exclamation',
        };
        // Lấy icon tương tương
        const icon = icons[type];
        // Tạo hàm delay toFix: lấy 2 số dư
        const delay = (duration / 1000).toFixed(2);
        // Tạo class toast toast--sucess
        toast.classList.add('toast', `toast--${type}`);
        // Animation
        toast.style.animation =`slineInLeft ease .3s, fadeOut linear 1s ${delay}s forwards`;
        // Tạo thẻ html
        toast.innerHTML = `
        <div class="toast__icon">
            <i class="${icon}"></i>
        </div>
        <div class="toast__body">
            <h3 class="toast__title">${title}</h3>
            <p class="toast__msg">${message}</p>
        </div>
        <div class="toast__close">
            <i class="fa-sharp fa-regular fa-circle-xmark"></i>
        </div>
        `;
        main.appendChild(toast);               
    }
}      