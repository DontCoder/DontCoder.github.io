var text = ["$", " $", "R $", "Ro $", "Roc $", "Rock $", "Rocke $", "Rocket $", "Rocket1 $", "Rocket13 $","Rocket133 $","Rocket1337 $","Rocket1337 $","Rocket133 $","Rocket13 $","Rocket1 $","Rocket $","Rocke $","Rock","Roc","Ro","R $","$"];
var counter = 0;
var inst = setInterval(change, 300);

function change() {
    document.title = text[counter];
    counter++;
    if (counter >= text.length) {
        counter = 0;
    }
}
