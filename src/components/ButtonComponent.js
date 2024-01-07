import { LitElement, html, css } from 'lit';
class ButtonComponent extends LitElement {

    static styles = css`
      button {
        background-color: var(--primary-accent-color);
        color: var(--secondary-text-color);
        padding: 10px;
        border-radius: 5px;
        border: none;
        cursor: pointer;
        width: 50%;
        font-size: 100%;
        box-shadow: var(--box-shadow-settings);
      }

      button:hover {
        background-color: var(--dark-primary-accent-color);
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