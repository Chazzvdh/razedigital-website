import { LitElement, html, css } from 'lit';
class ButtonComponent extends LitElement {

    static styles = css`
    button {
      background-color: var(--primary-background-color);
      color: var(--primary-text-color);
      border: none;
      flex: 1;
      cursor: pointer;
      transition: 0.2s ease-in-out;
      font-size: 150%;
      position: relative;
      height: 100%;
      width: 100%;
    }

    button::before {
      content: "";
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 3px;
      background-color: var(--primary-accent-color);
      transform: scaleX(0);
      transition: transform 0.3s ease-out;
    }

    button:hover::before {
      transform: scaleX(1);
    }

    button:hover {
      background-color: var(--secondary-background-color);
    }
  `;

    static properties = {
        label: { type: String },
        href: { type: String }
    };

    render() {
        return html`<button @click="${this.handleButtonClick}">${this.label}</button>`;
    }

    handleButtonClick() {
        window.location.href = this.href;
    }
}

customElements.define('button-element', ButtonComponent);