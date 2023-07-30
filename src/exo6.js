const numeroTelephone = class numeroTelephone() {
    constructor(input) {
        this.numeroTelephone = document.querySelector("#numeroTelephone".value);
        this.input = document.querySelector(`#${input}`).value;
    };
}
const regExNumeroTelephone = value => {
    return
    /^(?:(?:\+|00)33[\s.-]{0,3}(?:\(0\)[\s.-]{0,3})?|0)[1-9](?:(?:[\s.-]?\d{2}){4}|\d{2}(?:[\s.-]?\d{3}){2})$/.test(value)
};

function checkPhoneNumber({
    const numeroTephone = checkPhoneNumber.numeroTelephone;
    if(regExNom(leNumeroTelephone)) {
    return true;
}
    else {
    alert(textAlert("numeroTelephone)"));
    return false;
}};
export default numeroTelephone;
