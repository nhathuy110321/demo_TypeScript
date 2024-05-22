import { Container } from './components';
import publicRoutes from './router/publicRoutes/publicRoutes';
import { GlobalStyle } from './theme/globalStyle';
import {
  Route,
  BrowserRouter as Router,
  Routes,
} from 'react-router-dom';

function App() {
  return (
    <Container>
      <GlobalStyle />
      <Router>
        <Routes>
          {publicRoutes.map(
            ({ element: Page, path, layout: Layout }) => {
              return (
                <Route
                  key={path}
                  path={path}
                  element={
                    <Layout>
                      <Page />
                    </Layout>
                  }
                />
              );
            }
          )}
        </Routes>
      </Router>
    </Container>
  );
}

export default App;
