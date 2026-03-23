try {
    const { HLTV } = require('hltv');
    const express = require('express');
    const path = require('path');
    const app = express();
    const fs = require('fs');

    app.use(express.static(path.join(__dirname, "../scripts")));
    app.use(express.json());

    app.get("/", async (req, resp) => {
        resp.sendFile(path.join(__dirname, '..', 'index.html'));
    })

    app.get('/news', async (req, resp) => {
        const news = await HLTV.getNews();
        resp.json(news);
    });

    app.get("/matches", async (req, resp) => {
        let id = parseInt(req.query.id);
        const matches = await HLTV.getMatches({ eventIds: [id] });
        resp.json(matches);
    });

    app.get("/team", async (req, resp) => {
        let id = parseInt(req.query.id);
        const team = await HLTV.getTeam({id: id});
        fs.readFile("../db/db.json", (err, data) => {
            if (err) {
                console.log(err);
                return;
            }
            let db = JSON.parse(data);
            delete team.news;
            db.teams.push(team);
            fs.writeFile("../db/db.json", JSON.stringify(db), (err) => {
                if (err) {
                    console.log(err);
                } else {
                    console.log("team added");
                    resp.json(db).teams;
                }
            });
        });
    });

    app.get("/player", async (req, resp) => {
        let id = parseInt(req.query.id);
        const player = await HLTV.getPlayer({id: id});
        delete player.news;
        resp.json(player);
    });

    app.get("/players", async (req, resp) => {
        fs.readFile("../db/db.json", (err, data) => {
            if (err) {
                console.log(err);
                return;
            }
            resp.json(JSON.parse(data).players);
        });
    });

    //Obj structure:
    /*{
        "teamName": {
            player1: playerObj,
            player2: playerObj,
            player3: playerObj,
            player4: playerObj,
            player5: playerObj
        }
    }
    */
    app.post("/players", async (req, resp) => {
        const body = req.body;

        if (typeof body !== "object" || Array.isArray(body)) {
            resp.json({error: "Invalid request-body"});
        }

        fs.readFile("../db/db.json", (err, data) => {
            if (err) {
                console.log(err);
                return;
            }
            let db = JSON.parse(data);
            db.players.push(body);
            fs.writeFile("../db/db.json", JSON.stringify(db), (err) => {
                if (err) {
                    console.log(err);
                } else {
                    console.log("players updated");
                    resp.json(db.players);
                }
            });
        })
    })

    app.get("/teams", async (req, resp) => {
        fs.readFile("../db/db.json", (err, data) => {
            if (err) {
                console.log(err);
                return;
            }
            resp.json(JSON.parse(data).teams);
        });
    });

    app.listen(3000, () => {
    console.log('Listening on port 3000...');
    });
} catch (e) {
    console.log(e);
}

