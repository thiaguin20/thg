function cadastrar(){
    let temail = document.getElementById('txtemail').value;
    let tsenha = document.getElementById('txtsenha').value;
    let tnome = document.getElementById('txtnome').value;
    
     document.getElementById('msg').innerText = "";   
 
     //validar se os campos preenchidos
 
     //criar o objeto usuario
     const usuario = {
        nome: tnome,
        senha : tsenha,
        email : temail
     }
 
     //Array.push(usuario);
      let array = localStorage.getItem('array_usuarios');
      let array_usuarios = array==null?[]:JSON.parse(array);
 
      //adicionar no array
      array_usuarios.push(usuario);
 
      //salvar na storage
      //JSON.stringify: convert array em String (JSON)
      localStorage.setItem('array_usuarios', 
                JSON.stringify(array_usuarios));
 
      document.getElementById('msg').innerText='Dados salvos'
 
 
 }