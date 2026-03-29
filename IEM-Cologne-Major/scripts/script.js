class Countries {
    static countries = [
        { code: "AL", name: "Albania", flag: "🇦🇱" },
        { code: "AF", name: "Afghanistan", flag: "🇦🇫" },
        { code: "AD", name: "Andorra", flag: "🇦🇩" },
        { code: "DZ", name: "Algeria", flag: "🇩🇿" },
        { code: "AG", name: "Antigua and Barbuda", flag: "🇦🇬" },
        { code: "AO", name: "Angola", flag: "🇦🇴" },
        { code: "AM", name: "Armenia", flag: "🇦🇲" },
        { code: "AR", name: "Argentina", flag: "🇦🇷" },
        { code: "AT", name: "Austria", flag: "🇦🇹" },
        { code: "AU", name: "Australia", flag: "🇦🇺" },
        { code: "BS", name: "Bahamas", flag: "🇧🇸" },
        { code: "BH", name: "Bahrain", flag: "🇧🇭" },
        { code: "BD", name: "Bangladesh", flag: "🇧🇩" },
        { code: "BB", name: "Barbados", flag: "🇧🇧" },
        { code: "BY", name: "Belarus", flag: "🇧🇾" },
        { code: "BE", name: "Belgium", flag: "🇧🇪" },
        { code: "BZ", name: "Belize", flag: "🇧🇿" },
        { code: "BJ", name: "Benin", flag: "🇧🇯" },
        { code: "BT", name: "Bhutan", flag: "🇧🇹" },
        { code: "BO", name: "Bolivia", flag: "🇧🇴" },
        { code: "BA", name: "Bosnia and Herzegovina", flag: "🇧🇦" },
        { code: "BW", name: "Botswana", flag: "🇧🇼" },
        { code: "BR", name: "Brazil", flag: "🇧🇷" },
        { code: "BN", name: "Brunei", flag: "🇧🇳" },
        { code: "BG", name: "Bulgaria", flag: "🇧🇬" },
        { code: "BF", name: "Burkina Faso", flag: "🇧🇫" },
        { code: "BI", name: "Burundi", flag: "🇧🇮" },
        { code: "CV", name: "Cape Verde", flag: "🇨🇻" },
        { code: "KH", name: "Cambodia", flag: "🇰🇭" },
        { code: "CM", name: "Cameroon", flag: "🇨🇲" },
        { code: "CA", name: "Canada", flag: "🇨🇦" },
        { code: "CF", name: "Central African Republic", flag: "🇨🇫" },
        { code: "TD", name: "Chad", flag: "🇹🇩" },
        { code: "CL", name: "Chile", flag: "🇨🇱" },
        { code: "CN", name: "China", flag: "🇨🇳" },
        { code: "CO", name: "Colombia", flag: "🇨🇴" },
        { code: "KM", name: "Comoros", flag: "🇰🇲" },
        { code: "CG", name: "Congo (Brazzaville)", flag: "🇨🇬" },
        { code: "CD", name: "Congo (Kinshasa)", flag: "🇨🇩" },
        { code: "CR", name: "Costa Rica", flag: "🇨🇷" },
        { code: "CI", name: "Côte d’Ivoire", flag: "🇨🇮" },
        { code: "HR", name: "Croatia", flag: "🇭🇷" },
        { code: "CU", name: "Cuba", flag: "🇨🇺" },
        { code: "CY", name: "Cyprus", flag: "🇨🇾" },
        { code: "CZ", name: "Czechia", flag: "🇨🇿" },
        { code: "DK", name: "Denmark", flag: "🇩🇰" },
        { code: "DJ", name: "Djibouti", flag: "🇩🇯" },
        { code: "DM", name: "Dominica", flag: "🇩🇲" },
        { code: "DO", name: "Dominican Republic", flag: "🇩🇴" },
        { code: "EC", name: "Ecuador", flag: "🇪🇨" },
        { code: "EG", name: "Egypt", flag: "🇪🇬" },
        { code: "SV", name: "El Salvador", flag: "🇸🇻" },
        { code: "GQ", name: "Equatorial Guinea", flag: "🇬🇶" },
        { code: "ER", name: "Eritrea", flag: "🇪🇷" },
        { code: "EE", name: "Estonia", flag: "🇪🇪" },
        { code: "SZ", name: "Eswatini", flag: "🇸🇿" },
        { code: "ET", name: "Ethiopia", flag: "🇪🇹" },
        { code: "FJ", name: "Fiji", flag: "🇫🇯" },
        { code: "FI", name: "Finland", flag: "🇫🇮" },
        { code: "FR", name: "France", flag: "🇫🇷" },
        { code: "GA", name: "Gabon", flag: "🇬🇦" },
        { code: "GM", name: "Gambia", flag: "🇬🇲" },
        { code: "GE", name: "Georgia", flag: "🇬🇪" },
        { code: "DE", name: "Germany", flag: "🇩🇪" },
        { code: "GH", name: "Ghana", flag: "🇬🇭" },
        { code: "GR", name: "Greece", flag: "🇬🇷" },
        { code: "GD", name: "Grenada", flag: "🇬🇩" },
        { code: "GT", name: "Guatemala", flag: "🇬🇹" },
        { code: "GN", name: "Guinea", flag: "🇬🇳" },
        { code: "GW", name: "Guinea-Bissau", flag: "🇬🇼" },
        { code: "GY", name: "Guyana", flag: "🇬🇾" },
        { code: "HT", name: "Haiti", flag: "🇭🇹" },
        { code: "HN", name: "Honduras", flag: "🇭🇳" },
        { code: "HU", name: "Hungary", flag: "🇭🇺" },
        { code: "IS", name: "Iceland", flag: "🇮🇸" },
        { code: "IN", name: "India", flag: "🇮🇳" },
        { code: "ID", name: "Indonesia", flag: "🇮🇩" },
        { code: "IR", name: "Iran", flag: "🇮🇷" },
        { code: "IQ", name: "Iraq", flag: "🇮🇶" },
        { code: "IE", name: "Ireland", flag: "🇮🇪" },
        { code: "IL", name: "Israel", flag: "🇮🇱" },
        { code: "IT", name: "Italy", flag: "🇮🇹" },
        { code: "JM", name: "Jamaica", flag: "🇯🇲" },
        { code: "JP", name: "Japan", flag: "🇯🇵" },
        { code: "JO", name: "Jordan", flag: "🇯🇴" },
        { code: "KZ", name: "Kazakhstan", flag: "🇰🇿" },
        { code: "KE", name: "Kenya", flag: "🇰🇪" },
        { code: "KI", name: "Kiribati", flag: "🇰🇮" },
        { code: "KP", name: "North Korea", flag: "🇰🇵" },
        { code: "KR", name: "South Korea", flag: "🇰🇷" },
        { code: "KW", name: "Kuwait", flag: "🇰🇼" },
        { code: "KG", name: "Kyrgyzstan", flag: "🇰🇬" },
        { code: "LA", name: "Laos", flag: "🇱🇦" },
        { code: "LV", name: "Latvia", flag: "🇱🇻" },
        { code: "LB", name: "Lebanon", flag: "🇱🇧" },
        { code: "LS", name: "Lesotho", flag: "🇱🇸" },
        { code: "LR", name: "Liberia", flag: "🇱🇷" },
        { code: "LY", name: "Libya", flag: "🇱🇾" },
        { code: "LI", name: "Liechtenstein", flag: "🇱🇮" },
        { code: "LT", name: "Lithuania", flag: "🇱🇹" },
        { code: "LU", name: "Luxembourg", flag: "🇱🇺" },
        { code: "MG", name: "Madagascar", flag: "🇲🇬" },
        { code: "MW", name: "Malawi", flag: "🇲🇼" },
        { code: "MY", name: "Malaysia", flag: "🇲🇾" },
        { code: "MV", name: "Maldives", flag: "🇲🇻" },
        { code: "ML", name: "Mali", flag: "🇲🇱" },
        { code: "MT", name: "Malta", flag: "🇲🇹" },
        { code: "MH", name: "Marshall Islands", flag: "🇲🇭" },
        { code: "MR", name: "Mauritania", flag: "🇲🇷" },
        { code: "MU", name: "Mauritius", flag: "🇲🇺" },
        { code: "MX", name: "Mexico", flag: "🇲🇽" },
        { code: "FM", name: "Micronesia", flag: "🇫🇲" },
        { code: "MD", name: "Moldova", flag: "🇲🇩" },
        { code: "MC", name: "Monaco", flag: "🇲🇨" },
        { code: "MN", name: "Mongolia", flag: "🇲🇳" },
        { code: "ME", name: "Montenegro", flag: "🇲🇪" },
        { code: "MA", name: "Morocco", flag: "🇲🇦" },
        { code: "MZ", name: "Mozambique", flag: "🇲🇿" },
        { code: "MM", name: "Myanmar", flag: "🇲🇲" },
        { code: "NA", name: "Namibia", flag: "🇳🇦" },
        { code: "NR", name: "Nauru", flag: "🇳🇷" },
        { code: "NP", name: "Nepal", flag: "🇳🇵" },
        { code: "NL", name: "Netherlands", flag: "🇳🇱" },
        { code: "NZ", name: "New Zealand", flag: "🇳🇿" },
        { code: "NI", name: "Nicaragua", flag: "🇳🇮" },
        { code: "NE", name: "Niger", flag: "🇳🇪" },
        { code: "NG", name: "Nigeria", flag: "🇳🇬" },
        { code: "MK", name: "North Macedonia", flag: "🇲🇰" },
        { code: "NO", name: "Norway", flag: "🇳🇴" },
        { code: "OM", name: "Oman", flag: "🇴🇲" },
        { code: "PK", name: "Pakistan", flag: "🇵🇰" },
        { code: "PW", name: "Palau", flag: "🇵🇼" },
        { code: "PA", name: "Panama", flag: "🇵🇦" },
        { code: "PG", name: "Papua New Guinea", flag: "🇵🇬" },
        { code: "PY", name: "Paraguay", flag: "🇵🇾" },
        { code: "PE", name: "Peru", flag: "🇵🇪" },
        { code: "PH", name: "Philippines", flag: "🇵🇭" },
        { code: "PL", name: "Poland", flag: "🇵🇱" },
        { code: "PT", name: "Portugal", flag: "🇵🇹" },
        { code: "QA", name: "Qatar", flag: "🇶🇦" },
        { code: "RO", name: "Romania", flag: "🇷🇴" },
        { code: "RU", name: "Russia", flag: "🇷🇺" },
        { code: "RW", name: "Rwanda", flag: "🇷🇼" },
        { code: "KN", name: "Saint Kitts and Nevis", flag: "🇰🇳" },
        { code: "LC", name: "Saint Lucia", flag: "🇱🇨" },
        { code: "VC", name: "Saint Vincent and the Grenadines", flag: "🇻🇨" },
        { code: "WS", name: "Samoa", flag: "🇼🇸" },
        { code: "SM", name: "San Marino", flag: "🇸🇲" },
        { code: "ST", name: "Sao Tome and Principe", flag: "🇸🇹" },
        { code: "SA", name: "Saudi Arabia", flag: "🇸🇦" },
        { code: "SN", name: "Senegal", flag: "🇸🇳" },
        { code: "RS", name: "Serbia", flag: "🇷🇸" },
        { code: "SC", name: "Seychelles", flag: "🇸🇨" },
        { code: "SL", name: "Sierra Leone", flag: "🇸🇱" },
        { code: "SG", name: "Singapore", flag: "🇸🇬" },
        { code: "SK", name: "Slovakia", flag: "🇸🇰" },
        { code: "SI", name: "Slovenia", flag: "🇸🇮" },
        { code: "SB", name: "Solomon Islands", flag: "🇸🇧" },
        { code: "SO", name: "Somalia", flag: "🇸🇴" },
        { code: "ZA", name: "South Africa", flag: "🇿🇦" },
        { code: "SS", name: "South Sudan", flag: "🇸🇸" },
        { code: "ES", name: "Spain", flag: "🇪🇸" },
        { code: "LK", name: "Sri Lanka", flag: "🇱🇰" },
        { code: "SD", name: "Sudan", flag: "🇸🇩" },
        { code: "SR", name: "Suriname", flag: "🇸🇷" },
        { code: "SE", name: "Sweden", flag: "🇸🇪" },
        { code: "CH", name: "Switzerland", flag: "🇨🇭" },
        { code: "SY", name: "Syria", flag: "🇸🇾" },
        { code: "TJ", name: "Tajikistan", flag: "🇹🇯" },
        { code: "TZ", name: "Tanzania", flag: "🇹🇿" },
        { code: "TH", name: "Thailand", flag: "🇹🇭" },
        { code: "TL", name: "Timor-Leste", flag: "🇹🇱" },
        { code: "TG", name: "Togo", flag: "🇹🇬" },
        { code: "TO", name: "Tonga", flag: "🇹🇴" },
        { code: "TT", name: "Trinidad and Tobago", flag: "🇹🇹" },
        { code: "TN", name: "Tunisia", flag: "🇹🇳" },
        { code: "TR", name: "Turkey", flag: "🇹🇷" },
        { code: "TM", name: "Turkmenistan", flag: "🇹🇲" },
        { code: "TV", name: "Tuvalu", flag: "🇹🇻" },
        { code: "UG", name: "Uganda", flag: "🇺🇬" },
        { code: "UA", name: "Ukraine", flag: "🇺🇦" },
        { code: "AE", name: "United Arab Emirates", flag: "🇦🇪" },
        { code: "GB", name: "United Kingdom", flag: "🇬🇧" },
        { code: "US", name: "United States", flag: "🇺🇸" },
        { code: "UY", name: "Uruguay", flag: "🇺🇾" },
        { code: "UZ", name: "Uzbekistan", flag: "🇺🇿" },
        { code: "VU", name: "Vanuatu", flag: "🇻🇺" },
        { code: "VA", name: "Vatican City", flag: "🇻🇦" },
        { code: "VE", name: "Venezuela", flag: "🇻🇪" },
        { code: "VN", name: "Vietnam", flag: "🇻🇳" },
        { code: "YE", name: "Yemen", flag: "🇾🇪" },
        { code: "ZM", name: "Zambia", flag: "🇿🇲" },
        { code: "ZW", name: "Zimbabwe", flag: "🇿🇼" },
        { code: "TW", name: "Taiwan", flag: "🇹🇼" },
        { code: "XK", name: "Kosovo", flag: "🇽🇰" },
        { code: "AZ", name: "Azerbaijan", flag: "🇦🇿" },
        { code: "EU", name: "Europe", flag: "🇪🇺" },
        { code: "SAM", name: "South America", flag: "🌎" }
    ];

    static getCountryBy(name, code) {
        if (name && code) {
            let byName = Countries.countries.find((x) => x.name.toLowerCase() === name.toLowerCase());
            let byCode = Countries.countries.find((x) => x.code.toLowerCase() === code.toLowerCase());
            if (byName) {
                return byName;
            } else if (byCode) {
                return byCode;
            } else {
                return null;
            }
        } else if (name) {
            return Countries.countries.find((x) => x.name.toLowerCase() === name.toLowerCase());
        } else if (code) {
            return Countries.countries.find((x) => x.code.toLowerCase() === code.toLowerCase());
        } else {
            return null;
        }
    }
}

