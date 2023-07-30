const btnEnvoyerFormulaire = document.querySelector("Envoyer un formulaire");

btnEnvoyerFormulaire.addEventListener("click", (e) => {
    e.preventDefault();

    class formulaire {
        coonstructor(input) {
            this.nom = document.querySelector("#nom".value);
            this.prenom = document.querySelector("#prenom".value);
            this.eamil = document.querySelector("#email".value);
            this.password = document.querySelector("#password".value);
            this.input = document.querySelector(`#${input}`).value;
        }
    }

    const formulaireValues = new formulaire();

});
const regExNomPrenom = value => {
    return /^ [A - Za - z]{ 3, 20 } /.test(value)
};

const regExEmail = (value) => {
    return /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(value)
};
const regExPassword = value => {
    return /^ (?=.*? [A - Z])(?=.*? [a - z])(?=.*? [0 - 9])(?=.*? [# ? !@$ %^&* -]).{ 8,} $ /.test(value)
};
function nomControll({
    const leNom = formulaireValues.nom;
    if (regExNom(leNom)) {
    return true;
}
    else {
    alert(textAlert("nom)"));
    return false;
}
});
function prenomControll({
    const lePrenom = formulaireValues.nom;
    if(regExNom(lePrenom)) {
    return true;
}
    else {
    alert(textAlert("prenom)"));
    return false;
}
function emailController({
    const leEmail = formulaireValues.email;
    if (regExCodePostal(leEmail)) {
    return true;
}
        else {
    alert("lemail n\'esta pas valide";
    return false;
            )
}
    }); 7
function motDePasseControll({
    const leMotDePasse = formulaireValues.motDePasse;
    if (regExNom(leMotDePasse)) {
    return true;
}
        else {
    alert(textAlert("MotDePasse)"));
    return false;
}

const afficherFormulaireHTML = () => {
    const structureFormulaire = `
        <div id="formulaire" class="formulaire>
        <form action="#">
        <label for="nom">nom</label>
        <input type="text" id="nom" name"nom" required/>

        <label for="prenom">nom</label>
        <input type="text" id="prenom" name"prenom" required/>

        <label for="email">email</label>
        <input type="text" id="email" name"email" required/>

        <label for="password">mot de passe</label>
        <input type="password" id="password" name"password" required/>
        </form>`

}

export default MyMorpionXO;
;
