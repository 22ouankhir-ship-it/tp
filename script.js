var nom = document.getElementById("Nom");
var prenom = document.getElementById("Prenom");
var naissance = document.getElementById("naissance");
var password=document.getElementById("password");
var email=document.getElementById("email")
var photo = document.getElementById("photo");
var ville = document.getElementById("ville");
var sexeH=document.getElementById("h");
var sexeF=document.getElementById("f");

var btnVider = document.getElementById("btnVider");

var errNom=document.getElementById("errNom");
var errPrenom=document.getElementById("errPrenom");
var errNaiss=document.getElementById("errNaiss");
var errEmail=document.getElementById("errEmail");
var errPassword=document.getElementById("errPassword");
var errVille=document.getElementById("errVille");
var errPhoto=document.getElementById("errPhoto");
nom.addEventListener("keyup",()=>validerInput(nom,errNom,"le nom obligatoire"));
prenom.addEventListener("keyup",()=>validerInput(prenom,errPrenom,"le prenom est obligatoire"));
naissance.addEventListener("keyup",()=>validerInput(naissance,errNaiss,"la date naissance est obligatoire"));
password.addEventListener("keyup",()=>validerInput(password,errPassword,"password est obligatoire"));
email.addEventListener("keyup",()=>validerInput(email,errEmail,"email est obligatoire"));
function validerInput(input,err,message){
    if(input.value.trim()==""){
        err.textContent=message;
        err.style.color="red"
    }
    else{
        err.textContent="";
    }
}
ville.addEventListener("keydown", () => {validerInputSelect(ville, errVille, "Veuillez choisir une ville");});
function validerInputSelect(select, err, message) {
  if (select.value == "--Choisir une ville--") {
    err.textContent = message;
    err.style.color = "red";
  } else {
    err.textContent = "";
  }
}
photo.addEventListener("keypress",()=>validerPhoto(photo,errPhoto,"photo est obligatoire"));
function validerPhoto(input, err, message) {
  if (input.files.length > 0) {
    err.textContent = "";
  } else {
    err.textContent = message;
    err.style.color = "red";
  }
}
sexeH.addEventListener("change", () => validerSexe());
sexeF.addEventListener("change", () => validerSexe());

function validerSexe() {
  if (sexeH.checked || sexeF.checked) {
    errSexe.textContent = "";
  } else {
    errSexe.textContent = "Veuillez choisir un sexe";
    errSexe.style.color = "red";
  }
}

var utilissateurs = []
function Valider(){
  let nom = document.getElementById('Nom').value;
  let prenom = document.getElementById('Prenom').value;
  let naissance = document.getElementById("naissance").value;
  let password=document.getElementById("password").value;
  let email=document.getElementById("email").value;
  let photo = document.getElementById("photo").files[0];
  let ville = document.getElementById("ville").value;
  let sexe = sexeH.checked ? 'Homme' : sexeF.checked ? 'Femme' : '';
  var btnValider = document.getElementById("btnValider");

  
  btnValider.addEventListener('click',ajouter)
  function ajouter(e) {
        e.preventDefault();

        if (nom === '' || prenom === '' || naissance === '' || sexe === '' || ville === '' || photo === undefined || email === '' || password === '') {
            alert('Veuillez remplir tous les champs');
            return;
        }

        var user = {
            nom: nom,
            prenom: prenom,
            email: email,
            password: password,
            naissance: naissance,
            ville: ville,
            sexe: sexe,
            photo: photo
        }
        utilissateurs.push(user);
        Afficher();
    }

    function Afficher() {
        table_body.innerHTML = "";
        utilissateurs.forEach(function(u) {
            let ligne = `<tr>
                <td>${u.nom}</td>
                <td>${u.prenom}</td>
                <td>${u.email}</td>
                <td>${u.password}</td>
                <td>${u.naissance}</td>
                <td>${u.ville}</td>
                <td>${u.sexe}</td>
                <td><img src="${URL.createObjectURL(u.photo)}" width="50" height="50"></td>
            </tr>`;
            table_body.insertAdjacentHTML("beforeend", ligne);
        });
    }
}


function Vider(){
  document.getElementById('Nom').value = '';
  document.getElementById('Prenom').value = '';
  document.getElementById('naissance').value = '';
  document.getElementById('password').value = '';
  document.getElementById('email').value = '';
  document.getElementById('h').checked = false;
  document.getElementById('f').checked = false;
  document.getElementById('ville').value = '';
  document.getElementById("photo").value='';
  errNom.textContent = '';
  errPrenom.textContent = '';
  errNaiss.textContent = '';
  errEmail.textContent = '';
  errPassword.textContent = '';
  errSexe.textContent = '';
  errVille.textContent = '';
  errPhoto.textContent = '';
}