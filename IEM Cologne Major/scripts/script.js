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

async function getPlayersByTeamName(name) {
    let players = await getAllPlayers();
    return players.find((x) => x.name.toLowerCase() === name.toLowerCase());
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

async function getAllTeams() {
    let resp = await fetch("http://localhost:3000/teams");
    let reso = await resp.json();
    return reso;
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

async function getTeamByName(name) {
    let teams = await getAllTeams();
    return teams.find((x) => x.name.toLowerCase() === name.toLowerCase());
}

async function spawnTeams() {
    document.body.innerHTML = "";
    let teams = await getAllTeams();

    for (let team of teams) {
        let players = await getPlayersByTeamName(team.name);
        let teamCard = document.createElement("team-card");
        teamCard.team = team;
        teamCard.players = players;
        document.body.appendChild(teamCard);
    }
}

spawnTeams();
