let id = new URLSearchParams(window.location.search).get("id");

fetch(`https://northwind.vercel.app/api/products/${id}`)
    .then(res => res.json())
    .then(data => {
        document.body.innerHTML += `
   <p>ID: ${data.id}</p>
   <p>Name: ${data.name}</p>
   <p>Price: ${data.unitPrice}</p>
   <p>Stock: ${data.unitsInStock}</p>
    `
})