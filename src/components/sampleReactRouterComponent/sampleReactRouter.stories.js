import React from "react";
import { SampleReactRouterComponent } from "./sampleReactRouter.component";
import { BrowserRouter as Router, Link } from "react-router-dom";
// import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export default {
  title: "Example/Sample React Router Component",
  component: SampleReactRouterComponent,
  decorators: [
    Story => (
      <div>
        <div style={{marginBottom: '50px'}}>ডকুমেন্টেশনের উদাহরণ থেকে কপি-পেস্ট</div>
        <Router>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/topics">Topics</Link>
            </li>
          </ul>

          <Story />
        </Router>
      </div>
    )
  ]
};

const Template = args => <SampleReactRouterComponent {...args} />;

export const Default = Template.bind({});
Default.args = {};

/* export const Red = Template.bind({});
Red.args = {
  text: "বর্গমূল",
  backgroundColor: '#B64352'
};
*/
