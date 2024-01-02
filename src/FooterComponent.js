// FooterComponent.js
import { LitElement, html, css } from 'lit';

class FooterComponent extends LitElement {
    static styles = css`
    :host {
      display: grid;
      grid-template-areas:
        'contact-info contact-info contact-info';
      background-color: var(--secondary-background-color);
      box-shadow: 0 -5px 5px rgba(0, 0, 0, 0.1);
      padding: 20px;
      text-align: center;
    }

    .contact-info {
      grid-area: contact-info;

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
      <div class="contact-info">
        <h3>Contactinformatie</h3>
        <p>Adres: Bolivar 15, Hoofddorp</p>
        <p>Email: chazz@ziggo.nl</p>
        <p>Telefoon: 06 13640652</p>
        <p>KVK Nummer: 12345678</p>
      </div>
    `;
    }
}

customElements.define('footer-element', FooterComponent);
