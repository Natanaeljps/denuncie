console.log("Olá Natanael!");


function onChangeEmail(){
  toggleButtonsDisable();
  toggleEmailErrors();
  
}

function onChangeSenha(){
  toggleButtonsDisable();
  togglePasswordErrors();  
}
  

function login(){
  window.location.href = "/pagina_de_denuncia/inicial_page.html";
}

function eEmailValido() {
  const email = form.email().value;
  if (!email) {
    return false;
  }
  return validateEmail(email);
}

function toggleEmailErrors() {
  const email = form.email().value;
  form.sem_email().style.display = email ? "none" : "block";

  form.email_invalido().style.display = validateEmail(email) ? "none" : "block";
    
}

function togglePasswordErrors() {
  const senha = form.senha().value;
  form.sem_senha().style.display = senha ? "none" : "block";

}


function eSenhaValida() {
  const senha = form.senha().value;
  if(!senha){
    return false;
  }
  return true;
}

function toggleButtonsDisable() {
  const emailValido = eEmailValido();
  form.recuperar_senha().disabled = !emailValido;

  const senhaValido = eSenhaValida();
  form.logar().disabled = !emailValido || !senhaValido;
}



const form = {
  email:()=> document.getElementById('email'),
  senha:()=> document.getElementById('senha'),
  sem_email:()=> document.getElementById('sem_email'),
  sem_senha:()=> document.getElementById('sem_senha'),
  email_invalido:()=> document.getElementById('email_invalido'),
  recuperar_senha:()=> document.getElementById('recuperar_senha'),
  logar:()=> document.getElementById('logar'),
}