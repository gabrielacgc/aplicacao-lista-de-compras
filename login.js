let informacao = ['user', '123456']; 

function validaLogin() {
    let usuario = document.getElementById('usuario').value;
    let senha = document.getElementById('password').value; 

    if (usuario === informacao [0] && senha === informacao [1]) {
       sessionStorage.setItem('usuario', usuario) // armazena no session storage
      
     window.location ='index.html'; // direciona para outra página
    } else {
        alert('O usuario / senha estão incorretos!'); 
    }
} // fim da function 

// realiza o logout do usuário da aplicação 

