fetch("http://localhost:3000/teams").then(resp => resp.json()).then(reso => {
    console.log(reso);
    reso.teams.forEach((x) => {
        let div = document.createElement("div");
        div.innerHTML = `<h2>${x.name}</h2>`;
        let starters = x.players.filter((x) => x.type === "Starter");
        starters.forEach((starter) => {
            let p = document.createElement("p");
            p.textContent = `${starter.name}`;
            div.appendChild(p);
        });
        document.body.appendChild(div);
    })
});

async function getTeam(id) {
    if (typeof id !== "string") {
        return false;
    }

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

async function spawnTeams() {
    document.body.innerHTML = "";
    await fetch("http://localhost:3000/teams").then(resp => resp.json()).then(reso => {
    reso.teams.forEach((x) => {
        let div = document.createElement("div");
        div.innerHTML = `<h2>${x.name}</h2>`;
        let starters = x.players.filter((x) => x.type === "Starter");
            starters.forEach((starter) => {
                let p = document.createElement("p");
                p.textContent = `${starter.name}`;
                div.appendChild(p);
            });
            document.body.appendChild(div);
        })
    });
}

spawnTeams();
