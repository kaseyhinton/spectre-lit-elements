import { LitElement, render, html, css } from "lit-element";
import { classMap } from "lit-html/directives/class-map.js";

const defaultButtonClasses = {
  btn: true
};

const defaultIconClasses = {
  icon: true
};

class SpectreButton extends LitElement {
  static get properties() {
    return {
      text: {
        type: String
      },
      loading: {
        type: Boolean
      },
      icon: {
        type: String
      },
      theme: {
        type: String
      },
      size: {
        type: String
      },
      shape: {
        type: String
      },
      buttonClasses: {
        type: Object
      },
      iconClasses: {
        type: Object
      }
    };
  }

  constructor() {
    super();
    this.text = "";
    this.loading = false;
    this.buttonClasses = {
      ...defaultButtonClasses
    };
    this.iconClasses = {
      ...defaultIconClasses
    };
  }

  _setButtonCSSClass(newCSSClass) {
    const temp = {};
    temp[newCSSClass] = true;
    this.buttonClasses = { ...this.buttonClasses, ...temp };
  }

  _setIconCSSClass(newCSSClass) {
    const temp = {};
    temp[newCSSClass] = true;
    this.iconClasses = { ...this.iconClasses, ...temp };
  }

  updated(changedProps) {
    if (
      changedProps.has("theme") ||
      changedProps.has("size") ||
      changedProps.has("loading") ||
      changedProps.has("shape")
    ) {
      this.buttonClasses = {
        ...defaultButtonClasses
      };

      this.iconClasses = {};

      if (this.loading) {
        this._setButtonCSSClass("loading");
      }

      if (this.icon) {
        this.iconClasses = { ...defaultIconClasses };
        this._setIconCSSClass(`icon-${this.icon}`);
      }

      switch (this.theme) {
        case "primary":
          this._setButtonCSSClass("btn-primary");
          break;
        case "success":
          this._setButtonCSSClass("btn-success");
          break;
        case "error":
          this._setButtonCSSClass("btn-error");
          break;
      }

      switch (this.size) {
        case "small":
          this._setButtonCSSClass("btn-sm");
          break;
        case "large":
          this._setButtonCSSClass("btn-lg");
          break;
        case "block":
          this._setButtonCSSClass("btn-block");
          break;
      }

      switch (this.shape) {
        case "round":
          this._setButtonCSSClass("btn-action");
          this._setButtonCSSClass("s-circle");
          break;
        case "square":
          this._setButtonCSSClass("btn-action");
          break;
      }
    }
  }

  render() {
    return html`
      <link
        rel="stylesheet"
        href="https://unpkg.com/spectre.css/dist/spectre.min.css"
      />
      <link
        rel="stylesheet"
        href="https://unpkg.com/spectre.css/dist/spectre-icons.min.css"
      />
      <button class=${classMap(this.buttonClasses)}>
        ${this.text}
        <i class=${classMap(this.iconClasses)}></i>
      </button>
    `;
  }
}

SpectreButton.styles = css`
  button {
    all: inherit;
  }
`;

customElements.define("spectre-button", SpectreButton);
