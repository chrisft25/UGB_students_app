
document.getElementById('btnLogin').addEventListener('click',doLogin)

function doLogin(){
    
    let data = {
        carnet: document.getElementById('txtID').value.trim(),
        pass: document.getElementById('txtPassword').value.trim()
    }

    let options = {
        method: 'POST',
        body: JSON.stringify(data)
    }

    fetch(endpoint('auth'),options)
    .then(res => res.json())
    .catch(error => console.error('Error:', error))
    .then(response => console.log('Success:', response));
}