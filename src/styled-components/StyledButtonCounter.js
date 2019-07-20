import styled from 'vue-styled-components';
import ButtonCounter from '../components/ButtonCounter.vue';


const StyledButtonCounter = styled(ButtonCounter, ButtonCounter.props)`
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border-radius: 3px;
  cursor: pointer;

  /* Color the border and text with theme.main */
  color: ${props => props.theme.primary};
  border: 2px solid ${props => props.theme.primary};
`;

export default StyledButtonCounter;
