$(function () {
    document.getElementsByName("certification")[0].onclick = function () {
        changeType(this.checked);
    }
    document.getElementsByName("certification")[1].onclick = function () {
        changeType(!this.checked);
    }

    /* // 위 javascript를 jQuery로 변경하면 아래와 같음
    $("input[name=certification]").change(function() {
    	if ($(this).val() === 'number') {
    		changeType($(this).is(":checked"));
    	} else {
    		changeType(!$(this).is(":checked"));
    	}
    });*/

    document.getElementsByClassName('loginBtn')[0].addEventListener('click', findIdOkFunc);
});

function changeType(flag) {
    if (flag) {
        document.getElementsByClassName("number")[0].style.display = 'block';
        document.getElementsByClassName("email")[0].style.display = 'none';
    } else {
        document.getElementsByClassName("number")[0].style.display = 'none';
        document.getElementsByClassName("email")[0].style.display = 'block';
    }
}

function findIdOkFunc() {
    var frm = document.findIdOk;

    let userName = frm.userName;
    if (userName.value == null || userName.value == "" ||
        userName.value.length <= 0 || userName.value.length > 10) {
        alert("이름을 입력하여 주세요.");
        document.getElementById('userName').focus();
        return;
    }

    if ($("input[name=certification]:checked").val() === 'number') {
        let userNumber = frm.userNumber;
        if (userNumber.value == null || userNumber.value == "" ||
            userNumber.value.length <= 0 || userNumber.value.length > 10) {
            alert("휴대폰번호를 입력하여 주세요.");
            document.getElementById('userNumber').focus();
            return;
        }

        let userNumber2 = frm.userNumber2;
        if (userNumber2.value == null || userNumber2.value == "" ||
            userNumber2.value.length <= 0 || userNumber2.value.length > 10) {
            alert("휴대폰번호를 입력하여 주세요.");
            document.getElementById('userNumber2').focus();
            return;
        }
    } else {
        let userMail = frm.userMail;
        if (userMail.value == null || userMail.value == "" ||
            userMail.value.length <= 0 || userMail.value.length > 20) {
            alert("이메일을 입력하여 주세요.");
            document.getElementById('userMail').focus();
            return;
        }
    }

    alert("아이디 찾기를 실행합니다.");

    document.findIdOk.submit();
}
