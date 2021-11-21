import { ThemeProvider } from 'styled-components';
import { Container } from './components/styles/Containers.styled';
import GlobalStyles from './components/styles/Global';
import Header from './components/Header';
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
            <p>{item.title}</p>
          ))}
        </Container>
      </>
    </ThemeProvider>
  );
}

export default App;
