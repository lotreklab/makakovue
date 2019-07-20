import styled from 'vue-styled-components';
import Twitter from '../components/Twitter.vue';


const StyledTwitter = styled(Twitter, Twitter.props) `
  font-size: 1.5em;
  text-align: center;
  color: ${props => props.theme.twitter};
`;

export default StyledTwitter;
