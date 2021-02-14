const PLAYERS = [
    "Spiderman",
    "Captain America",
    "Wonderwoman",
    "Popcorn",
    "Gemwoman",
    "Bolt",
    "Antwoman",
    "Mask",
    "Tiger",
    "Captain",
    "Catwoman",
    "Fish",
    "Hulk",
    "Ninja",
    "Black Cat",
    "Volverine",
    "Thor",
    "Slayer",
    "Vader",
    "Slingo"
];

// initialize players with image and strength
const initPlayers = (players) => {

    // Instead of forloop use Map method
    // Code here
    var detailedPlayers=[];
    let strength_setter=40;
    type_setter='hero';
    var number=0;
    players.map( (player)=>{
        let playersDetails=
        {
            name:PLAYERS[number],
            strength:strength_setter,
            image:"images/super-"+(number+1)+".png",
            type:type_setter

        };
        detailedPlayers.push(playersDetails);
        if(type_setter=='hero')type_setter='villan';
        else type_setter='hero';
        strength_setter++;
        number++;
    });
    console.log(detailedPlayers);
    return detailedPlayers;
}

// getting random strength
const getRandomStrength = () => {
    return Math.ceil(Math.random() * 100);
}

// Build player template
const buildPlayers = (players, type) => {
    let fragment = '';

    // Instead of using for loop
    // Use chaining of Array methods - filter, map and join
    // Type your code here
    players.map((player)=>{
        fragment+='<div class="player"><img src=\"'+player.image+'\" alt=""><div class="name">'+player.name+'</div><div class="strength">'+player.strength+'</div></div>'
    });

    return fragment;
}

// Display players in HTML
const viewPlayers = (players) => {
    document.getElementById('heroes').innerHTML = buildPlayers(players, 'hero');
    document.getElementById('villains').innerHTML = buildPlayers(players, 'villain');
}


window.onload = () => {
    viewPlayers(initPlayers(PLAYERS));
}