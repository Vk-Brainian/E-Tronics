// $(
//     $('form').submit((e) => {
//         e.preventDefault();
//         const name = $("name='name'").val();
//         const email = $("name='email'").val();
//         const subject = $("name='subject'").val();
//         const number = $("name='number'").val();
//         const message = $("name='message'").val();

//         window.location.href = `mailto:e-tronics@gmail.com/?from=${email}&subject=${subject}&message=${name} \n ${email} \n ${number} \n ${message}`;
//     })
// );

window.submit = (e) => {
    e.preventDefault();
    const name = $('name=name').val();
    const email = $('name=email').val();
    const subject = $('name=subject').val();
    const number = $('name=number').val();
    const message = $('name=message').val();
    window.location.href = `mailto:e-tronics@gmail.com/?from=${email}&subject=${subject}&message=${name} \n ${email} \n ${number} \n ${message}`;
}