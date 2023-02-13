export const inputValidation = ((...args:string[]) =>{
    let err:string = '';

    args.forEach(value =>{
        //return true if contains forbidden symbol
        if(checkForbiddenSymbols(value)){
            err = "You are not allowed to use any of these symbols $ : { ~ ! ^ \\ /"
        }

        if(!checkForLength(value)){
            err = "Minimum of 3 characters in input fields"
        };

        if(!checkForEmpty(value)){
            err = "All fields must be filled";
        };
    })
    
    return err;
});

export const imageValidation = ((req, file, cb) =>{
    if (file.mimetype == "image/png" || file.mimetype == "image/jpg" || file.mimetype == "image/jpeg") {
        cb(null, true);
    } else {
        cb(null, false);
        return cb(new Error('Only .png, .jpg and .jpeg format allowed!'));
    }
  })

const checkForEmpty = ((value: string) =>{
    if(value === undefined || value === " " || value === ""){
        return false;
    }
    return true;
})

const checkForLength = ((value: string) =>{

    const length = value.length;

    if(length < 3){
        return false;
    }
    return true;
})

const checkForbiddenSymbols =((value) =>{
    const regexForbiddenSymbols = /[$:{~!^\\/]/g
    //return true if contains forbidden symbol
    return regexForbiddenSymbols.test(value);
})
