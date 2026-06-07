const model = {
    state: { currentRoom: "quarters", moves: 0, inventory: [], visited: new Set(["quarters"]), gameEnded: false },
    dictionary: {
        verbs: { "n":"north", "s":"south", "e":"east", "w":"west", "go":"move", "x":"examine", "look":"examine", "take":"take", "get":"take" },
        directions: ["north", "south", "east", "west"]
    },
    world: {
        "quarters": { name: "Novice Quarters", bg: "assets/backgrounds/bg_quarters.png", desc: "Light filters in. A sticky 'note' is on the door. Exit NORTH.", exits: {north: "courtyard"} },
        "courtyard": { name: "The Courtyard", bg: "assets/backgrounds/bg_courtyard.png", desc: "Pale stone. Kitchens are EAST, room SOUTH, Shrine NORTH.", exits: {south: "quarters", east: "kitchens", north: "shrine"} },
        "kitchens": { name: "The Kitchens", bg: "assets/backgrounds/bg_kitchen.png", desc: "Warm stoves. Courtyard is WEST.", exits: {west: "courtyard"} },
        "shrine": { name: "Northern Shrine", bg: "assets/backgrounds/bg_shrine.png", desc: "Master Chen waits. Path SOUTH.", exits: {south: "courtyard"} }
    },
    objects: {
        "note": { name: "sticky note", kind: "thing", location: "quarters", src: "assets/items/item_note.png", desc: "Reads: 'Assemble at Shrine. Bring Dog, Hat, Jelly.'" },
        "dog": { name: "wooden dog", kind: "thing", location: "courtyard", src: "assets/items/item_dog.png", desc: "A simple wooden dog." },
        "jelly": { name: "sweet jelly", kind: "thing", location: "kitchens", src: "assets/items/item_jelly.png", desc: "Strawberry geometry." },
        "hat": { name: "straw hat", kind: "thing", location: "shrine", src: "assets/items/item_hat.png", desc: "Sturdy straw." },
        "master": { name: "Master Chen", kind: "npc", location: "shrine", src: "assets/items/npc_master.png", desc: "Waiting for artifacts." },
        "climax": { name: "Turtle Snake", src: "assets/items/climax_turtle_snake.png" }
    },
    mapLayout: { "quarters":{x:2,y:3}, "courtyard":{x:2,y:2}, "kitchens":{x:3,y:2}, "shrine":{x:2,y:1} }
};