
//Hårdkodade variabler för inloggning
//const name = ['Hossam','Emil','Ismail','Vytautas','Mohamed'];
const name = 'Grupp2';
const password = '1234';

//Inhämtar olika element
let elHeader = document.getElementById('header'); //Används för att 'fästa' div-element i header
let elArticle = document.getElementById('article');//Används för att 'fästa' div-element i article

//Hämtar innehåll i local storage
let storageName = localStorage.getItem('nameStorage');
let storagePwd = localStorage.getItem('pwdStorage');

//Kontrollerar om någon redan är inloggad
if (storageName === name && storagePwd === password) {
    loggingIn(); //Om local storage innehåller rätt uppgifter blir man inloggad direkt
}
else {
    signInForm(); //Om ingen är inloggad skickas man vidare till formulär för inloggning
}



//Funktion för att skapa formulär
function signInForm() {
    //Skapar div-element för innehåll i article
    let divFormContent = document.createElement('div');
    divFormContent.setAttribute('id', 'div-form-content');
    elArticle.appendChild(divFormContent);

    //Skapar fieldset
    let fieldset = document.createElement('FIELDSET');
    fieldset.setAttribute('id', 'fieldset-id');
    divFormContent.appendChild(fieldset); 

    //Skapar legend för fieldset
    let legend = document.createElement('LEGEND');
    let textLegend = document.createTextNode('Användare');
    legend.appendChild(textLegend);
    fieldset.appendChild(legend);

    //Skapar input för namn
    let inputName = document.createElement('INPUT');
    inputName.setAttribute('type', 'text'); 
    inputName.setAttribute('id', 'input-name');
    inputName.setAttribute('autocomplete', 'your name');
    fieldset.appendChild(inputName);
    
    //Skapar label för input-namn
    let labelName = document.createElement('LABEL');
    let textLabelName = document.createTextNode('Namn:');
    labelName.setAttribute('for', 'input-name');
    labelName.appendChild(textLabelName);
    fieldset.insertBefore(labelName,document.getElementById('input-name'));
    
    //Skapar input för lösenord
    let inputPwd = document.createElement('INPUT');
   // inputPwd.setAttribute('type', 'password'); Avaktiverat för att undvika varning i console
    inputPwd.setAttribute('autocomplete', 'current password');
    inputPwd.setAttribute('id', 'input-pwd');
    fieldset.appendChild(inputPwd);

    //Skapar label för lösenord
    let labelPwd = document.createElement('LABEL');
    let textLabelPwd = document.createTextNode('Lösenord: ');
    labelPwd.setAttribute('for', 'input-pwd');
    labelPwd.appendChild(textLabelPwd);
    fieldset.insertBefore(labelPwd,document.getElementById('input-pwd'));
    
    //Skapar  inloggnings-knapp
    let logInBtn = document.createElement('BUTTON');
    logInBtn.setAttribute('id', 'login-button');
    logInBtn.innerHTML = 'Logga in'; 
    fieldset.appendChild(logInBtn);

    //Skapar funktion för knapp
    logInBtn.addEventListener('click', function() { 
        //Hämtar inmatade värden
        let inputName = document.getElementById('input-name').value;
        let inputPwd = document.getElementById('input-pwd').value;

        
        //Kontrollerar inmatade värden
        if (inputName === name && inputPwd === password) {
            localStorage.setItem('nameStorage', inputName);
            localStorage.setItem('pwdStorage', inputPwd);
            
            elArticle.removeChild(divFormContent); //Tar bort div med innehåll
            loggingIn(); //Anropar funktion för inloggat läge      
        }
        else {
            elArticle.removeChild(divFormContent); //Tar bort div med innehåll
            wrongPwd(); //Anropar funktion för fel användaruppgifter
        }
    });
}


//Funktion för inloggat läge
function loggingIn() { 

    //Skapar div för välkomsttext
    let divforSignedIn = document.createElement('div');
    divforSignedIn.setAttribute('id', 'div-signedin');
    elArticle.appendChild(divforSignedIn);

    //Skapar div för utloggningsknapp i headern
    let divHeader = document.createElement('div');
    divHeader.setAttribute('id', 'div-header');
    elHeader.appendChild(divHeader);

    //Skapar utloggningsknapp i headern
    let logOutBtn = document.createElement('BUTTON'); 
    logOutBtn.setAttribute('id', 'log-outbtn');
    logOutBtn.innerHTML = 'Logga ut';             
    divHeader.appendChild(logOutBtn); 

    
    //Rubrik skapas i den nyskapade divven
    let hTaggWelcome = document.createElement('H2'); 
    hTaggWelcome.setAttribute('id', 'paraId');
    let textInhTaggWelcome = document.createTextNode('Välkommen tillbaka ' + name + '!'); 
    hTaggWelcome.appendChild(textInhTaggWelcome); 
    divforSignedIn.appendChild(hTaggWelcome); 

    //Funktion för logga-ut knapp
    logOutBtn.addEventListener('click', function() { 
        localStorage.removeItem('nameStorage'); 
        localStorage.removeItem('pwdStorage'); 

        elArticle.removeChild(divforSignedIn);//Tar bort div för innehåll i article (välkomsttext)
        elHeader.removeChild(divHeader); //Tar bort div för utloggningsknapp i headern
        signInForm(); //Funktion för formulär-sida
    });
}


//Funktion för fel inloggningssuppgifter
function wrongPwd() { 

    //Skapar div för felmeddelande och knapp
    let divforWrongPwd = document.createElement('div');
    divforWrongPwd.setAttribute('id', 'div-wrong-pwd');
    elArticle.appendChild(divforWrongPwd);

    //skapar ledsen smile-gubbe med span
    let spanElement = document.createElement('span')
    spanElement.setAttribute('id', 'span-id');
    spanElement.innerHTML = '&#9785;';
    divforWrongPwd.appendChild(spanElement);

    //Paragraf skapas i den nyskapade divven
    let paraTryAgain = document.createElement('p'); 
    paraTryAgain.setAttribute('id', 'para-try-again');
    let textInParaTryAgain = document.createTextNode('Tyvärr fel inloggningsuppgifter!'); 
    paraTryAgain.appendChild(textInParaTryAgain); 
    divforWrongPwd.appendChild(paraTryAgain); 

    //Skapar tillbaka-knapp
    let tryAgainBtn = document.createElement('BUTTON'); 
    tryAgainBtn.setAttribute('id', 'try-again-button');
    tryAgainBtn.innerHTML = 'Försök igen';            
    divforWrongPwd.appendChild(tryAgainBtn); 

    //Funktion för tillbaka-knapp
    tryAgainBtn.addEventListener('click', function() { 
        
        elArticle.removeChild(divforWrongPwd); //Tar bort div med innehåll
        signInForm(); // Funktion för formuläret
    });
}




