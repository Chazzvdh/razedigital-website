import { LitElement, html, css } from 'lit';

class DienstComponent extends LitElement {
    static properties = {
        type: { type: String },
        info: { type: String },
        ppu: { type: Number }
    };

    constructor() {
        super();
        this.type = 'Dienst';
        this.info = 'Beschrijving';
        this.ppu = 0;
    }

    static styles = css`
    li {
      
    }
      
      div {
        background-color: var(--secondary-background-color);
        color: var(--primary-text-color);
        padding: 10px;
        margin-bottom: 10px;
        
        border-radius: 5px;;
      }
  `;

    render() {
        return html`
            <div>      
                <li>
                    <strong><h3>${this.type}</h3></strong>
                    <p>${this.info}</p>
                    <p><strong>€${this.ppu} per uur</strong></p>
                </li>
            </div>

    `;
    }
}

customElements.define('dienst-element', DienstComponent);