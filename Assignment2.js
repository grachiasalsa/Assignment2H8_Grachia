function submitForm() {
    const namaValue = document.getElementById("nama").value;
    const roleValue = document.getElementById("role").value;
    const availabilityValue = document.getElementById("availability").value;
    const usiaValue = document.getElementById("usia").value;
    const lokasiValue = document.getElementById("lokasi").value;
    const experienceValue = document.getElementById("years-experience").value;
    const emailValue = document.getElementById("email").value;

    document.getElementById("profileName").innerText = namaValue;
    document.getElementById("profileRole").innerText = roleValue;
    document.getElementById("profileAvailability").innerText = availabilityValue;
    document.getElementById("profileUsia").innerText = usiaValue;
    document.getElementById("profileLokasi").innerText = lokasiValue;
    document.getElementById("profileExperience").innerText = experienceValue;
    document.getElementById("profileEmail").innerText = emailValue;


// document.getElementById("submitButton").addEventListener("click", submitForm);

const myEditData = document.getElementById("edit");
myEditData.addEventListener('click', hilangForm)

const FormCaca = document.getElementById("profileForm");
const div = FormCaca.parentElement;
function hilangForm() {
    if (div.classList.contains('d-none')) { 
        div.classList.remove('d-none');
    } else {
        div.classList.add('d-none');
    };
}
}