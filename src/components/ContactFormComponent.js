import { LitElement, html, css } from 'lit';

class ContactFormComponent extends LitElement {
    static styles = css`
    :host {
  
    }
    form {
      display: flex;
      flex-direction: column;
      margin: auto;
    }

    #contact-form {
      background-color: var(--secondary-background-color);
      padding: 20px;
      border-radius: 5px;
      box-shadow: var(--box-shadow-settings);
      margin: 0 20%;
    }
      
      @media (max-width: 768px) {
        #contact-form {
          margin: 0;
        }
      }

    label {
      margin-bottom: 8px;
    }

    input, textarea, select {
      margin-bottom: 16px;
      padding: 8px;
      border: 1px solid #ccc;
      border-radius: 4px;
    }
      
    //  wrong input border color
    input:invalid {
      border-color: var(--danger-color);
    }

    textarea {
      min-height: 30vh;
    }

    button {
      padding: 8px 16px;
      background-color: var(--primary-accent-color);
      color: white;
      border: none;
      border-radius: 4px;
      cursor: pointer;
    }

    button:hover {
      background-color: var(--dark-primary-accent-color);
    }
      
    p {
        margin: 5px 0;
    }
  `;

    static properties = {
        diensten: { type: Array },
        selectedDienst: { type: Object },
    };

    constructor() {
        super();
        this.diensten = [];
        this.selectedDienst = null;
        this.loadDiensten(); // Roep de methode aan om diensten te laden bij het initialiseren van het component
    }

    async loadDiensten() {
        try {
            const response = await fetch('src/data/dienstenData.json'); // Pas het pad aan naar de locatie van je JSON-bestand
            const data = await response.json();
            this.diensten = data.diensten || [];
        } catch (error) {
            console.error('Fout bij het laden van diensten:', error);
        }
    }

    render() {
        return html`
      <div id="contact-form">
        <form @submit="${this._handleSubmit}">
            <h2>Contactformulier</h2>
            <p>Heeft u een vraag of wilt u een afspraak maken? Vul dan onderstaand formulier in en ik neem zo snel mogelijk contact met u op.</p>
            
            <h3>Uw gegevens:</h3>
            <input type="text" id="name" name="name" required placeholder="Naam">
            <input type="tel" id="telefoonnummer" name="telefoonnummer" required placeholder="Telefoonnummer">
            <input type="email" id="email" name="email" required placeholder="E-mail">
            <input type="text" id="postcode" name="postcode" required placeholder="Postcode">

          <label for="selectedDienst">Welke dienst komt het meest overeen met uw vraag?</label>
          <select id="selectedDienst" name="selectedDienst" @change="${this._handleDienstChange}" required>
            <option value="" disabled selected>Selecteer een dienst</option>
            ${this.diensten.map(dienst => html`<option value="${JSON.stringify(dienst)}">${dienst.type}</option>`)}
          </select>

            <p>Uw gegevens worden alleen gebruikt om contact met u op te nemen en worden niet opgeslagen.</p>
            
            <hr>

            <label for="message">Probleemomschrijving en/of vraag:</label>
          <textarea id="message" name="message" rows="4" required></textarea>

          <button type="submit">Verstuur</button>
            <p>Heeft u liever telefonisch contact? Bel dan naar <a href="tel:0613640652">0613640652</a></p>
            <p>Door dit formulier te versturen gaat u akkoord met de <a href="./privacyverklaring">privacyverklaring</a></p>
        </form>
      </div>
    `;
    }

    _handleDienstChange(event) {
        const selectedDienstJson = event.target.value;
        this.selectedDienst = selectedDienstJson ? JSON.parse(selectedDienstJson) : null;
    }

    _handleSubmit(event) {
        event.preventDefault();

        const formData = new FormData(event.target);
        const data = {};
        formData.forEach((value, key) => {
            data[key] = value;
        });

        if (this.selectedDienst) {
            data.selectedDienst = this.selectedDienst;
        }

        // Hier kun je de verzamelde data gebruiken, bijvoorbeeld door het naar een API te sturen
        console.log('Formulier ingediend:', data);
    }
}

customElements.define('contact-form-element', ContactFormComponent);
