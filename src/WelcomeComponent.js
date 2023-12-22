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

        h2 {
            color: var(--primary-accent-color);
        }
      
    `;

    render() {
        return html`
            <section>
                <h2>Welkom bij RAZE</h2>
                <p>Mijn naam is Chazz van den Hof, een enthousiaste 22-jarige HBO-ICT student uit Hoofddorp. Ik bied professionele IT-diensten aan om mensen te ondersteunen bij hun technologische behoeften. Mijn benadering is vergelijkbaar met "student aan huis", waarbij ik mijn expertise deel om u te helpen bij IT-problemen en vragen.</p>
                <p>Of u nu hulp nodig heeft bij het oplossen van computerproblemen, het instellen van smartphones of andere technologische uitdagingen, ik sta klaar om u bij te staan. Neem gerust contact met mij op voor persoonlijke en vriendelijke IT-ondersteuning.</p>
            </section>
        `;
    }
}

customElements.define('welcome-element', WelcomeComponent);