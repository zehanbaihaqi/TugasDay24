const isi = document.getElementById('form');
const fname = document.getElementById('name');
const email = document.getElementById('email');
const phone = document.getElementById('phone');

isi.addEventListener('submit',e => {
    e.preventDefault();
    checkInputs();
})

function checkInputs(){
    //trim untuk tidak memperbolehkan spasi
    const fnameValue = fname.value.trim();
    const emailValue = email.value.trim();
    const phoneValue = phone.value.trim();

    if(fnameValue == ''){
        setErrorFor(fname,'Fullname cannot be empty')
    }
    else {
        setSuccessFor(fname)
    }

    if(emailValue == ''){
        setErrorFor(email, 'Email cannot be empty')
    }
    else if(!isEmail(emailValue)){
        setErrorFor(email, 'Not a valid email')
    }
    else{
        setSuccessFor(email)
    }

    if(phoneValue == ''){
        setErrorFor(phone, 'Phone cannot be empty')
    }
    else{
        setSuccessFor(phone)
    }
}

function setErrorFor(input,message){
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');
    formControl.className = 'form-control error';
    small.innerText = message;
}

function setSuccessFor(input){
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
}

function isEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}

function saveVariabel(){
    var nama = document.getElementById("name").value;
    localStorage.setItem("namaValue", nama);
    var mail = document.getElementById("email").value;
    localStorage.setItem("mailValue", mail);
    var telepon = document.getElementById("phone").value;
    localStorage.setItem("teleponValue", telepon);
    var negara = document.getElementById("nasionality").value;
    localStorage.setItem("negaraValue", negara);
    var pesan = document.getElementById("pesan").value;
    localStorage.setItem("pesanValue", pesan);
    return false;
}
