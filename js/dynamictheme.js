function toggleTheme() {
    //find the bootstrap link tab
    let currentTheme = document.getElementById('theme');

    //Check if the flatly is being used currently.
    if (currentTheme.getAttribute('href').includes('flatly')) {
        //if so, replace the hrf with the darkly css
        currentTheme.setAttribute('href', 'css/bootstrap-darkly-theme.css');

    } else {
        currentTheme.setAttribute('href', 'css/bootstrap-flatly-theme.css');
    }
}//end toggleTheme

//Check to see if the browser's theme has been set previously using local storage
if (localStorage.getItem("jspgtheme") != null) {
    setTheme(localStorage.getItem("jspgtheme"));

}


function setTheme(themeName) {
    let currentTheme = document.getElementById('theme');
    switch (themeName) {
        case "superhero":
            currentTheme.setAttribute('href', 'css/bootstrap-superhero-theme.css');
            break;

        case "flatly":
            currentTheme.setAttribute('href', 'css/bootstrap-flatly-theme.css');
            break;

        case "darkly":
            currentTheme.setAttribute('href', 'css/bootstrap-darkly-theme.css');
            break;

        default:
            break;
    }//end switch

    localStorage.setItem("jspgtheme", themeName);
}