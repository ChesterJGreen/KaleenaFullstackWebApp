//DATA SANITIZATION against NoSQL query injection

//DATA SANITIZATION against site script 

class Sanitizer {
    constructor(input) {
        this.input = input;
    }
    onlyLettersPattern(input) {
        const onlyLettersPatten = /^[A-Za-z +]+$/
        if(!input.match(onlyLettersPatten)) {
            return false
        } else return true
    }

}
export const sanitizer = new Sanitizer()
