function lancer() {
    // Me retourne ou True ou False 1/2 
    var q = (Math.floor(Math.random() * 2) === 0);



    if (q == true) {
        document.getElementById("piece").innerHTML = '<img class="piece" id="coin" src="./assets/img/pile-nobg.png"><br><small id="description" class="commentaire">Pile</small>';

    }
    if (q != true) {
        document.getElementById("piece").innerHTML = '<img class="piece" id="coin" src="./assets/img/face-nobg.png"><br><small id="description" class="commentaire">Face</small>';
    }
    document.getElementById('coin').className = 'piece';

}