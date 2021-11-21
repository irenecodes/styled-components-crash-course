import { ThemeProvider } from 'styled-components';
import { Container } from './components/styles/Containers.styled';
import GlobalStyles from './components/styles/Global';
import Header from './components/Header';
import Card from './components/Card';
import Footer from './components/Footer';
import content from './content';

const theme = {
  colors: {
    header: '#ebfbff',
    body: '#fff',
    footer: '#003333',
  },

  mobile: '768px',
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <>
        {/* to add global styles  */}
        <GlobalStyles />
        <Header></Header>{' '}
        <Container>
          {content.map((item, i) => (
            <Card key={i} item={item} />
          ))}
        </Container>
        <Footer></Footer>
      </>
    </ThemeProvider>
  );
}

export default App;
