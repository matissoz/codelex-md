export const inputValidation = ((...args:string[]) =>{
    let err:string = '';

    args.forEach(value =>{
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

const checkForbiddenSymbols =((value: string) =>{
    const regexForbiddenSymbols = /[$:{~!^\\/]/g;
    return regexForbiddenSymbols.test(value);
})
