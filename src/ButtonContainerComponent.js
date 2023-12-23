import { LitElement, html, css } from 'lit';

class ButtonContainerComponent extends LitElement {
    static styles = css`
    :host {
      display: flex;
      align-items: center;
    }

    button {
      padding: 8px 16px;
      font-size: 100%;
      cursor: pointer;
      height: 100%;
      border: none;
    }
    
    button:first-child {
      background-color: #007bff;
    }
      
    button:last-child {
    }
  `;

    render() {
        return html`
      <button>Home</button>
      <button>Services</button>
      <button>Prijzen</button>
      <button>Informatie</button>
    `;
    }
}

customElements.define('button-container-element', ButtonContainerComponent);
