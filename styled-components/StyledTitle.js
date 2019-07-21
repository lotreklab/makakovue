import styled from 'vue-styled-components';
import Title from '../components/Title.vue';


const StyledTitle = styled(Title, Title.props)`
  font-size: 1.5em;
  text-align: center;
  color: ${props => props.theme.primary};
`;

export default StyledTitle
