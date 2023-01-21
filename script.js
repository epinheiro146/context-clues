$(document).ready(function () {

    var friends = [
        'Tom', 'Dick', 'Larry', 'Dan Backslide', 'Dora Stanpipe'
    ];
    var locations = [
        'foyer', 'kitchen', 'dining room', 'ballroom', 'theater', 'master bedroom', 'guest bedroom', 'swimming pool', 'rec room', 'restroom'
    ];
    var weapons = [
        'box cutter', 'scimitar', 'kitchen knife', 'wood axe', 'screwdriver', 'sonic screwdriver', 'Matrix of Leadership', 'morning star', 'hammer', 'ballpoint pen',
        'Master Sword', 'flamethrower', 'metal clackers', 'road roller', 'spear', 'really hot coffee', 'Covid', 'swarm of bees', 'undercooked eggs', 'drifting Joy-Con'
    ];

    for (var i = 1; i < 101; i++) {
        $('body').append('<h3 class = "accusation" id = "' + i + '">Accusation ' + i + '</h3>');
    }

    $('.accusation').click(function (e) {
        j = Number(e.target.id);
        accuAlert()();
    })

    function accuAlert() {
        var friendsIndex = (j + 4) % friends.length;
        var weaponsIndex = (j + 9) % weapons.length;
        var locationsIndex = (j + 19) % locations.length;
        var friend = friends[friendsIndex];
        var location = locations[locationsIndex];
        var weapon = weapons[weaponsIndex];
        return function () {
            alert('Accusation ' + j + ': I accuse ' + friend + ', with the ' + weapon + ' in the ' + location + '!');
        };
    }
})