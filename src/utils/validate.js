export const validateData = (email, password) => {
    const regexEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
    const isValidEmail = regexEmail.test(email);
    const regexpassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm;
    const isValidPassword = regexpassword.test(password);
    if(!isValidEmail) return "Email Address is not valid";
    if(!isValidPassword) return "Password is not valid";
    return null;
}