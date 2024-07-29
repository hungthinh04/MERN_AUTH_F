
import {BrowserRouter as Router , Routes , Route} from 'react-router-dom'
import AuthLayout from './components/Layouts/AuthLayout/AuthLayout';
import ProfileLayout from './components/Layouts/ProfileLayout/ProfileLayout';

function App() {
  const isLoggedIn = true;

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={isLoggedIn ? <AuthLayout/> : <ProfileLayout/>}></Route>
        </Routes>
      </Router>
    </div>
  )
}

export default App;
