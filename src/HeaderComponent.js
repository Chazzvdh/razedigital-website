import { LitElement, html, css } from 'lit';

class HeaderComponent extends LitElement {

    static styles = css`
    :host {
      display: block;
    }

    header {
      display: flex;
      justify-content: left;
      background-color: var(--primary-background-color);
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
      color: white;
      padding-right: 50vh;
    }

    @media (max-width: 768px) {
      header {
        flex-direction: column;
        align-items: center;
        padding-right: 0;
      }
    }

    img {
      width: 150px; /* Adjust the height as needed */
      padding: 20px;
    }
      
    button-element {
      width: 100%;
    }
  `;

    render() {
        return html`
      <header>
        <img src="src/assets/razelogo.svg" alt="Your Logo">
        <button-element href="./diensten" label="Diensten"></button-element>
        <button-element href="./over-ons" label="Over ons"></button-element>
        <button-element href="./afspraak-maken" label="Afspraak maken"></button-element>
        <button-element href="./tarieven" label="Tarieven"></button-element>
        <button-element href="./contact" label="Contact"></button-element>
      </header>
    `;
    }
}

customElements.define('header-element', HeaderComponent);