class Names {
    static aliasForTeam(team) {
        switch (team.name) {
            case "Natus Vincere":
                team.alias = "NaVi";
                return team;
            default:
                return team;
        }
    }
}

class Players {
    static async getAllPlayers() {
        let resp = await fetch("http://localhost:3000/players");
        let reso = await resp.json();
        return reso;
    }

    static async getPlayer(id) {
        let resp = await fetch(`http://localhost:3000/player?id=${id}`);
        let reso = await resp.json();
        return reso;
    }

    static async getPlayersByTeamName(name) {
        let players = await Players.getAllPlayers();
        return players.find((x) => x.name.toLowerCase() === name.toLowerCase());
    }

    static async getPlayersFromTeam(team) {
        let resp = await fetch("http://localhost:3000/teams");
        let reso = await resp.json();

        let theTeam = reso.find((x) => x.name.toLowerCase() === team.toLowerCase());
        let starters = theTeam.players.filter((x) => x.type === "Starter");
        let players = [];
        for (let starter of starters) {
            let player = await Players.getPlayer(starter.id);
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
        spawnTeams();
        return reso2;
    }
}

class Teams {
    static async addTeam(teamId) {
        let db = await Teams.getTeam(teamId);
        let team = db.teams.find((x) => x.id === teamId);
        await Players.getPlayersFromTeam(team.name);
    }
    static async getAllTeams() {
        let resp = await fetch("http://localhost:3000/teams");
        let reso = await resp.json();
        return reso;
    }

