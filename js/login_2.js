$(document).ready(function () {
    $("#checkbox").change(function () {
        if ($("#checkbox").is(":checked")) {
            alert("개인정보보호를 위해 개인 PC에서만 사용하세요.");
        }
    });
});

let loginOk = document.loginOk;
let loginBtn = document.querySelector('.loginBtn');
loginBtn.addEventListener('click', loginOkFunc);

function loginOkFunc() {
    let userId = document.querySelector('#userId')
    let userPw = document.querySelector('#userPw')

    if (userId.value == null || userId.value == "" ||
        userId.value.length <= 0 || userId.value.length > 10) {
        alert("아이디를 입력하세요.");
        userId.focus();
        return false;
    }

    if (userPw.value == null || userPw.value == "" ||
        userPw.value.length <= 0 || userPw.value.length > 15) {
        alert("비밀번호를 입력하세요.");
        userPw.focus();
        return false;
    }


    alert("로그인을 실행합니다.");

    loginOk.submit();
}
