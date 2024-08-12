//Ação de alerta apertando o button//
function botao(){
    const login = document.getElementById('login').value;
    const senha = document.getElementById('senha').value;
    
    if(!login || !senha){
        alert('Por favor, preencha todos os dados');
        return;
    }
        alert('Login efetuado com sucesso!');  
        window.location.reload();   
}

// Visualizar e não visualizar senha//
function versenha(){
    const inputsenha = document.getElementById('senha');
    const versenha = document.getElementById('versenha');

    if(inputsenha.type == 'password'){
        inputsenha.setAttribute('type', 'text')
        versenha.classList.replace('bi-eye-fill', 'bi-eye-slash')
    }
    else{
        inputsenha.setAttribute('type', 'password')
        versenha.classList.replace('bi-eye-slash', 'bi-eye-fill')
    }
}