    static async getTeam(id) {
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

    static async getTeamByName(name) {
        let teams = await Teams.getAllTeams();
        return teams.find((x) => x.name.toLowerCase() === name.toLowerCase());
    }
}


async function spawnTeams() {
    document.querySelector("#stage1").innerHTML = "<div class='popup'></div>";
    document.querySelector("#stage2").innerHTML = "<div class='popup'></div>";
    document.querySelector("#stage3").innerHTML = "<div class='popup'></div>";

    let teams = await Teams.getAllTeams();

    for (let team of teams) {
        let players = await Players.getPlayersByTeamName(team.name);
        let teamCard = document.createElement("team-card");
        if (stage3.includes(team.name)) {
            teamCard.stage = "stage3";
        } else if (stage2.includes(team.name)) {
            teamCard.stage = "stage2";
        } else if (stage1.includes(team.name)) {
            teamCard.stage = "stage1";
        }
        teamCard.team = team;
        teamCard.players = players;
        document.querySelector(`#${teamCard.stage}`).appendChild(teamCard);
    }
}

spawnTeams();
for (let e of document.querySelectorAll(".popup")) {
    e.style.display = "none";
    e.addEventListener("click", () => {
        e.style.display = "none";
    })
}

let headerBg = 0;
setInterval(() => {
    headerBg++;
    if (headerBg === 12) headerBg = 0;
    document.querySelector("header").style.background = `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(/header-bg${headerBg}.jpg)`;
    document.querySelector("header").style.backgroundRepeat = "no-repeat";
    document.querySelector("header").style.backgroundSize = "cover";
    document.querySelector("header").style.backgroundPosition = "center";
}, 5000);

let stage3 = ["Vitality", "Natus Vincere", "FURIA", "Aurora", "PARIVISION", "Falcons", "MOUZ", "The MongolZ"];
let stage2 = ["9z", "Astralis", "Spirit", "FUT"];
let stage1 = [];