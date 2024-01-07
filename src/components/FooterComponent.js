// FooterComponent.js
import { LitElement, html, css } from 'lit';
import '/src/assets/hulpaanhuis-large-eu.svg';
import '/src/assets/razelogo-horizontal.svg';

class FooterComponent extends LitElement {
    static styles = css`
      :host {
        display: grid;
        grid-template-areas:
        'left contact-info branding-info right';
        grid-template-columns: 1fr 1fr 1fr 1fr;
        grid-template-rows: 1fr 1px;
        background-color: var(--secondary-background-color);
        box-shadow: var(--box-shadow-settings);
        padding: 10px 10vh 10px 10vh;
        text-align: center;
      }
      
      @media (max-width: 1000px) {
        :host {
          display: grid;
            grid-template-areas:
            'left right'
            'contact-info branding-info';
          grid-template-columns: 1fr 1fr;
          grid-template-rows: 1fr 1fr;
          padding: 20px;
        }
      }
      
      @media (max-width: 500px) {
        :host {
          display: grid;
            grid-template-areas:
            'left right'
            'branding-info branding-info'
            'contact-info contact-info';
          grid-template-columns: 1fr 1fr;
          grid-template-rows: 1fr 1fr 1fr;
          padding: 20px;
        }
      }

      #left {
        grid-area: left;
      }

      #right {
        grid-area: right;
      }
      
      #left, #right {
        margin: 0 10%;
      }
      
      .info-card {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
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

      #contact-info {
        grid-area: contact-info;
        display: flex;
        flex-direction: column;
        align-items: center;
      }
      
      #branding-info {
        grid-area: branding-info;
        gap: 5px;
      }

      h3 {
        color: #333;
        margin: 0;
      }

      p {
        margin: 5px 0;
        color: #555;
      }
      
      #madeby {
        font-size: 10px;
      }
    `;


    render() {
        return html`
      <div class="info-card" id="contact-info">
        <p>Adres: Bolivar 15, Hoofddorp</p>
        <p>Email: chazz@ziggo.nl</p>
        <p>Telefoon: 06 13640652</p>
        <p>KVK Nummer: 12345678</p>
      </div>
      <div class="info-card" id="branding-info">
          <img src="src/assets/hulpaanhuis-large-eu.svg" alt="" width="200px">
          <p>beheerd door</p>
          <img src="src/assets/razelogo-horizontal.svg" alt="" width="150px">
          <p id="madeby">Website gemaakt door Chazz van den Hof</p>
      </div>
      <div class="info-card" id="left">
          <h3>Links</h3>
          <a href="/diensten">Diensten</a>
          <a href="/tarieven">Tarieven</a>
          <a href="/faq">FAQ</a>
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
