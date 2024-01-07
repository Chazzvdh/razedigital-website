// FooterComponent.js
import { LitElement, html, css } from 'lit';
import '/src/assets/hulpaanhuis-large-eu.svg';
import '/src/assets/razelogo-horizontal.svg';

class FooterComponent extends LitElement {
    static styles = css`
      :host {
        display: grid;
        grid-template-areas:
        'left contact-info right';
        grid-template-columns: 1fr 4fr 1fr;
        background-color: var(--secondary-background-color);
        box-shadow: var(--box-shadow-settings);
        padding: 10px 20vh 10px 20vh;
        text-align: center;
      }
      
      @media (max-width: 768px) {
        :host {
          display: grid;
            grid-template-areas:
            'left right'
            'contact-info contact-info';
          grid-template-rows: 1fr;
          grid-template-columns: 1fr 1fr;
          padding: 20px;
        }
      }

      #left {
        grid-area: left;
      }

      #right {
        grid-area: right;
      }
      
      .info-card {
        display: flex;
        flex-direction: column;
        align-items: center;
      }
      
      .info-card a {
        color: var(--secondary-text-color);
        text-decoration: none;
        margin-bottom: 5px;
        background-color: var(--primary-accent-color);
        padding: 5px;
        width: 90%;
        border-radius: 5px;
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
          <img src="src/assets/hulpaanhuis-large-eu.svg" alt="" width="200px">
        <p>Adres: Bolivar 15, Hoofddorp</p>
        <p>Email: chazz@ziggo.nl</p>
        <p>Telefoon: 06 13640652</p>
        <p>KVK Nummer: 12345678</p>
          <img src="src/assets/razelogo-horizontal.svg" alt="" width="150px">
      </div>
      <div class="info-card" id="left">
          <h3>Links</h3>
          <a href="#">Home</a>
          <a href="#">Diensten</a>
          <a href="#">Portfolio</a>
      </div>
      <div class="info-card" id="right">
          <h3>Social Media</h3>
          <a href="https://www.facebook.com/" target="_blank">Facebook</a>
          <a href="https://twitter.com/">Twitter</a>
          <a href="https://www.instagram.com/">Instagram</a>
      </div>

        `;
    }
}

customElements.define('footer-element', FooterComponent);
