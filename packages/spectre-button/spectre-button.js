import { LitElement, render, html } from "lit-element";
import { classMap } from "lit-html/directives/class-map.js";

const defaultClasses = {
  btn: true
};

class SpectreButton extends LitElement {
  static get properties() {
    return {
      text: {
        type: String
      },
      theme: {
        type: String
      },
      classes: {
        type: Object
      }
    };
  }

  constructor() {
    super();
    this.text = "";
    this.classes = {
      ...defaultClasses
    };
  }

  updated(changedProps) {
    if (changedProps.has("theme")) {
      this.classes = {
        ...this.classes,
        btn: true
      };
      if (this.theme === "primary") {
        const classes = { ...defaultClasses };
        classes["btn-primary"] = true;
        this.classes = { ...classes };
      } else if (this.theme === "success") {
        const classes = { ...defaultClasses };
        classes["btn-success"] = true;
        this.classes = { ...classes };
      } else if (this.theme === "error") {
        const classes = { ...defaultClasses };
        classes["btn-error"] = true;
        this.classes = { ...classes };
      } else if (this.theme === "default") {
        this.classes = { ...defaultClasses };
      }
    }
  }

  render() {
    return html`
      <link
        rel="stylesheet"
        href="https://unpkg.com/spectre.css/dist/spectre.min.css"
      />
      <button class=${classMap(this.classes)}>${this.text}</button>
    `;
  }
}

customElements.define("spectre-button", SpectreButton);
