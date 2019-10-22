import { storiesOf } from "@storybook/polymer/dist/client/preview/index";
import { html } from "lit-html";
import { withKnobs } from "@storybook/addon-knobs";
import "../../spectre-button/spectre-button";

storiesOf("UI COMPONENTS|spectre-button", module)
  .addDecorator(withKnobs)
  .add("Feature set", () => {
    return html`
      <div
        style="background: #fff; color: #3b4351; font-family: 'Segoe UI'; font-size: 1.2rem; text-rendering: optimizeLegibility;"
      >
        <h2>Theme</h2>
        <spectre-button text="Default"></spectre-button>
        <spectre-button text="Primary" theme="primary"></spectre-button>
        <spectre-button text="Success" theme="success"></spectre-button>
        <spectre-button text="Error" theme="error"></spectre-button>

        <h2>Size</h2>
        <spectre-button
          text="Small"
          theme="primary"
          size="small"
        ></spectre-button>
        <spectre-button
          text="Large"
          theme="primary"
          size="large"
        ></spectre-button>
        <spectre-button
          text="Block"
          theme="primary"
          size="block"
        ></spectre-button>

        <h2>Loading</h2>
        <spectre-button text="Primary" theme="primary" loading></spectre-button>

        <h2>Shapes & Icons</h2>
        <spectre-button
          theme="primary"
          icon="menu"
          shape="square"
        ></spectre-button>
        <spectre-button icon="menu" shape="round"></spectre-button>

        <h2>Text & Icon</h2>
        <spectre-button
          theme="primary"
          icon="caret"
          shape="square"
          text="Select"
          size="large"
          style="min-width: 80px"
        ></spectre-button>
      </div>
    `;
  });
