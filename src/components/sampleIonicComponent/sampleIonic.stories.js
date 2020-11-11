import React from "react";
import { SampleIonicComponent } from "./sampleIonic.component";

export default {
  title: "Example/Sample Ionic Component",
  component: SampleIonicComponent,
  decorators: [
    Story => (
      <Story/>
    )
  ]
};

const Template = args => <SampleIonicComponent {...args} />;

export const Default = Template.bind({});
Default.args = {};

/* export const Red = Template.bind({});
Red.args = {
  text: "বর্গমূল",
  backgroundColor: '#B64352'
};
*/
