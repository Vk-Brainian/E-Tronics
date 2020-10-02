// window.submit = (e) => {
//     e.preventDefault()
//     const name = $('name=name').val();
//     const email = $('name=email').val();
//     const subject = $('name=subject').val();
//     const number = $('name=number').val();
//     const message = $('name=message').val();
//     window.open().location = `mailto:e-tronics@gmail.com/?from=${email}&subject=${subject}&message=${name} \n ${email} \n ${number} \n ${message}`;
// }

document.querySelector("form").addEventListener("submit", (e) => {
    e.preventDefault();
    const name = document.querySelector("[name=name]").value;
    const email = document.querySelector("[name=email]").value;
    const subject = document.querySelector("[name=subject]").value;
    const number = document.querySelector("[name=number]").value;
    const message = document.querySelector("[name=message]").value;
    window.open().location = `mailto:e-tronics@gmail.com/?from=${email}&subject=${subject}&message=${name} \n ${email} \n ${number} \n ${message}`;
});