import { LitElement, html, css } from 'lit';
import dienstenData from './dienstenData.json'; // Vervang 'jouw-bestandsnaam' door de daadwerkelijke naam van je JSON-bestand

class DienstenListComponent extends LitElement {
    static styles = css`
      ul {
        list-style-type: none;
        padding: 0;
      }
    `;

    constructor() {
        super();
        this.diensten = dienstenData.diensten;
    }

    render() {
        return html`
            <ul>
                ${this.diensten.map(dienst => html`
                    <dienst-element
                        type="${dienst.type}"
                        info="${dienst.info}"
                        ppk="${dienst.ppk}"
                        startTarief="${dienst.startTarief}"
                        .hasStartTarief="${dienst.hasStartTarief}"
                        hardwareTarief="${dienst.hardwareTarief || 0}"
                        extraTarief="${dienst.extraTarief || ''}"
                        extraInfo="${dienst.extraInfo || ''}"
                    ></dienst-element>
                `)}
            </ul>
        `;
    }
}

customElements.define('diensten-lijst-element', DienstenListComponent);
