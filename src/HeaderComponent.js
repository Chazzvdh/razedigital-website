import { LitElement, html, css } from "lit";

class HeaderComponent extends LitElement {
    static styles = css`
        :host {
            display: flex;
            align-items: center;
            justify-content: left;
            padding: 20px;
            background-color: white;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
            border-radius: 8px;
        }
        `;

    render() {
        return html`
        <a href="/"><img src="src/assets/razelogo.svg" alt="RAZE-DIGITAL" width="100"></a>
        <button-container-element></button-container-element>
        `;
    }
}

customElements.define("header-element", HeaderComponent);