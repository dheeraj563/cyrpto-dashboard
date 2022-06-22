import "./App.css";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import { routes } from "./routes";
import history from "../src/utils/history";

function App() {
  return (
    <Router history={history}>
      <Routes>
        {routes.map((item) => {
          const { component: Component } = item;
          return (
            <Route
              key={item.id}
              exact={item.exact}
              path={item.path}
              element={<Component />}
            />
          );
        })}
      </Routes>
    </Router>
  );
}

export default App;
