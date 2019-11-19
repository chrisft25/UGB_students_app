const endpoint= (route,params=[])=>{
    
    let url ='https://estudiantes.ugb.edu.sv/API/'+ route + '/'

    if(params.length>0){
        for(let i=0; i<params.length;i++){
            url+=params[i];
            if(i<params.length-1){
                url+='/'
            }
        }
    }
    
    return url;
}

const createSession = (student)=>{
    sessionStorage.setItem('username',student.carnet)
    sessionStorage.setItem('studentInfo', JSON.stringify(student))
    return (sessionStorage.getItem('username')) ? true : false
}

const getSession = ()=>{
    return sessionStorage.getItem('username')
}

const getStudentData = ()=>{
    return JSON.parse(sessionStorage.getItem('studentInfo'))
}

var app = {
    initialize: function() {
        var url= window.location.toString(); //Obtenemos ruta actual
        url = url.substring(url.lastIndexOf('/')+1) //Obtenemos nombre de archivo especifico
        if(!getSession() && !url.startsWith('index.html')){
            window.location="index.html"
        }
        
        if(url.startsWith('home.html')){ 
                cargarcategorias();
            
        }else if (url.startsWith('index.html')){
            if(getSession()){
                window.location="home.html"
            }
        }
    }
};

app.initialize();

