function lancer(ele) {
    // var button = $('#button');
    // var piece = $('#piece');

    // Me retourne ou True ou False 1/2 
    var q = (Math.floor(Math.random() * 2) === 0);



    if (q == true) {
        // console.log("Pile");
        // Via Jquery jsp pk bug
        // piece.html = '<img class="piece" src="./assets/img/pile.png"><br><small id="description" class="commentaire">Pile</small>';
        document.getElementById("piece").innerHTML = '<img class="piece" id="coin" src="./assets/img/pile-nobg.png"><br><small id="description" class="commentaire">Pile</small>';

    }
    if (q != true) {
        // console.log("Face");
        // Via Jquery jsp pk bug
        // piece.html = '<img class="piece" src="./assets/img/face.png"><br><small id="description" class="commentaire">Face</small>';
        document.getElementById("piece").innerHTML = '<img class="piece" id="coin" src="./assets/img/face-nobg.png"><br><small id="description" class="commentaire">Face</small>';
    }
    document.getElementById('coin').className = 'classname';


    // via envent lister bug apellé 2x 

    // button.click(function() {
    //     var q = (Math.floor(Math.random() * 2));

    //     console.log(q);
    //     if (q) {
    //         console.log("Pile");
    //         piece.html = '<img class="piece" src="./assets/img/face.png"><br><small id="description" class="commentaire">Face</small>';
    //     }
    //     if (q != true) {
    //         console.log("Face");
    //         piece.html = '<img class="piece" src="./assets/img/face.png"><br><small id="description" class="commentaire">Face</small>';
    //     }
    // })
}