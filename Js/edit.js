let id = new URLSearchParams(window.location.search).get("id");
let table = document.getElementById("myTable");

fetch(`https://northwind.vercel.app/api/products/${id}`)
    .then(res => res.json())
    .then(data => {
        document.body.innerHTML += `
        <section>
        <table id="myTable" border = 1;>
            <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Price</th>
                <th>Stock</th>
                <th>Save</th>
            </tr>
        <tr id = "newtr">
        <td>${data.id}</td>
        <td><input type ="text" id = "input1" value = "${data.name}"></td>
        <td><input type ="number" id = "input2" value = "${data.unitPrice}"></td>
        <td><input type ="number" id = "input3" value = "${data.unitsInStock}"></td>
        <td><button id = "saveBtn">Save</button></td>
        </tr>
        </table>
        </section>
    `


let saveButton = document.getElementById('saveBtn');

saveButton.addEventListener('click', () => {

    const nameinput = document.querySelector('#input1');
    const priceinput = document.querySelector('#input2');
    const stockinput = document.querySelector('#input3');

    fetch('https://northwind.vercel.app/api/products/'+id,
        {
            method: "PATCH",

            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ name: nameinput.value, unitPrice: priceinput.value, unitsInStock: stockinput.value }), // body data type must match "Content-Type" header
        })
        .then(res => res.json())
        .then(data => console.log(data))
}

)
})
