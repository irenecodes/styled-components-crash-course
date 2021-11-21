import { StyledHeader, Nav, Logo, Image } from './styles/Header.styled';
import { Button } from './styles/ Button.styled';
import { Container } from './styles/Containers.styled';
import { Flex } from './styles/Flex.styled';
export default function Header() {
  return (
    <StyledHeader bg="red">
      <Container>
        <Nav>
          <Logo src="./images/logo.svg" alt="" />
          <Button>Try it free</Button>
        </Nav>
        <Flex>
          <div>
            <h1>Build the community your fans will love</h1>

            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consequatur quod quaerat facilis necessitatibus laboriosam modi
              aliquid porro dicta. Dolorem nostrum facere iste magni eos earum,
              voluptas quam autem quibusdam laboriosam!
            </p>

            <Button bg="#ff0099" color="#fff">
              Get started for free
            </Button>
          </div>

          <Image src="./images/illustration-mockups.svg"></Image>
        </Flex>
      </Container>
    </StyledHeader>
  );
}
