// FooterComponent.js
import { LitElement, html, css } from 'lit';

class FooterComponent extends LitElement {
    static styles = css`
    :host {
      display: block;
      background-color: var(--secondary-background-color);
      box-shadow: 0 -5px 5px rgba(0, 0, 0, 0.1);
      padding: 20px;
      text-align: center;
    }

    h3 {
      color: #333;
    }

    p {
      margin: 5px 0;
      color: #555;
    }
  `;

    render() {
        return html`
      <h3>Contactinformatie</h3>
      <p>Adres: Bolivar 15, Hoofddorp</p>
      <p>Email: chazz@ziggo.nl</p>
      <p>Telefoon: +31 6 13640652</p>
    `;
    }
}

customElements.define('footer-element', FooterComponent);
