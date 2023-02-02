var jsdom = require('jsdom');
const { JSDOM } = jsdom;
const { window } = new JSDOM('<html></html>');
var $ = require('jquery')(window);

$(function(){
    const $form = $('.js-form');
    const $email = $('.js-email');
    const $name = $('.js-name');
    const $password = $('.js-password');

    $form.submit(function(e:Event){
        let Booleans = [];
        Booleans.push(
            emailValidate(String($email.val())),
            nameValidate(String($name.val())),
            passwordValidate(String($password.val()))
            );

        if(Booleans.some((value) => value == false)){
            e.preventDefault()
            return;
        }

        $email.val("");
        $name.val("");
        $password.val("");
        alert("Success")
        return;
    });
})


const emailValidate = (email: string) =>{
    let errorMsg = "";
    const emailformat = checkEmailFormat(email);

    if(emailformat == true){
        return true;
    }else{
        errorMsg = "Not Valid Email Address"
        if(errorMsg.length > 0){
            $('.email-error').text(errorMsg).show().fadeOut( 5000 );
        }
        return false;
    }
}

const checkEmailFormat = ((email: string) =>{
    const emailRegex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    return emailRegex.test(String(email));
}) 



const nameValidate = (name: string) =>{
    let errorMsg = "";
    const nameFormat = checkNameFormat(String(name));
    const nameLen = checkNameLength(String(name).length);

    if(nameLen == true && nameFormat == true){
         return true;
    }else{
        errorMsg = "The name must have at least 2 characters and can only contain letters. Max 50 characters."
        if(errorMsg.length > 0){
            $('.name-error').text(errorMsg).show().fadeOut( 5000 );
        }
    }

    return false;
}

const checkNameFormat = ((name:string) =>{
    const nameRegex = /^[a-zA-Z]+$/;
    return nameRegex.test(name);
})

const checkNameLength = ((nameL:number)=>{
    if(nameL > 2 && nameL < 51){
        return true;
    }

    return false;
})



const passwordValidate = ((password:string) => {
    let errorMsg = "";
    const passwordFormat = checkPasswordFormat(password);

    if(passwordFormat == true){
        return true;
    }else{
        errorMsg = "The password must be at least 8 characters long and must contain at least 1 number and 1 special character (!, @, #, $, %, ^, &, *)."
        if(errorMsg.length > 0){
            $('.password-error').text(errorMsg).show().fadeOut( 5000 );
        }
        return false;
    }
})

const checkPasswordFormat = ((password:string)=>{
    const passwordRegex = /^(?=.*?[0-9])(?=.*?[#?!@$%^&*-])[A-Za-z\d@$!%*#?&]{8,}$/;//checks length also
    return passwordRegex.test(password);
})

export {emailValidate, nameValidate, passwordValidate, checkNameFormat, checkNameLength, checkPasswordFormat, checkEmailFormat};