import { LitElement, html, css } from 'lit';

class OverMijComponent extends LitElement {

    static get styles() {
        return css`
          :host {
            display: block;
          }

          #over-mij {
            background-color: var(--secondary-background-color);
            max-width: 1000px;
            margin: 0 auto;
            padding: 20px;
            border-radius: 5px;
            overflow: hidden; /* Voeg overflow: hidden toe om floats te beheren */
            box-shadow: var(--box-shadow-settings);
          }

          h1 {
            color: var(--primary-text-color);
            margin-bottom: 15px;
          }

          img {
            width: 30%;
            border-radius: 5%;
            //margin-bottom: 20px;
            float: left; /* Laat de afbeelding naar links zweven */
            margin-right: 20px; /* Voeg wat ruimte aan de rechterkant van de afbeelding toe */
          }
          
          

          p {
            margin-bottom: 10px;
            font-size: 20px;
            color: var(--primary-text-color);
          }

          #contact-informatie {
            margin-top: 20px;
            display: flex;
            flex-direction: column;
            clear: both; /* Voeg clear: both toe om ervoor te zorgen dat de tekst niet naast de afbeelding komt */
          }
        `;
    }

    static get properties() {
        return {
            naam: { type: String },
            leeftijd: { type: Number },
            studie: { type: String },
            woonplaats: { type: String },
            interesses: { type: String },
            contactInformatie: { type: String },
            fotoUrl: { type: String },
        };
    }

    constructor() {
        super();
        this.naam = "Chazz van den Hof";
        this.leeftijd = 22;
        this.studie = "HBO-ICT in Utrecht";
        this.woonplaats = "Hoofddorp";
        this.interesses = "Alles wat met IT of ICT te maken heeft";
        this.contactInformatie = "Heeft u nog vragen of wilt u meer informatie? Neem dan gerust contact met mij op!";
        // Voeg hier de URL naar jouw foto toe
        this.fotoUrl = "src/assets/chazz.jpeg";
    }

    render() {
        return html`
      <div id="over-mij">
        <h1>Wie ben ik?</h1>
          <div id="img-div">
              <img src="${this.fotoUrl}" alt="Chazz van den Hof">
          </div>
        <p>Hallo, ik ben ${this.naam}, een ${this.leeftijd}-jarige student die momenteel ${this.studie} studeert. Mijn roots liggen in het gezellige Hoofddorp, waar ik mijn hele leven heb gewoond.</p>

        <p>Als gepassioneerde IT-liefhebber omarm ik alles wat met IT of ICT te maken heeft. Mijn dienstverlening strekt zich uit tot het helpen van anderen met verschillende IT-gerelateerde uitdagingen. Of het nu gaat om problemen oplossen, laptops of audiosystemen, ik sta altijd klaar om te assisteren.</p>

        <p>Studeren aan de HBO-ICT in Utrecht heeft mijn kennis verdiept en mijn nieuwsgierigheid naar de nieuwste technologieën vergroot. Buiten mijn studie en IT-passies geniet ik van het leven in Hoofddorp.</p>

        <div id="contact-informatie">
            <p>${this.contactInformatie}</p>
            <a href="/contact"><button-element href="/contact" label="Contact"></button-element></a>
        </div>
      </div>
    `;
    }
}

customElements.define('over-mij-element', OverMijComponent);
