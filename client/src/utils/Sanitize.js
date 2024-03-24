class Sanitizer {
    constructor() {
    }
    onlyLettersPattern(string) {
        const onlyLettersPatten = /^[A-Za-z ]+$/
        if(!string.match(onlyLettersPatten)) {
            return false
        } 
    }

}
export const sanitizer = new Sanitizer()
