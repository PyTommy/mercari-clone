import React from 'react';
import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom';
import Navigation from './components/Navigation/Navigation';
import Layout from './hoc/Layout/Layout';

const HomePage = () => (
  <p>HomePage</p>
);
const LikePage = () => (
  <p>LikePage</p>
);
const PlansPage = () => (
  <p>PlansPage</p>
);
const HostPage = () => (
  <p>HostPage</p>
);
const InboxPage = () => (
  <p>InboxPage</p>
);
const MyPage = () => (
  <p>MyPage</p>
);
const AuthPage = () => (
  <p>Auth</p>
);
const NotFoundPage = () => (
  <p>404</p>
);


function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route path="/home" exact component={HomePage} />
          <Route path="/likes" component={LikePage} />
          <Route path="/plans" component={PlansPage} />
          <Route path="/host" component={HostPage} />
          <Route path="/inbox" component={InboxPage} />
          <Route path="/mypage" component={MyPage} />
          <Route path="/auth" component={AuthPage} />
          <Redirect from="/" exact to="/home" />
          <Route component={NotFoundPage}/>
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
