const gradesTable = document.getElementById('gradesTable')
const carnet = getSession();

const fixedTwoDecimals = (number) =>
{
    if(number){
        return Number.parseFloat(number).toFixed(2)
    }else{
        return "-"
    }
}

fetch(endpoint('notas',[carnet,'A','U']))
.then(res=>res.json())
.then(grades=>{
    grades.forEach((subject)=>{
        gradesTable.innerHTML+=`<tr>
        <td>${subject.Materia}</td>
        <td>${fixedTwoDecimals(subject.C1_L1)}</td>
        <td>${fixedTwoDecimals(subject.C1_L2)}</td>
        <td>${fixedTwoDecimals(subject.C1_P)}</td>
        <td>${fixedTwoDecimals(subject.n1)}</td>
        <td>${fixedTwoDecimals(subject.C2_L1)}</td>
        <td>${fixedTwoDecimals(subject.C2_L2)}</td>
        <td>${fixedTwoDecimals(subject.C2_P)}</td>
        <td>${fixedTwoDecimals(subject.n2)}</td>
        <td>${fixedTwoDecimals(subject.C3_L1)}</td>
        <td>${fixedTwoDecimals(subject.C3_L2)}</td>
        <td>${fixedTwoDecimals(subject.C3_P)}</td>
        <td>${fixedTwoDecimals(subject.n3)}</td>
        <td>${fixedTwoDecimals(subject.n8)}</td>
    </tr>`;
    }
    )

        
    

    
})