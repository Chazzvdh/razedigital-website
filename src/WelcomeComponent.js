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
        }
    `;

    render() {
        return html`
            <section>
                <h2>Welkom bij Raze Digital, waar we technische uitdagingen omzetten in oplossingen!</h2>
                
                <p>
                    Professionele IT-Ondersteuning - Vertrouwd, Vriendelijk en Voordelig
                </p>
                <p>
                    Mijn naam is Chazz van den Hof, een enthousiaste 22-jarige HBO-ICT student uit Hoofddorp.
                    Ik ben gepassioneerd over alles wat met IT te maken heeft en bied professionele IT-diensten aan om mensen te ondersteunen bij hun technologische behoeften.
                    Mijn benadering is vergelijkbaar met een "student aan huis", waarbij ik mijn expertise deel om u te helpen bij IT-problemen en vragen.
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
            </section>
        `;
    }
}

customElements.define('welcome-element', WelcomeComponent);
