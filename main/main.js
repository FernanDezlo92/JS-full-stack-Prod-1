// -------- Obtencion del boton y del contenedor de las nuevas tarjetas --------
const botonEnter = document.querySelector("#nuevaCard");
const contenedor = document.getElementById("contenedor");

// -------- El boton que agrega las nuevas tarjetas --------
function nuevaTarjeta() {
  const elemento = `
                  <div class="col-12 col-md-6 col-lg-4" >
                    <div class="card" style="width: 18rem;">
                      <img class="card-img-top" src="./img/img.png" alt="Card image cap">
                      <div class="card-body">
                        <h5 class="card-title">Card title</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's
                          content.</p>
                        <a href="#" class="btn btn-primary">Drop</a>
                        <a href="#">
                          <button id="myBtn" class="btn btn-primary md")>More</button>
                        </a>
                        <div id="myModal" class="modal">
                          <div class="modal-content">
                            <span class="close">&times;</span>
                            <form id="myForm">
                                <input type="number" placeholder="Enter week" id="weekInput">
                                <input type="number" placeholder="Enter years" id="yearInput">
                                <div>
                                <textarea type="text"placeholder="Description" rows="3" id="descInput"></textarea>
                                </div>
                                <input type="color" placeholder="Enter your color" id="colorInput">
                                <button type="submit" class="btn btn-primary">Add</button>
                            </form>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                    `;
  contenedor.insertAdjacentHTML("beforeend", elemento); //Inserta el elemento en la lista antes del final en el html

  // -------- Obtencion del modal --------
  let modal = document.getElementById("myModal");
  console.log(modal);

  // //  -------- Obtencion del boton que abrira el modal --------
  let btn = document.querySelectorAll(".md");

  // //  -------- Obtencion del span--------
  let span = document.getElementsByClassName("close")[0];

  // //  -------- Boton para abrir el modal --------
  btn.forEach((boton) => {
    boton.addEventListener("click", () => {
      modal.style.display = "block";
    });
  });

  //  -------- Cerrar con la X --------
  span.onclick = function () {
    modal.style.display = "none";
  };

  //  -------- Si haces click fuera del modal lo cierras tambien --------
  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  };
}

botonEnter.addEventListener("click", () => {
  nuevaTarjeta();
});
