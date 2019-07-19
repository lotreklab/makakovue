import styled from 'vue-styled-components';
import Twitter from '../components/Twitter.vue';


const itemProps = { user: String };

// Create a <StyledTitle> Vue component that renders an <h1> which is
// centered, palevioletred and sized at 1.5em
const StyledTwitter = styled(Twitter, itemProps) `
  font-size: 1.5em;
  text-align: center;
  color: ${props => props.theme.twitter};
`;

export default StyledTwitter;
