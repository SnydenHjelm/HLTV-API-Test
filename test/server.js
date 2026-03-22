try {
    const { HLTV } = require('hltv');
    const express = require('express');
    const path = require('path');
    const app = express();
    const fs = require('fs');

    app.use(express.static(__dirname));

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
        resp.json(team);
        fs.readFile("db.json", (err, data) => {
            if (err) {
                console.log(err);
                return;
            }
            let db = JSON.parse(data);
            db.teams.push(team);
            fs.writeFile("db.json", JSON.stringify(db), (err) => {
                if (err) {
                    console.log(err);
                } else {
                    console.log("db updated");
                }
            });
        });
    });

    app.get("/player", async (req, resp) => {
        let id = parseInt(req.query.id);
        const player = await HLTV.getPlayer({id: id});
        resp.json(player);
    });

    app.get("/teams", async (req, resp) => {
        fs.readFile("db.json", (err, data) => {
            if (err) {
                console.log(err);
            }
            resp.json(JSON.parse(data));
        });
    });

    app.listen(3000, () => {
    console.log('Listening on port 3000...');
    });
} catch (e) {
    console.log(e);
}

