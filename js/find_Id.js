let findIdOk = document.findIdOk;
let loginBtn = document.querySelector('.loginBtn');
loginBtn.addEventListener('click', findIdOkFunc);

function findIdOkFunc() {
    let userName = document.querySelector('#userName')
    let userNumber = document.querySelector('#userNumber')
    let userNumber2 = document.querySelector('#userNumber2')
    let userMail = document.querySelector('#userMail')

    if (userName.value == null || userName.value == "" ||
        userName.value.length <= 0 || userName.value.length > 10) {
        alert("이름을 입력하여 주세요.");
        userName.focus();
        return false;
    }

    if (userNumber.value == null || userNumber.value == "" ||
        userNumber.value.length <= 0 || userNumber.value.length > 10) {
        alert("휴대폰번호를 입력하여 주세요.");
        userNumber.focus();
        return false;
    }

    if (userNumber2.value == null || userNumber2.value == "" ||
        userNumber2.value.length <= 0 || userNumber2.value.length > 10) {
        alert("휴대폰번호를 입력하여 주세요.");
        userNumber2.focus();
        return false;
    }

    if (userMail.value == null || userMail.value == "" ||
        userMail.value.length <= 0 || userMail.value.length > 20) {
        alert("이메일을 입력하여 주세요.");
        userMail.focus();
        return false;
    }


    alert("아이디 찾기를 실행합니다.");

    findIdOk.submit();
}
