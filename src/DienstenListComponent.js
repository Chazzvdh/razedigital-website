import { LitElement, html, css } from 'lit';
import dienstenData from './dienstenData.json';

class DienstenListComponent extends LitElement {
    static styles = css`
        ul {
            list-style-type: none;
            padding: 0;
        }
    `;

    constructor() {
        super();
    }

    render() {
        return html`
            <ul>
                ${dienstenData.diensten.map(dienst => html`
                    <dienst-element
                        type="${dienst.type}"
                        info="${dienst.info}"
                        ppk="${dienst.ppk}"
                        .hasStartTarief="${dienst.hasStartTarief}"
                    ></dienst-element>
                `)}
            </ul>
        `;
    }
}

customElements.define('diensten-lijst-element', DienstenListComponent);
