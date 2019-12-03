const scheduleTable = document.getElementById('scheduleTable')
const carnet = getSession();

fetch(endpoint('socins',[carnet]))
.then(res=>res.json())
.then(data=>{
    let { Ciclo, Estudiante } = data[0]
    fetch(endpoint('matinscritas',[Ciclo,Estudiante]))
    .then(res=>res.json())
    .then(inscription=>{
            inscription.forEach((schedule)=>{
                scheduleTable.innerHTML+=`<tr>
                <td>${schedule.Materia}</td>
                <td>${schedule.Grupo}</td>
                <td>${schedule.Horario}</td>
            </tr>`;
    })})
})