const billingTable = document.getElementById('billingTable')
const carnet = getSession();

fetch(endpoint('pagos',[carnet]))
.then(res=>res.json())
.then(payment=>{
    payment.forEach((pay)=>{
        billingTable.innerHTML+=`<tr>
        <td>${pay.tmo_descripcion}</td>
        <td>${pay.mov_fecha}</td>
        <td>${pay.estado}</td>
    </tr>`;
    }
    )
})