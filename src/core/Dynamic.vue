

<script>
//https://vuejs.org/v2/guide/render-function.html

import StyledTitle from "../styled-components/StyledTitle";
import StyledTwitter from "../styled-components/StyledTwitter";

function getElementFromLayout(layout) {
  switch (layout) {
    case "Div":
      return "div";
    case "Title":
      return StyledTitle;
    case "Twitter":
      return StyledTwitter;
  }
}

function sanitizeAttributes(attributes) {
  let copyAttributes = JSON.parse(JSON.stringify(attributes));
  let newAttributes = {};
  newAttributes.props = copyAttributes;
  return newAttributes;
}

function renderSection(createElement, sections) {
  if (!sections) {
    return;
  }
  let renderedSections = [];
  for (let section of sections) {
    renderedSections.push(
      createElement(
        getElementFromLayout(section.acf_fc_layout),
        sanitizeAttributes(section),
        renderSection(createElement, section.children)
      )
    );
  }
  return renderedSections;
}

export default {
  name: "dynamic",
  props: ["pageToRender"],
  render: function(createElement) {
    return createElement(
      "span",
      {},
      renderSection(createElement, this.pageToRender.sections)
    );
  }
};
</script>

<style>
</style>
