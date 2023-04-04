function func(email) {
    var str = email.replace(/@.*/, "");
    var strArr = str.split(/[.-]/);

    for(var i = 0; i < strArr.length; i++) {
        strArr[i] = strArr[i].charAt(0).toUpperCase() + strArr[i].slice(1);
    }
    var res = strArr.join("99");
    return res;
}

func(user.getEmail());