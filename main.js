fetch('https://randomuser.me/api/')
  .then(response => response.json())
  .then(data => {
    let datos = document.getElementById('nombre');
    datos.innerHTML = `${data.results[0].name.first} ${data.results[0].name.last}`;

    let direction = document.getElementById('nacimiento');
    direction.innerHTML = `${data.results[0].dob.date}`;

    let born = document.getElementById('direccion');
    born.innerHTML = `${data.results[0].location.street.number} ${data.results[0].location.street.name}, ${data.results[0].location.state}, ${data.results[0].location.country}`;

    let phone = document.getElementById('telefono');
    phone.innerHTML = `${data.results[0].phone}, ${data.results[0].cell}`;

    let email = document.getElementById('correo');
    email.innerHTML = `${data.results[0].email}`;

    let myimage = document.getElementById('myimage');
    myimage.src = data.results[0].picture.large
  })
  .catch(error => console.error(error));



const mostrarBtn = document.querySelectorAll('.mostrar-btn');

mostrarBtn.forEach(function (btn) {
  btn.addEventListener('click', function () {
    const list = this.parentElement.nextElementSibling.nextElementSibling;
    list.classList.toggle('visible');
    this.innerHTML = list.classList.contains('visible') ? '<i class="fa-solid fa-angle-up"></i>' : '<i class="fa-solid fa-angle-down"></i>';
  });
});


function scrollArriba() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}