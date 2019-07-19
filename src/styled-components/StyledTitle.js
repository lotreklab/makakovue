import styled from 'vue-styled-components';
import Title from '../components/Title.vue';

// Create a <StyledTitle> Vue component that renders an <h1> which is
// centered, palevioletred and sized at 1.5em
const itemProps = { title: String };

const StyledTitle = styled(Title, itemProps)`
  font-size: 1.5em;
  text-align: center;
  color: ${props => props.theme.primary};
`;

export default StyledTitle
