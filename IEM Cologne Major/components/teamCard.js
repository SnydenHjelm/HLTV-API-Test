class TeamCard extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({mode: "open"});
    }

    connectedCallback() {
        this.shadowRoot.innerHTML = `
        <link rel="stylesheet" href="/teamCard.css">
        <h2>${this.team.name}</h2>
        `;

        for (let key in this.players) {
             if (typeof this.players[key] !== "object") continue;
            let p = document.createElement("p");
            let playerCountry = getCountryBy(this.players[key].country.name, this.players[key].country.code);
            p.textContent = `${this.players[key].ign} ${playerCountry.flag}`;
            this.shadowRoot.appendChild(p);

            let img = document.createElement("img");
            img.src = this.players[key].image;
            this.shadowRoot.appendChild(img);
        }
    }
}

customElements.define("team-card", TeamCard);