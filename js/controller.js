const controller = {
    init: function() {
        this.log = document.getElementById("log");
        document.getElementById("cmd").addEventListener("keypress", e => {
            if (e.key === "Enter") {
                const v = document.getElementById("cmd").value.trim();
                document.getElementById("cmd").value = "";
                if (!v) return;
                view.print("> " + v.toUpperCase(), "user-cmd");
                this.handleCommand(v);
            }
        });
        this.render();
    },
    quickCmd: function(str) { this.handleCommand(str); },
    render: function() {
        const room = model.world[model.state.currentRoom];
        view.printRoomHeader(room.name, room.bg);
        view.print(room.desc);
        const items = Object.keys(model.objects).filter(k => model.objects[k].location === model.state.currentRoom && model.objects[k].kind !== "npc");
        if (items.length) view.print("DETECTED: " + items.map(k => `<span class="hl-thing" onclick="controller.quickCmd('examine ${model.objects[k].name}')">${model.objects[k].name.toUpperCase()}</span>`).join(", "), "hint-text");
    },
    handleCommand: function(input) {
        const parts = input.toLowerCase().split(" ");
        const verb = model.dictionary.verbs[parts[0]] || parts[0];
        if (verb === "move" || model.dictionary.directions.includes(parts[0])) {
            const dir = model.dictionary.verbs[parts[0]] || parts[0];
            if (model.world[model.state.currentRoom].exits[dir]) {
                model.state.currentRoom = model.world[model.state.currentRoom].exits[dir];
                this.render();
            } else view.print("BLOCKED.");
        } else if (verb === "examine") {
            const objKey = Object.keys(model.objects).find(k => model.objects[k].name.includes(parts[1]));
            if (objKey) { view.print(model.objects[objKey].desc); if(model.objects[objKey].src) view.printImage(model.objects[objKey].src); }
            else view.print("NOT FOUND.");
        } else if (verb === "take") {
            const objKey = Object.keys(model.objects).find(k => model.objects[k].name.includes(parts[1]));
            if (objKey) { model.objects[objKey].location = "inventory"; model.state.inventory.push(objKey); view.print("SECURED."); }
        }
    }
};
document.addEventListener('DOMContentLoaded', () => controller.init());