import { LitElement, html, css } from 'lit';
import '/src/assets/hulpaanhuis-mid.svg';

class HeaderComponent extends LitElement {

    static styles = css`
    :host {
      display: grid;
      grid-template-columns: 1fr 1fr;
      
      justify-content: left;
      background-color: var(--secondary-background-color);
      box-shadow: var(--box-shadow-settings);
      color: white;
    }

      #dark-mode-button {
        cursor: pointer;
      }


      #header-buttons {
      display: flex;
    }
      
    #header-contact {
        display: flex;
        justify-content: right;
        align-items: center;
        gap: 5%;
    }

    @media (max-width: 768px) {
      :host {
        flex-direction: column;
        grid-template-columns: 1fr;
        padding-right: 0;
      }

      #header-buttons {
        display: flex;
        flex-direction: column;
        align-items: center;
      }

      #header-contact {
        display: none;
      }
      
    }

    img {
      width: 100px; /* Adjust the height as needed */
      padding: 20px;
    }
      
    button-element {
      width: 100%;
      white-space: nowrap;
    }
  `;

    toggleDarkMode() {
        const body = document.body;
        const isDarkMode = body.classList.toggle('dark-mode');

        // Pas de kleurwaarden van :root aan afhankelijk van dark mode
        document.documentElement.style.setProperty('--primary-background-color', isDarkMode ? '#333' : 'rgba(128, 128, 128, 0)');
        document.documentElement.style.setProperty('--secondary-background-color', isDarkMode ? '#1a1a1a' : '#fff');
        document.documentElement.style.setProperty('--dark-secondary-background-color', isDarkMode ? '#333' : '#f8f9fa');
        document.documentElement.style.setProperty('--primary-text-color', isDarkMode ? '#fff' : '#333');
        document.documentElement.style.setProperty('--secondary-text-color', isDarkMode ? '#333' : '#fff');
        document.documentElement.style.setProperty('--primary-accent-color', isDarkMode ? '#617772' : '#7F9C96');
        // ... (en andere kleuren)

        // Voeg eventuele andere logica toe voor het aanpassen van stijlen op andere plaatsen in de app
    }

    render() {
        return html`
            <div id="header-buttons">
                <a href="/"> <!-- Add the link to the home page -->
                    <img src="./src/assets/hulpaanhuis-mid.svg" alt="Your Logo">
                </a>
                <header-button-element href="/diensten" label="Diensten"></header-button-element>
                <header-button-element href="./tarieven" label="Tarieven"></header-button-element>
                <header-button-element href="./over-mij" label="Over mij"></header-button-element>
                <header-button-element href="./contact" label="Contact"></header-button-element>
                <header-button-element href="./faq" label="FAQ"></header-button-element>
<!--                <button id="dark-mode-button" @click="${this.toggleDarkMode}">Dark Mode</button>-->
            </div>
            <div id="header-contact">
                <a href="tel:0613640652">Liever bellen?<br>0613640652</a>
                <a href="mailto:chazz@iggo.nl"></a>
            </div>

        `;
    }
}

customElements.define('header-element', HeaderComponent);