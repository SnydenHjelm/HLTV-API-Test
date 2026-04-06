class PlayersDropdown extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({mode: "open"});
    }

    async connectedCallback() {
        this.shadowRoot.innerHTML = `
        <link rel="stylesheet" href="/playersDropdown.css">
        <h2>${this.country.flag} ${this.country.name}: ${this.country.count} player(s)</h2>
        <div class="dropdown-header">View Players ▼</div>
            <div class="dropdown-content hidden">
            </div>
        </div>
        `

        this.shadowRoot.querySelector(".dropdown-header").addEventListener("click", (e) => {
            if (this.shadowRoot.querySelector(".dropdown-content").classList.contains("hidden")) {
                this.shadowRoot.querySelector(".dropdown-content").classList.remove("hidden");
                this.shadowRoot.querySelector(".dropdown-content").classList.add("visible");
                e.target.textContent = "Hide Players ▲";
            } else if (this.shadowRoot.querySelector(".dropdown-content").classList.contains("visible")) {
                this.shadowRoot.querySelector(".dropdown-content").classList.remove("visible");
                this.shadowRoot.querySelector(".dropdown-content").classList.add("hidden");
                e.target.textContent = "View Players ▼";
            }
        });

        for (let player of this.country.players) {
            let div = document.createElement("div");
            let splitName = player.name.split(" ");
            let playerTeam = await Teams.getTeamByPlayer(player.ign);
            if (splitName.length === 3) {
                div.innerHTML = `${this.country.flag} ${splitName[0]} "${player.ign}" ${splitName[1]} ${splitName[2]} - ${playerTeam.name}`;
            } else {
                div.innerHTML = `${this.country.flag} ${splitName[0]} "${player.ign}" ${splitName[1]} - ${playerTeam.name}`;
            }

            this.shadowRoot.querySelector(".dropdown-content").appendChild(div);
        }
    }
}

customElements.define("players-dropdown", PlayersDropdown);