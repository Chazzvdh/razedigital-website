import { LitElement, html, css } from 'lit';

class WelcomeComponent extends LitElement {
    static styles = css`
        :host {
            display: block;
            padding: 20px;
            background-color: #fff;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
            border-radius: 8px;
        }
      
        section {
        }

        h2 {
            color: var(--primary-text-color);
        }
      
        p {
            font-size: 20px;
          color: var(--primary-text-color);
        }
      
      button {
        background-color: var(--primary-accent-color);
        color: var(--secondary-text-color);
        padding: 10px;
        border-radius: 5px;
        border: none;
        cursor: pointer;
        width: 50%;
        box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
      }
      
      #bellen {
        background-color: var(--secondary-background-color);
        color: var(--primary-text-color);
      }
      
      #bellen:hover {
        background-color: var(--dark-secondary-background-color);
      }
      
      button:hover {
        background-color: var(--dark-primary-accent-color);
      }
      #contact-div {
        display: flex;
        justify-content: space-evenly;
        gap: 5%;
      }
      a {
        color: var(--secondary-text-color);
        text-decoration: none;
      }
    `;

    handleClick(link) {
        window.location.href = link;
    }

    render() {
        return html`
            <section>
                <h2>Welkom bij <img class="logo" src="src/assets/razelogo-horizontal.svg" alt="raze-logo" width="200px"><br>IT Ondersteuning, waar ik technische uitdagingen omzet in oplossingen!</h2>

                <p>
                    Hallo! mijn naam is Chazz van den Hof, een enthousiaste 22-jarige HBO-ICT student uit Hoofddorp.
                    Ik ben gepassioneerd over alles wat met IT te maken heeft en bied professionele IT-diensten aan om mensen te ondersteunen bij hun technologische behoeften.
                    Mijn benadering is vergelijkbaar met "student aan huis", waarbij ik mijn expertise deel om u te helpen bij IT-problemen en vragen.
                </p>
                <p>
                    Of u nu hulp nodig heeft bij het oplossen van computerproblemen, het instellen van smartphones, of andere technologische uitdagingen,
                    ik sta klaar om u bij te staan. Mijn doel is om uw digitale ervaring te verbeteren en u zelfverzekerd te maken in het omgaan met moderne technologieën.
                    En het beste deel? Mijn diensten zijn aanzienlijk voordeliger dan de meeste andere services die er zijn.
                </p>
                <p>
                    Heb je problemen met je computer? Snap je niets van je nieuwe smartphone?
                    Geen zorgen, ik ben hier om te helpen. Denk aan mij als die vriend die altijd handig is met technologie, en dat alles tegen een vriendelijke prijs.
                </p>
                <p>
                    Neem gerust contact met mij op voor persoonlijke en vriendelijke IT-ondersteuning.
                    Ik kijk ernaar uit om samen met u aan de slag te gaan en oplossingen te vinden voor uw specifieke behoeften.
                    Laten we samen werken aan het optimaliseren van uw digitale wereld!
                </p>
                <div id="contact-div">
                    <button id="afspraak" @click="${() => this.handleClick('afspraak-maken')}">Maak een afspraak</button>
                    <button id="bellen" @click="${() => this.handleClick('tel:0613640652')}">Belt u liever?</button>
                </div>
            </section>
        `;
    }
}

customElements.define('welcome-element', WelcomeComponent);
