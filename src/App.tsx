import { ThemeProvider } from '@material-ui/core/styles';

import theme from './utils/Theme';

import Header from './components/Header';
import MainPage from './views/MainPage';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <MainPage />
    </ThemeProvider>
  );
}

export default App;
