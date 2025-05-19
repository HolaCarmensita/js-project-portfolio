import styled from 'styled-components';
import LayoutWrapper from './LayoutWrapper';

const PageFooter = styled.footer`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding-bottom: 2rem;
`;

function Footer() {
  return (
    <PageFooter className='footer' id='contact'>
      <p>&copy; 2025 Casandra Gustafsson. Crafted with love.</p>
    </PageFooter>
  );
}

export default Footer;
