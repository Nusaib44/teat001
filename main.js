







// Validation
const gform = document.getElementById('gform')
const username = document.getElementById('username')
const number = document.getElementById('number')
const email = document.getElementById('email')
const subject = document.getElementById('subject')
const content = document.getElementById('content')


function setError(element, message){
    const formgroup = element.parentElement;
    const errorDisplay = formgroup.querySelector('.error')

    errorDisplay.innerText = message
    formgroup.classList.add('error');
    formgroup.classList.remove('success');
}

function setSuccess(element){
    const formgroup = element.parentElement;
    const errorDisplay = formgroup.querySelector('.error');


    errorDisplay.innerText = '';
    formgroup.classList.add('success');
    formgroup.classList.remove('error');
}

function isValidNumber(number){
    const re = /^[0-9]{10}$/;
    return re.test(String(number));
}

function isValidEmail(email){
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

function submitForm() {
    let gform = document.getElementById('gform');
    gform.querySelector("button#submit-btn-btn").click();
    // console.log(gform);
}

function validateInputs(){
    const usernameValue = username.value.trim();
    const numberValue = number.value.trim();
    const emailValue = email.value.trim();
    const subjectValue = subject.value.trim();

    var flag = 2;

    // Name
    if (usernameValue == '') {
        setError(username, 'This field cannot be empty');
        flag = 1;
    } else if (usernameValue.length <= 2) {
        setError(username, 'Enter name correctly');
        flag = 1;
    } else {
        setSuccess(username);
    }

    // Number
    if (numberValue == '') {
        setError(number, 'This field cannot be empty');
        flag = 1;
    } else if (numberValue.length !== 10) {
        setError(number, 'Number must be 10 characters');
        flag = 1;
    } else if (!isValidNumber(numberValue)) {
        setError(number, 'Enter number correctly');
        flag = 1;
    }
    else {
        setSuccess(number);
    }

    // Email
    if (emailValue == '') {
        setError(email, 'This field cannot be empty');
        flag = 1;
    } else if (!isValidEmail(emailValue)) {
        setError(email, 'Email is not valid');
        flag = 1;
    } else {
        setSuccess(email);
    }

    // subject
    if (subjectValue === '') {
        setError(subject, 'This field cannot be empty');
        flag = 1;
    } else if (subjectValue.length < 10) {
        setError(subject, 'Subject should be 10 characters or more');
        flag = 1;
    } else {
        setSuccess(subject);
    }



    if (flag == 2) {
        submitForm();
    }

}


// animation

AOS.init();

// You can also pass an optional settings object
// below listed default settings
AOS.init({
  // Global settings:
  disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
  startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
  initClassName: 'aos-init', // class applied after initialization
  animatedClassName: 'aos-animate', // class applied on animation
  useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
  disableMutationObserver: false, // disables automatic mutations' detections (advanced)
  debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
  throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
  

  // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
  offset: 120, // offset (in px) from the original trigger point
  delay: 0, // values from 0 to 3000, with step 50ms
  duration: 400, // values from 0 to 3000, with step 50ms
  easing: 'ease', // default easing for AOS animations
  once: false, // whether animation should happen only once - while scrolling down
  mirror: false, // whether elements should animate out while scrolling past them
  anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

});