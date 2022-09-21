function showHideElement(elementId) {

    let form = document.getElementById(elementId);
    let loginform = document.getElementById('login')
    let signupBtn = document.getElementById('sign-up');
    let returnBtn = document.getElementById('cancel');

    loginform.classList.toggle("hidden");
    signupBtn.classList.toggle('hidden');
    returnBtn.classList.toggle('show');
    form.classList.toggle("show");

}

function showDialogSignUp(elementId) {
    let form = document.getElementById(elementId);
    let fields = form.querySelectorAll('input');

    resultaArray = [];
    fields.forEach(f => {
        var object = new Object();
        object.key = f.placeholder.toLowerCase()
        object.value = f.value;
        resultaArray.push(object);
    })
    alert(buildMessage(resultaArray))


}

buildMessage = (result) => {
    let email = result.filter(email => email.key === "email")[0].value;
    return ` Hello ${email} u are logged!`

}