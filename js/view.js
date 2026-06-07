const view = {
    printRoomHeader: function(title, bgSrc) {
        const feed = document.getElementById("log");
        const h = document.createElement("div"); h.className = "room-title"; h.textContent = title;
        feed.appendChild(h);
        const img = document.createElement("div"); img.className = "room-illustration"; img.style.backgroundImage = `url('${bgSrc}')`;
        feed.appendChild(img);
    },
    print: function(text, cls = "message") {
        const d = document.createElement("div"); d.className = cls; d.innerHTML = text;
        document.getElementById("log").appendChild(d);
        document.getElementById("log").scrollTop = 99999;
    },
    printImage: function(src) {
        const img = document.createElement("img"); img.src = src; img.className = "inline-item-img";
        document.getElementById("log").appendChild(img);
    },
    updateSidebar: function(moves, inv, map, visited, current) {
        document.getElementById("move-val").innerText = moves;
        const il = document.getElementById("inventory-list");
        il.innerHTML = inv.length ? inv.map(k => `<div class="inv-item" onclick="controller.quickCmd('examine ${model.objects[k].name}')">${model.objects[k].name.toUpperCase()}</div>`).join("") : "EMPTY";
    }
};