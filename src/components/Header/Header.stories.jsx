import React from "react";
import Header from "./Header";

export default {
  title: "Common/Header",
  component: Header,
};

const Template = (args) => <Header {...args} />;

export const Default = Template.bind({});
Default.args = {};
