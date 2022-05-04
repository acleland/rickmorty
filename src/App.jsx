import { Switch, Route } from 'react-router-dom';
import CharacterDetail from './views/CharacterDetail/CharacterDetail';
import CharacterList from './views/CharacterList/CharacterList';

export default function App() {
  return (
    <>
      <Switch>
        <Route path="/characters/:id">
          <CharacterDetail />
        </Route>
        <Route path="/">
          <h1>Rick and Morty Characters</h1>
          <CharacterList />
        </Route>
      </Switch>
    </>
  );
}
