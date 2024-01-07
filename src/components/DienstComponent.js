import { LitElement, html, css } from 'lit';

class DienstComponent extends LitElement {
    static properties = {
        type: { type: String },
        info: { type: String },
        ppk: { type: Number },
        startTarief: { type: Number },
        hasStartTarief: { type: Boolean },
        hardwareTarief: { type: Number },
        extraTarief: { type: String },
        extraInfo: { type: String }
    };

    constructor() {
        super();
        this.type = 'Dienst';
        this.info = 'Beschrijving';
        this.ppk = 0;
        this.startTarief = 0;
        this.hasStartTarief = true;
        this.hardwareTarief = 0;
        this.extraTarief = '';
        this.extraInfo = '';
    }

    static styles = css`
      li {

      }

      div {
        background-color: var(--secondary-background-color);
        color: var(--primary-text-color);
        padding: 10px;
        margin-bottom: 10px;
        
        box-shadow: var(--box-shadow-settings);

        border-radius: 5px;
      }
    `;

    render() {
        return html`
            <div>      
                <li>
                    <strong><h3>${this.type}</h3></strong>
                    <p>${this.info}</p>
                    ${this.hasStartTarief ? html`<p><strong>€${this.ppk} per kwartier + €${this.startTarief} starttarief</strong></p>` : html`<p><strong>€${this.ppk} per kwartier</strong></p>`}
                    ${this.hardwareTarief ? html`<p><strong>Optionele Hardwarekosten: €${this.hardwareTarief}</strong></p>` : ''}
                    ${this.extraTarief ? html`<p>${this.extraTarief}</p>` : ''}
                    ${this.extraInfo ? html`<p>${this.extraInfo}</p>` : ''}
                </li>
            </div>
        `;
    }
}

customElements.define('dienst-element', DienstComponent);