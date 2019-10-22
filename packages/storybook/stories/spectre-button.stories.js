import { storiesOf } from "@storybook/polymer/dist/client/preview/index";
import { html } from "lit-html";
import { withKnobs } from "@storybook/addon-knobs";
import "../../spectre-button/spectre-button";

storiesOf("UI COMPONENTS|spectre-button", module)
  .addDecorator(withKnobs)
  .add("Feature set", () => {
    return html`
      <spectre-button text="Buy"></spectre-button>
      <spectre-button text="Buy" theme="primary"></spectre-button>
      <spectre-button text="Buy" theme="success"></spectre-button>
      <spectre-button text="Buy" theme="error"></spectre-button>
    `;
  });
