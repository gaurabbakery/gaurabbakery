let cart = JSON.parse(localStorage.getItem("cart")) || [];

function loadProducts(){
  const box = document.getElementById("productGrid");

  db.collection("products").onSnapshot(snapshot=>{
    box.innerHTML = "";

    snapshot.forEach(doc=>{
      let p = doc.data();

      box.innerHTML += `
        <div class="card">

          <div class="img-wrap">
            <img src="${p.img}">
          </div>

          <div class="content">
            <h2>${p.name}</h2>
            <p>${p.desc}</p>
            <div class="price">${p.price}</div>

            <div class="btn-row">
              <button class="order" onclick="buy('${p.name}','${p.price}')">Buy</button>
              <button class="cart" onclick="add('${p.name}','${p.price}','${p.img}')">Cart</button>
            </div>
          </div>

        </div>
      `;
    });
  });
}

function add(name,price,img){
  cart.push({name,price,img});
  localStorage.setItem("cart",JSON.stringify(cart));
  updateCart();
}

function updateCart(){
  document.getElementById("cartCount").innerText = cart.length;
}

function buy(name,price){
  let phone = "9779860228877";
  let msg = `Order:\n${name}\n${price}`;
  window.open(`https://wa.me/${phone}?text=${encodeURIComponent(msg)}`);
}

function goCart(){
  window.location.href="cart.html";
}

function searchProduct(){
  let val = document.getElementById("search").value.toLowerCase();

  db.collection("products").get().then(snap=>{
    const box = document.getElementById("productGrid");
    box.innerHTML = "";

    snap.forEach(doc=>{
      let p = doc.data();

      if(p.name.toLowerCase().includes(val)){
        box.innerHTML += `
          <div class="card">
            <h2>${p.name}</h2>
            <p>${p.price}</p>
          </div>
        `;
      }
    });
  });
}

loadProducts();
updateCart();