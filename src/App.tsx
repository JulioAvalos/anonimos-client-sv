import React, { Suspense } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import CircularProgress from "@material-ui/core/CircularProgress";

import MainPage from "./views/MainPage";
import Login from "./views/Login";

const BlockChain = React.lazy(() => import( "./views/Blockchain"));
const Wallet = React.lazy(() => import("./views/Wallet"));

const App = () => {
  return (
    <Switch>
      <Route path="/" exact component={MainPage} />
      <Route
        path="/wallet"
        exact
        render={(props) => (
          <Suspense fallback={<CircularProgress />}>
            <Wallet {...props} />
          </Suspense>
        )}
      />
      <Route
        path="/blockchain"
        exact
        render={(props) => (
          <Suspense fallback={<CircularProgress />}>
            <BlockChain {...props} />
          </Suspense>
        )}
      />
      <Route path="/login" exact component={Login} />
      <Redirect to="/" />
    </Switch>
  );
};

export default App;
