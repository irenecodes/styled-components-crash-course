import { ThemeProvider } from 'styled-components';
import { Container } from './components/styles/Containers.styled';
import GlobalStyles from './components/styles/Global';
import Header from './components/Header';

const theme = {
  colors: {
    header: '#ebfbff',
    body: '#fff',
    footer: '#003333',
  },
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <>
        {/* to add global styles  */}
        <GlobalStyles />
        <Header></Header>{' '}
        <Container>
          <h1>ji</h1>
        </Container>
      </>
    </ThemeProvider>
  );
}

export default App;
