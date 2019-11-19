
document.getElementById('btnLogin').addEventListener('click',doLogin)

function doLogin(){

    let data = {
        "carnet": document.getElementById('txtID').value,
        "pass": document.getElementById('txtPassword').value
    }

    fetch('http://suyanet.com.sv:3000/ugblogin?carnet='+data.carnet+'&pass='+data.pass)
    .then(res => res.json())
    .catch(error => console.error('Error:', error))
    .then(student =>{
        console.log(student)
        let {log,estado} = student
        if(log==1 && estado=="A"){
            const session = createSession(student)
            if(session){
                window.location="home.html"
            }
        }
    });

}