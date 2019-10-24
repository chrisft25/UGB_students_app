
document.getElementById('btnLogin').addEventListener('click',doLogin)

function doLogin(){

    let data = [{
        "carnet": document.getElementById('txtID').value,
        "pass": document.getElementById('txtPassword').value
    }]

    let options = {
        method: 'POST',
        body: data
    }
    console.log(endpoint('auth'))
    console.log(endpoint('auth',['hola','hola2']))

    fetch('http://suyanet.com.sv:3000/ugblogin',options)
    .then(res => res.json())
    .catch(error => console.error('Error:', error))
    .then(response => console.log('Success:', response));

}