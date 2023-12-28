import { LitElement, html, css } from 'lit';

class DienstenListComponent extends LitElement {
    static styles = css`
    ul {
      list-style-type: none;
      padding: 0;
    }
  `;

    constructor() {
        super();
    }

    render() {
        return html`
      <ul>
        <dienst-element type="Computeronderhoud" info="Systeemoptimalisatie en versnelling, schijfopruiming en defragmentatie, software-updates en -upgrades." ppu="30"></dienst-element>
        <dienst-element type="Probleemoplossing en reparatie" info="Identificatie en oplossen van softwareproblemen, vervanging van hardwarecomponenten, diagnose en reparatie van hardwarestoringen."></dienst-element>
        <dienst-element type="Virussen en malware verwijderen" info="Scan en verwijdering van virussen en malware, installatie van antivirusprogramma's en beveiligingssoftware."></dienst-element>
        <dienst-element type="Gegevensback-up en -herstel" info="Opzetten van geautomatiseerde back-ups, herstellen van verloren of verwijderde gegevens."></dienst-element>
        <dienst-element type="Software-installatie en configuratie" info="Installatie van besturingssystemen, configuratie van softwaretoepassingen, installatie van drivers en updates."></dienst-element>
        <dienst-element type="Netwerkproblemen oplossen" info="Probleemoplossing bij internetconnectiviteit, configuratie van wifi-netwerken en routers, oplossen van netwerkconflicten."></dienst-element>
        <dienst-element type="Computerbeveiliging" info="Advies geven over sterke wachtwoorden en beveiligingspraktijken, installatie van firewalls en beveiligingssoftware, beveiligingsaudits uitvoeren."></dienst-element>
        <dienst-element type="Training en begeleiding" info="Basisopleiding in computergebruik, instructies geven over specifieke softwaretoepassingen, hulp bieden bij het gebruik van nieuwe technologieën."></dienst-element>
        <dienst-element type="Hardwareadvies" info="Advies geven bij de aanschaf van nieuwe apparatuur, upgradeadvies voor bestaande hardware, assemblage van op maat gemaakte computersystemen."></dienst-element>
        <dienst-element type="Remote support" info="Bieden van technische ondersteuning op afstand, configuratie van externe toegang tot computers."></dienst-element>
      </ul>
    `;
    }
}

customElements.define('diensten-lijst-element', DienstenListComponent);
