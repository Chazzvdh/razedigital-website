import { css, html, LitElement } from 'lit';

class TarievenComponent extends LitElement {
    static styles = css`
    :host {
      display: block;
      max-width: 400px;
      margin: 20px auto;
      padding: 20px;
      border: 1px solid #ddd;
      border-radius: 8px;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
      background-color: #fff;
      text-align: center;
    }

    h2 {
      color: #333;
      margin-bottom: 15px;
    }

    p {
      margin-bottom: 10px;
    }

    label {
      display: block;
      margin-top: 10px;
    }

    input, select {
      width: 100%;
      padding: 8px;
      box-sizing: border-box;
      margin-top: 5px;
      margin-bottom: 15px;
    }
      
    #totaalBedrag {
      background-color: #007bff;
      color: var(--secondary-text-color);
      padding: 5px;
      border-radius: 5px;
    }
      
    button {
      background-color: var(--primary-accent-color);
      color: var(--secondary-text-color);
      padding: 10px;
      border-radius: 5px;
      border: none;
      cursor: pointer;
      width: 50%;
    }
  `;

    static properties = {
        prijsPerKwartier: { type: Number },
        startTarief: { type: Number },
        ingevoerdeTijd: { type: Number },
        geselecteerdeDienst: { type: Object },
        diensten: { type: Array },
    };

    async connectedCallback() {
        super.connectedCallback();

        try {
            const response = await fetch('src/dienstenData.json'); // Update the path to your actual JSON file
            const data = await response.json();

            if (data && data.diensten) {
                this.diensten = data.diensten;
            }
        } catch (error) {
            console.error('Error fetching diensten data:', error);
        }
    }

    constructor() {
        super();
        this.prijsPerKwartier = 0;
        this.startTarief = 0; // Set a default startTarief for services without it
        this.hardwareTarief = 0;
        this.ingevoerdeTijd = 0;
        this.geselecteerdeDienst = null;
    }

    updated(changedProperties) {
        if (
            changedProperties.has('ingevoerdeTijd') ||
            changedProperties.has('extraKosten') ||
            changedProperties.has('geselecteerdeDienst')
        ) {
            this.dispatchEvent(new CustomEvent('calculate', {
                detail: { totalCost: this.calculateCost() },
                bubbles: true,
                composed: true,
            }));
        }
    }

    calculateCost() {
        if (!this.geselecteerdeDienst) {
            return 0;
        }

        const ppq = this.prijsPerKwartier * this.ingevoerdeTijd;
        const startTarief = this.geselecteerdeDienst.hasStartTarief ? this.startTarief : 0;
        const hardwareTarief = this.geselecteerdeDienst.hardwareTarief || 0; // Check if hardwareTarief is defined

        return ppq + startTarief + hardwareTarief;
    }



    handleTijdChange(e) {
        this.ingevoerdeTijd = parseInt(e.target.value) || 0;
    }

    handleDienstChange(e) {
        const selectedServiceIndex = e.target.selectedIndex - 1;
        this.geselecteerdeDienst = this.diensten[selectedServiceIndex];
        this.prijsPerKwartier = this.geselecteerdeDienst.ppk; // Update prijs per kwartier
        this.startTarief = this.geselecteerdeDienst.hasStartTarief ? this.geselecteerdeDienst.startTarief : 0; // Update starttarief
        this.hardwareTarief = this.geselecteerdeDienst ? this.geselecteerdeDienst.hardwareTarief : 0; // Update hardware tarief
    }

    render() {
        return html`
            <h2>Tarief Berekenen</h2>
            <label for="dienst">Selecteer dienst:</label>

            <select id="dienst" @change="${this.handleDienstChange}">
                <option value="" disabled selected>Selecteer een dienst</option>
                ${this.diensten ? this.diensten.map(
                        (dienst) => html`<option value="${dienst.type}">${dienst.type} - €${dienst.ppk} per kwartier</option>`
                ) : ''}
            </select>
            <p>${this.geselecteerdeDienst ? html`<strong>${this.geselecteerdeDienst.info}</strong>` : html`<strong>Geen dienst geselecteerd</strong>`}</p>
        <p>Weet u niet zeker of ik u kan helpen? Neem gerust contact met mij op!</p>
        <button>Contact</button>
        <hr>
        <p>Prijs per kwartier: <strong>€${this.prijsPerKwartier}</strong></p>
        <p>Starttarief: <strong>€${this.startTarief}</strong></p>
        <p>${this.hardwareTarief ? html`Hardware kosten: <strong>€${this.hardwareTarief}</strong>` : html`<strong></strong>`}</p>
        <label for="tijd">Voer de tijd in (kwartieren):</label>
        <input type="number" id="tijd" .value="${this.ingevoerdeTijd}" @input="${this.handleTijdChange}" min="1">
        <div id="totaalBedrag"><p><strong>Totaal bedrag: €${this.calculateCost()}</strong></p></div>
        <p>Er is sprake van minimaal 1 kwartier, daarna wordt er per kwartier gerekend.</p>
        <hr>
        <p><strong>Let op:</strong> dit is een schatting en kan variëren afhankelijk van de complexiteit van de dienst.</p>
        <p>Alle prijzen zijn inclusief BTW.</p>
    `;
    }
}

customElements.define('tarieven-element', TarievenComponent);
