import { LitElement, html, css } from 'lit';

class OverMijComponent extends LitElement {

    static get styles() {
        return css`
          :host {
            display: block;
          }

          #over-mij {
            background-color: var(--secondary-background-color);
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
            width: 20%;
            // Remove border-radius from img
            // margin-bottom: 20px;
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
        this.contactInformatie = "Heeft u nog vragen over mij en/of mijn diensten? Neem dan gerust contact met mij op via de onderstaande knop!";
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
          <p>Hallo, mijn naam is Chazz van den Hof, een enthousiaste 22-jarige student die op dit moment bezig is met het volgen van de opleiding HBO-ICT in het bruisende Utrecht. Mijn wortels liggen in het gezellige Hoofddorp, de plek waar ik mijn hele leven heb doorgebracht en waar ik veel waardevolle herinneringen heb opgebouwd.</p>
        <p>Mijn passie voor alles wat met IT of ICT te maken heeft, is grenzeloos. Ik omarm de wereld van informatietechnologie met open armen en mijn betrokkenheid strekt zich uit tot het assisteren van anderen bij uiteenlopende IT-gerelateerde uitdagingen. Of het nu gaat om het oplossen van problemen, het optimaliseren van laptops of het fine-tunen van audiosystemen, ik ben altijd bereid om een helpende hand te bieden.</p>

        <p>Het avontuur van studeren aan de HBO-ICT in Utrecht heeft mijn kennis aanzienlijk verdiept en mijn nieuwsgierigheid naar de nieuwste technologieën vergroot. Naast mijn academische inzet en mijn liefde voor alles wat met IT te maken heeft, vind ik vreugde en ontspanning in het leven in Hoofddorp. De dynamiek van deze stad, gecombineerd met mijn eigen persoonlijke groei, maken mijn tijd hier des te waardevoller en onvergetelijk.</p>

        <div id="contact-informatie">
            <p>${this.contactInformatie}</p>
            <a href="/contact"><button-element href="/contact" label="Contact"></button-element></a>
        </div>
      </div>
    `;
    }
}

customElements.define('over-mij-element', OverMijComponent);
