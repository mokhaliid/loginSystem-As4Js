// El Button bta3 El Sign Up
var btnSignUp = document.getElementById('signUp')
var EnterYourName = document.getElementById('name')
var btnSignIn = document.getElementById('signIn')
var Paragraph2 = document.querySelector('.my-paragraph2')
var Paragraph1 = document.querySelector('.my-paragraph1')
var mainButton = document.getElementById('main-button')
var mainButton2 = document.getElementById('main-button2')

// Start Mechanism bt3 btn l signup wl signin el su8yar

btnSignUp.addEventListener('click', function () {

    EnterYourName.classList.remove('d-none')
    btnSignUp.classList.add('d-none')
    Paragraph2.classList.remove('d-none')
    btnSignIn.classList.remove('d-none')
    Paragraph1.classList.add('d-none')
    mainButton2.classList.remove('d-none')
    mainButton.classList.add('d-none')


})

btnSignIn.addEventListener('click', function () {

    EnterYourName.classList.add('d-none')
    btnSignUp.classList.remove('d-none')
    Paragraph2.classList.add('d-none')
    btnSignIn.classList.add('d-none')
    Paragraph1.classList.remove('d-none')
    mainButton2.classList.add('d-none')
    mainButton.classList.remove('d-none')


})

// End Mechanism bt3 btn l signup wl signin el su8yar



// Start Dlw2te hbda2 a3ml El Mechanism when User Signup

var Email = document.getElementById('Email')
var Password = document.getElementById('Password')
var Main = []

function validateSameEmail() {
    for (var i = 0; i < localStorage.length; i++) {

        if (testt2[i].userEmail == Email.value) {
            alert('same email')

        }
    }
}

// mainButton2.addEventListener('click', function () {
//     if (validateUserNameRegex() != true) {

//         alert('Error Name')

//     }
//     else if (validateUserEmailRegex() != true) {
//         alert('Error Email')
//     }
//     else if (validateSameEmail()) {
//         alert('same email')
//     }
//     else if (validateUserPasswordRegex() != true) {
//         alert('Error Password')
//     }

//     else {
//         allData = {
//             userName: EnterYourName.value,
//             userEmail: Email.value,
//             userPassword: Password.value,
//         }
//         Main.push(allData)
//         hideInput()
//         console.log(allData);

//         localStorage.setItem('user', JSON.stringify(Main))

//     }


// })

mainButton2.addEventListener('click', function () {
    if (validateUserNameRegex() != true) {

        alert('Error Name')

    }
    else if (validateUserEmailRegex() != true) {
        alert('Error Email')
    }
    else if (validateSameEmail()) {
        alert('same email')
    }
    else if (validateUserPasswordRegex() != true) {
        alert('Error Password')
    }

    else {
        allData = {
            userName: EnterYourName.value,
            userEmail: Email.value,
            userPassword: Password.value,
        }
        Main.push(allData)
        hideInput()
        console.log(allData);

        localStorage.setItem('user', JSON.stringify(Main))

    }


})
var testt = localStorage.getItem('user')
var testt2 = JSON.parse(testt)
// console.log(testt2[0].userEmail);

// console.log(testt);


// End Dlw2te hbda2 a3ml El Mechanism when User Signup




// Start VALIDATION SIGNUP hena b2a 3yz a3ml validation lel signup
function validateUserNameRegex() {
    var userNameRegex = /^[A-Z][a-z]{4,9}$/i
    return userNameRegex.test(EnterYourName.value)
    console.log(userNameRegex.test(EnterYourName.value));

}

function validateUserEmailRegex() {
    var userEmailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return userEmailRegex.test(Email.value)
}

function validateUserPasswordRegex() {
    var userPasswordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
    return userPasswordRegex.test(Password.value)
}
// END VALIDATION SIGNUP hena b2a 3yz a3ml validation lel signup




// START 3yz a3ml hide lel value auto

function hideInput() {
    EnterYourName.value = ''
    Email.value = ''
    Password.value = ''
}
// END 3yz a3ml hide lel value auto



// hena b2a 3yz a check if user mwgud wla la2 LOGIN

mainButton.addEventListener('click', function () {

    for (var i = 0; i < localStorage.length; i++) {
        if (testt2[i].userEmail == Email.value) {
            console.log('SIuuuuuuuuuuuu');

        }
        else {
            console.log('errrrrrrrorr');

        }
    }
}
)


// mainButton.addEventListener('click', function (i) {

//     for (var i = 0; i < localStorage.length; i++) {
//         if (testt.userEmail == Email.value) {
//             console.log('SIuuuuuuuuuuuu');

//         }
//         else {
//             console.log('errrrrrrrorr');

//         }
//     }

// }



// validate l email
// console.log(testt);





// croky validation form

// if (validateUserNameRegex() != true) {

//     alert('Error Name')

// }
// else if (validateUserEmailRegex() != true) {
//     alert('Error Email')
// }
// else if (validateSameEmail()) {
//     alert('same email')
// }
// else if (validateUserPasswordRegex() != true) {
//     alert('Error Password')
// }

// else {
//     allData = {
//         userName: EnterYourName.value,
//         userEmail: Email.value,
//         userPassword: Password.value,
//     }
//     Main.push(allData)
//     hideInput()
//     console.log(allData);

//     localStorage.setItem('user', JSON.stringify(Main))

// }

function validateForm() {
    if (validateUserNameRegex() != true) {
        alert('Error Name')
        if (validateUserEmailRegex() != ture) {
            alert('Error Email')
            if (validateSameEmail()) {
                alert('Same Email')
                if (validateUserPasswordRegex() != true) {
                    alert('Error Password')
                }
            }
        }

        else {
            allData = {
                userName: EnterYourName.value,
                userEmail: Email.value,
                userPassword: Password.value,
            }
            Main.push(allData)
            hideInput()
            console.log(allData);

        }

    }
    localStorage.setItem('user', JSON.stringify(Main))

}