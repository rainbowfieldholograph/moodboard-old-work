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
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/photos">
          <Photos data={data} />
        </Route>
      </Switch>
    </div>
  )
}

export default App
