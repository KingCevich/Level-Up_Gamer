function loginFaq(){
    email = document.getElementById('exampleInputEmail1').value;
    contra = document.getElementById('exampleInputPassword1').value;
    userFaq={
        emailFaq: "admin@levelupgamer.cl",
        contraFaq :"n4p52d2S$"
    };

    if(email == userFaq.emailFaq && contra == userFaq.contraFaq){
        alert("Login Correcto, Bienvenido!");  
        return true;
        
    }else{
        alert("Login Incorrecto");
        return false;
        
        
    }

}