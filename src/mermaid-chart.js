import { LitElement, html } from "lit";
import mermaid from "mermaid";

class MermaidChart extends LitElement {
  static properties = {
    source: {},
    config: {
      type: Object
    }
  }

  render() {
    return html`<div id="chart"></div>`;
  }

  get chartElement() {
    return this.shadowRoot.querySelector('#chart');
  }
  async updated() {
    mermaid.initialize(this.config);
    if (this.source) {
      const {svg, bindEvents} = await mermaid.render('mermaidChart', this.source);
      this.chartElement.innerHTML = svg;
    } else if (this.textContent) {
      const {svg, bindEvents} = await mermaid.render('mermaidChart', this.textContent);
      this.chartElement.innerHTML = svg;
    }
  }

}
customElements.define('mermaid-chart', MermaidChart);
export { MermaidChart };