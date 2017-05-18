/**
 * Created by cyma on 5/18/2017.
 */


function Player() {
    this.name = "";
    this.health = 100;
    this.giveLife = function (targetPlayer) {
        targetPlayer.health += 10;
        console.log(this.name + " gave 10 health to " +targetPlayer.name);
    }
}
var shanker = new Player();
var vijji = new Player();
shanker.name = "shanker";
vijji.name = "Vijji";

shanker.giveLife(vijji);
console.log(shanker.health);
console.log(vijji.health);

//prototypes are used to add additional funtions or features to an existing function or class object

//here we are trying to add new function called kill to remove health of a player

Player.prototype.kill = function (targetPlayer) {
    targetPlayer.health -= 10;
    console.log(this.name + " has stabbed " +targetPlayer.name + " and reduced health by 10");
};

shanker.kill(vijji);
shanker.kill(vijji);
shanker.kill(vijji);

console.log(vijji.health);
console.log(shanker.health);

//now we are adding a new property to player object

Player.prototype.age = 25;

//here we are adding a new method to update the default age of any player using prototype
Player.prototype.updateAge = function (newAge) {
    this.age = newAge;
    console.log(this.name + "'s age has been updated to " +this.age);
};

console.log();
console.log(shanker.age);
console.log(vijji.age);

vijji.updateAge(21);
console.log(vijji.age);

