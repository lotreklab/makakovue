<script>
//https://vuejs.org/v2/guide/render-function.html

import StyledTitle from "../styled-components/StyledTitle";
import StyledTwitter from "../styled-components/StyledTwitter";
import StyledButtonCounter from "../styled-components/StyledButtonCounter"

function getElementFromLayout(layout) {
  switch (layout) {
    case "Div":
      return "div";
    case "Title":
      return StyledTitle;
    case "Twitter":
      return StyledTwitter;
    case "ButtonCounter":
      return StyledButtonCounter;
  }
}

function sanitizeAttributes(attributes) {
  let copyAttributes = JSON.parse(JSON.stringify(attributes));
  let newAttributes = {
    'class' : copyAttributes.class,
    'style' : copyAttributes.style,
    'attrs' : copyAttributes.attrs
  };
  delete copyAttributes['class'];
  delete copyAttributes['style'];
  delete copyAttributes['attrs'];
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
    return renderSection(createElement, this.pageToRender.sections);
  }
};
</script>
