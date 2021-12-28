function lancer() {
    if (Math.floor(Math.random() * 2) === 0)
        document.getElementById("piece").innerHTML = '<img class="piece" id="coin" src="./assets/img/pile-nobg.png"><br><small id="description" class="commentaire">Pile</small>';
    else
        document.getElementById("piece").innerHTML = '<img class="piece" id="coin" src="./assets/img/face-nobg.png"><br><small id="description" class="commentaire">Face</small>';
    document.getElementById('coin').className = 'piece';

}

var darkSwitch = document.getElementById("darkSwitch");
window.addEventListener("load", function() {
    if (darkSwitch) {
        initTheme();
        darkSwitch.addEventListener("change", function() {
            resetTheme();
        });
    }
});

function initTheme() {
    var darkThemeSelected =
        localStorage.getItem("darkSwitch") !== null &&
        localStorage.getItem("darkSwitch") === "dark";
    darkSwitch.checked = darkThemeSelected;
    darkThemeSelected ?
        document.body.setAttribute("data-theme", "dark") :
        document.body.removeAttribute("data-theme");
}

function resetTheme() {
    if (darkSwitch.checked) {
        document.body.setAttribute("data-theme", "dark");
        localStorage.setItem("darkSwitch", "dark");
    } else {
        document.body.removeAttribute("data-theme");
        localStorage.removeItem("darkSwitch");
    }
}