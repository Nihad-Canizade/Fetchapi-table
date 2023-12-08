let input = document.getElementById('myInput');
let table = document.querySelector('table');

function getDataApi() {
    fetch("https://northwind.vercel.app/api/products")
        .then(response => response.json())
        .then(data => {
            data.forEach(element => {
                table.innerHTML += `
                <tr id = "newtr">
            <td>${element.id}</td>
            <td><a href="./Html/info.html?id=${element.id}" target = "_blank">${element.name}</a></td>
            <td>${element.unitPrice}</td>
            <td>${element.unitsInStock}</td>
            <td><button><a href="./Html/edit.html?id=${element.id}" target = "_blank">Edit</a></button></td>
            <td><button>Delete</button></td>
            </tr>
            `
            })
            input.addEventListener("input", (e) => {
                let filter = data.filter((el) => {
                    return el.name.toLowerCase().startsWith(e.target.value)
                })
                table.innerHTML = `
                <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Price</th>
                <th>Stock</th>
                </tr>
                `;
                filter.forEach(element => {
                    table.innerHTML += `
                    <td>${element.id}</td>
                    <td>${element.name}</td>
                    <td>${element.unitPrice}</td>
                    <td>${element.unitsInStock}</td>
                    </tr>`
                })
            })
        })
}

getDataApi();
