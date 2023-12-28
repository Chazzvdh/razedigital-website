import {css, html, LitElement} from 'lit';

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

    input {
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
  `;

    static properties = {
        prijsPerKwartier: { type: Number },
        startTarief: { type: Number },
        ingevoerdeTijd: { type: Number },
    };

    constructor() {
        super();
        this.prijsPerKwartier = 10; // Vervang dit met jouw tarief per kwartier
        this.startTarief = 5; // Vervang dit met jouw voorrijkosten
        this.ingevoerdeTijd = 0;
    }

    updated(changedProperties) {
        if (changedProperties.has('ingevoerdeTijd') || changedProperties.has('extraKosten')) {
            this.dispatchEvent(new CustomEvent('calculate', {
                detail: { totalCost: this.calculateCost() },
                bubbles: true,
                composed: true,
            }));
        }
    }

    calculateCost() {
        const ppq = this.prijsPerKwartier * this.ingevoerdeTijd;
        return ppq + this.startTarief;
    }

    handleTijdChange(e) {
        this.ingevoerdeTijd = parseInt(e.target.value) || 0;
    }

    render() {
        return html`
      <h2>Tarief Berekenen</h2>
      <p>Tarief per kwartier: <strong>€${this.prijsPerKwartier}</strong></p>
      <p>Starttarief: <strong>€${this.startTarief}</strong></p>
      <label for="tijd">Voer de tijd in (kwartieren):</label>
      <input type="number" id="tijd" .value="${this.ingevoerdeTijd}" @input="${this.handleTijdChange}">
      <div id="totaalBedrag"><p><strong>Totaal bedrag: €${this.calculateCost()}</strong></p></div>
    `;
    }
}

customElements.define('tarieven-element', TarievenComponent);
