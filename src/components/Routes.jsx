import { Switch, Route, Redirect } from 'react-router-dom';
import { Results } from './Results';

export const Routes = () => {
  return (
    <div className="p-4">
      <Switch>
        <Route exact path="/">
          <Redirect to="/search" />
        </Route>
        <Route path={['/search', '/news', '/images', '/videos']}>
          <Results />
        </Route>
      </Switch>
    </div>
  );
};
