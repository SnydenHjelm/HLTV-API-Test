async function getAllPlayers() {
    let resp = await fetch("http://localhost:3000/players");
    let reso = await resp.json();
    return reso;
}

async function getPlayer(id) {
    let resp = await fetch(`http://localhost:3000/player?id=${id}`);
    let reso = await resp.json();
    return reso;
}

async function getPlayersFromTeam(team) {
    let resp = await fetch("http://localhost:3000/teams");
    let reso = await resp.json();

    let theTeam = reso.find((x) => x.name.toLowerCase() === team.toLowerCase());
    let starters = theTeam.players.filter((x) => x.type === "Starter");
    let players = [];
    for (let starter of starters) {
        let player = await getPlayer(starter.id);
        players.push(player);
    }

    let obj = {
        name: theTeam.name,
        player1: players[0],
        player2: players[1],
        player3: players[2],
        player4: players[3],
        player5: players[4],
    };

    let req = new Request("http://localhost:3000/players", {
        method: "POST",
        body: JSON.stringify(obj),
        headers: {"Content-Type": "application/json"}
    });
    
    let resp2 = await fetch(req);
    let reso2 = await resp2.json();
    return reso2;
}

async function getTeam(id) {
    try {
        let resp = await fetch(`http://localhost:3000/team?id=${id}`);
        if (resp.ok) {
            let reso = await resp.json();
            console.log("team added");
            await spawnTeams();
            return reso;
        } else {
            return {
                status: resp.status,
                msg: await resp.text()
            }
        }
    } catch (e) {
        return e;
    }
}

async function getAllTeams() {
    let resp = await fetch("http://localhost:3000/teams");
    let reso = await resp.json();
    return reso;
}

async function spawnTeams() {
    document.body.innerHTML = "";
    let teams = await getAllTeams();
    let allPlayers = await getAllPlayers();
    teams.forEach((x) => {
        let players = allPlayers.find((y) => y.name === x.name);
        let div = document.createElement("div");
        div.innerHTML = `<h2>${x.name}</h2>`;
        for (let key in players) {
            if (typeof players[key] !== "object") continue;
            let p = document.createElement("p");
            let playerCountry = getCountryBy(players[key].country.name, players[key].country.code);
            p.textContent = `${players[key].ign} ${playerCountry.flag}`;
            div.appendChild(p);
        }
        document.body.appendChild(div);
    })
}

spawnTeams();
