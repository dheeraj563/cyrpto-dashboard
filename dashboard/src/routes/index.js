import { Home, CoinDetails } from "../components/pages";

export const routes = [
  {
    id: 1, path: "/", exact: true, component: Home, fallbackComponent: <></>
  },
  {
    id: 2, exact: false, path:"/:id", component: CoinDetails, fallbackComponent: <></>
  },
];

export const errorRoutes = [{ path: "*", component: <h1 style={{ color: "white" }}>page not found</h1> }];
