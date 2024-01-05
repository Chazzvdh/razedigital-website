import {LitElement, html, css} from "lit";

class SideComponent extends LitElement {
    static styles = css`
        :host {
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: left;
            padding: 20px;
            height: 100%;
        }
      `;
    render() {
        return html`
            
        `;
    }
}

customElements.define("side-element", SideComponent);