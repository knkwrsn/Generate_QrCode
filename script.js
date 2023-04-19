const wrapper = document.querySelector(".wrapper"),
generateBtn = wrapper.querySelector(".form button"),
qrImg = wrapper.querySelector(".qr-code img"),
qrInput = wrapper.querySelector(".form input");

generateBtn.addEventListener("click", () => {
    let qrValue = qrInput.value;
    if(!qrValue) return;
    generateBtn.innerText = "Genating Qr Code... "
    qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${qrValue};`
    qrImg.addEventListener("load", () => {
    wrapper.classList.add("active");
    generateBtn.innerText = "Generate QR Code";
    });
});

qrInput.addEventListener("keyup",() => {
    if(!qrInput.value){
        wrapper.classList.remove("active");
    }
});