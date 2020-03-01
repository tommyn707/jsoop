
// Gamify
// Objectives:
// Provide a mission for the player to accomplish.
// Provide the logic in the game to determine whether the player accomplishes the mission.
// Add an attribute to the player to track whether the player has honey or not.
// Create a mission function so that the user is given a destination.
// Create a pickUp function that changes the player's honey status to true if it is invoked when the player is at the bees' location.
// Create a drop function that allows the player to deliver honey to the proper destination.

var tigger = {
    character: "Tigger",
    greet: function(){
        console.log("Tigger says, 'The wonderful thing about Tiggers is Tiggers are wonderful things!'");
    }
};
var pooh = {
    character: "Winnie the Pooh",
    greet: function(){
        console.log("Pooh says, 'Ohh, come on in for some honey!'");
    }
};
var piglet = { character: "Piglet",
    greet: function(){
        console.log("Piglet says, 'Hi, wel-wel-welcome to my humble home!'");
    }
};
var bees = { character: "Bees",
    greet: function(){
        console.log("BzzZzzZz!");
    }
};
var robin = { character: "Christopher Robin",
    greet: function(){
        console.log("Robin says, 'Ohh, have you met my friends Pooh and Tigger!?!'");
    }
};
var owl = { character: "Owl",
    greet: function(){
        console.log("Owl says, 'Hello there!'");
    }
};
var rabbit = { character: "Rabbit",
    greet: function(){
        console.log("Rabbit says, 'Well, come on in...don't be a stranger!'");
    }
};
var gopher = { character: "Gopher",
    greet: function(){
        console.log("Gopher says, 'Nom nom nom, hi there!'");
    }
};
var kanga = { character: "Kanga",
    greet: function(){
        console.log("Kanga says, 'Have you seen Roo? Ohh, pardon me...greetings!'");
    }
};
var eeyore = { character: "Eeyore",
    greet: function(){
        console.log("Eeyore says, 'I woke up again today...why?'");
    }
};
var heffa = { character: "Heffalumps",
    greet: function(){
        console.log("Heffalumps says, 'Welcome!'");
    }
};

tigger.north = pooh;

pooh.south = tigger;
pooh.west = piglet;
pooh.east = bees;
pooh.north = robin;

piglet.east = pooh;
piglet.north = owl;

bees.west = pooh;
bees.north = rabbit;

robin.south = pooh;
robin.west = owl;
robin.east = rabbit;
robin.north = kanga;

owl.south = piglet;
owl.east = robin;

rabbit.south = bees;
rabbit.west = robin;
rabbit.east = gopher;

gopher.west = rabbit;

kanga.south = robin;
kanga.north = eeyore;

eeyore.south = kanga;
eeyore.east = heffa;

heffa.west = eeyore;

var player = {
    location: tigger,
    honey: false
}

function move(dir){
    if(dir == "north" || dir == "North"){
        if(player.location.north == null){
            console.log("You attempt to head North, but unfortunately the path is blocked.")
        }
        else {
            player.location = player.location.north;
            console.log("You head North and arrive at " + player.location.character + "'s house!");
            player.location.greet();
        }
    }
    if(dir == "south" || dir == "South"){
        if(player.location.south == null){
            console.log("You attempt to head South, but unfortunately the path is blocked.")
        }
        else {
            player.location = player.location.south;
            console.log("You head South and arrive at " + player.location.character + "'s house!");
            player.location.greet();
        }
    }
    if(dir == "east" || dir == "East"){
        if(player.location.east == null){
            console.log("You attempt to head East, but unfortunately the path is blocked.")
        }
        else {
            player.location = player.location.east;
            console.log("You head East and arrive at " + player.location.character + "'s house!");
            player.location.greet();
        }
    }
    if(dir == "west" || dir == "West"){
        if(player.location.west == null){
            console.log("You attempt to head West, but unfortunately the path is blocked.")
        }
        else {
            player.location = player.location.west;
            console.log("You head West and arrive at " + player.location.character + "'s house!");
            player.location.greet();
        }
    }
}

function pickUp(){
    if(player.location == bees){
        player.honey = true;
        console.log("You collected some fresh honey from the bees!")
    }
    else{
        console.log("There is no honey at this location!")
    }
}

function mission(){
    charList = [tigger, pooh, piglet, robin, owl, rabbit, gopher, kanga, eeyore, heffa]
    var rand = Math.floor(Math.random()*Math.floor(charList.length));
    recipient = charList[rand];
    recipient.objective = true;
    console.log("Well hello there adventurer... " + recipient.character + " is in need of some honey! Please lend a helping hand and get some honey from the bees and take it over.");
}

function drop(){
    if(player.location.objective == true){
        console.log("Congratulations!!! " + player.location.character + " is thrilled to have received some fresh honey!")
    }
    else{
        console.log("You can't drop the honey here, nobody requested it!")
    }
}

mission();
move("north");
move("east");
pickUp();
move("north");
move("west");
move("north");
move("north");
move("east");
drop();
