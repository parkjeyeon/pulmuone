var email = document.getElementsByClassName('email');
var number = document.getElementsByClassName('number');




function check() {


    if (document.myForm.certification[0].checked) {
        email[0].style.display = 'none';
        number[0].style.display = '';

    } else {
        email[0].style.display = '';
        number[0].style.display = 'none';

    }
}