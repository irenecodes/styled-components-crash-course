import { StyledHeader, Nav, Logo } from './styles/Header.styled';
import { Button } from './styles/ Button.styled';
import { Container } from './styles/Containers.styled';
export default function Header() {
  return (
    <StyledHeader bg="red">
      <Container>
        <Nav>
          <Logo src="./images/logo.svg" alt="" />
          <Button>Try it free</Button>
        </Nav>
      </Container>
    </StyledHeader>
  );
}
