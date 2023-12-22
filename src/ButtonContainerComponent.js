import { LitElement, html, css } from 'lit';

class ButtonContainerComponent extends LitElement {
    static styles = css`
    :host {
      display: flex;
      align-items: center;
    }

    button {
      margin-right: 10px;
      padding: 8px 16px;
      font-size: 100%;
      cursor: pointer;
    }
    
    button:first-child {
      margin-left: 10px;
      background-color: #007bff;
    }
      
    button:last-child {
      margin-right: 0;
    }
  `;

    render() {
        return html`
      <button>Button 1</button>
      <button>Button 2</button>
      <button>Button 3</button>
      <button>Button 4</button>
    `;
    }
}

customElements.define('button-container-element', ButtonContainerComponent);
