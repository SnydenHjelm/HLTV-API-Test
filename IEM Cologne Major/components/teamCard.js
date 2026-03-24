class TeamCard extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({mode: "open"});
    }

    connectedCallback() {
        let getAlias = Names.aliasForTeam(this.team);
        let teamCountry = Countries.getCountryBy(this.team.country.name, this.team.country.code);
        if (getAlias.alias) {
            this.shadowRoot.innerHTML = `
            <link rel="stylesheet" href="/teamCard.css">
            <div id="left">
                <img src="${this.team.name}.png" alt="${this.team.name} Logo">
                <h2>${this.team.alias} ${teamCountry.flag}</h2>
            </div>
            <div id="right"></div>
            `;
        } else {
            this.shadowRoot.innerHTML = `
            <link rel="stylesheet" href="/teamCard.css">
            <div id="left">
                <img src="${this.team.name}.png" alt="${this.team.name} Logo">
                <h2>${this.team.name} ${teamCountry.flag}</h2>
            </div>
            <div id="right"></div>
            `;
        }

        for (let key in this.players) {
            if (typeof this.players[key] !== "object") continue;
            let playerCountry = Countries.getCountryBy(this.players[key].country.name, this.players[key].country.code);
            let p = document.createElement("p");
            p.textContent = `${playerCountry.flag} ${this.players[key].ign}`;
            this.shadowRoot.querySelector("#right").appendChild(p);
            p.addEventListener("click", () => {
                let popup = document.querySelector("#popup");
                popup.innerHTML = `<h2>${playerCountry.flag} ${this.players[key].name} ${this.players[key].ign}</h2>`;
                popup.style.display = "flex";
            });
        }
    }
}

customElements.define("team-card", TeamCard);