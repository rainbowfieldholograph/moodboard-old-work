import { Route, Switch } from 'react-router-dom'
import Home from './pages/home/Home'
import Photos from './pages/photos/Photos'
import './Styles.css'

const data = [
  { title: 'Title', descr: 'Description' },
  { title: 'Title', descr: 'Description' },
  { title: 'Title', descr: 'Description' },
  { title: 'Title', descr: 'Description' },
  { title: 'Title', descr: 'Description' },
  { title: 'Title', descr: 'Description' },
]

const App = () => {
  return (
    <div className="App">
      <Switch>
        <Route path={process.env.PUBLIC_URL + '/'} exact>
          <Home />
        </Route>
        <Route path={process.env.PUBLIC_URL + '/photos'}>
          <Photos data={data} />
        </Route>
      </Switch>
    </div>
  )
}

export default App
