import { LitElement, html, css } from "lit-element";

class ConduitApp extends LitElement {
  render() {
    return html`
      <h1>Hello World from indra-dev</h1>
    `;
  }
}

customElements.define("conduit-app", ConduitApp);
