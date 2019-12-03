const documentTable = document.getElementById('documentTable')
const carnet = getSession();

fetch(endpoint('docs',[carnet]))
.then(res=>res.json())
.then(documentation=>{
    documentation.forEach((document)=>{
        documentTable.innerHTML+=`<tr>
        <td>${document.documento}</td>
        <td>${document.fecha}</td>
        <td>${document.Entregado}</td>
    </tr>`;
    }
    )
})