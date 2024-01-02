import { LitElement, html, css } from 'lit';

class HeaderComponent extends LitElement {

    static styles = css`
    :host {
      display: flex;
      justify-content: left;
      background-color: var(--secondary-background-color);
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
      color: white;
      padding-right: 50vh;
    }

    header {

    }

    @media (max-width: 768px) {
      :host {
        flex-direction: column;
        align-items: center;
        padding-right: 0;
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

    render() {
        return html`
          <a href="./"> <!-- Add the link to the home page -->
              <img src="src/assets/razelogo-vertical.svg" alt="Your Logo">
          </a>
        <button-element href="./diensten" label="Diensten"></button-element>
        <button-element href="./tarieven" label="Tarieven"></button-element>
        <button-element href="./over-mij" label="Over mij"></button-element>
        <button-element href="./afspraak-maken" label="Afspraak maken"></button-element>
        <button-element href="./contact" label="Contact"></button-element>
    `;
    }
}

customElements.define('header-element', HeaderComponent);