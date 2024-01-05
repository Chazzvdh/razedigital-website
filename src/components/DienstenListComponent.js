import { LitElement, html, css } from 'lit';
import dienstenData from '../data/dienstenData.json'; // Vervang 'jouw-bestandsnaam' door de daadwerkelijke naam van je JSON-bestand

class DienstenListComponent extends LitElement {
    static styles = css`
      ul {
        list-style-type: none;
        padding: 0;
      }
      
      #dienst {
        box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
        background-color: var(--secondary-background-color);
        padding: 10px;
        margin-bottom: 10px;
        border-radius: 5px;
      }
    `;

    constructor() {
        super();
        this.diensten = dienstenData.diensten;
    }

    render() {
        return html`
            <div id="dienst-info">
                <h2>Mijn Diensten</h2>
                ${this.diensten.map((dienst) => html`
                    <div id="dienst">
                        <h3>${dienst.type}</h3>
                        <p>${dienst.info}</p>
                        <p>Prijs per uur: ${dienst.ppk} euro</p>
                        <p>
                            Starttarief:
                            ${dienst.hasStartTarief ? html`${dienst.startTarief} euro` : 'Geen starttarief'}
                        </p>
                        ${dienst.type === 'Gegevensherstel' ? html`
                                <div>
                                  <p>Hardwaretarief: ${dienst.hardwareTarief} euro</p>
                                  <p>${dienst.extraInfo}</p>
                                  <p>${dienst.extraTarief}</p>
                                </div>` : ''}
                    </div>`)}
            </div>
        `;
    }
}

customElements.define('diensten-lijst-element', DienstenListComponent);
