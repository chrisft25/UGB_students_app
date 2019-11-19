const writeData = (student)=>{
    document.getElementById('nombreEstudiante').innerHTML = student.nombre
}

writeData(getStudentData())