
import {BrowserRouter as Router , Routes , Route} from 'react-router-dom'
import AuthLayout from './components/Layouts/AuthLayout/AuthLayout';
import ProfileLayout from './components/Layouts/ProfileLayout/ProfileLayout';
import ResetLayout from './components/Layouts/ResetLayout/ResetLayout';
import ActivateLayout from './components/Layouts/ActivateLayout/ActivateLayout';

function App() {
  const isLoggedIn = false;

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={isLoggedIn ? <AuthLayout/> : <ProfileLayout/>}></Route>
          <Route path="/auth/reset-password/:token" element={<ResetLayout/>}></Route>
          <Route path='/api/auth/activate/:activate_token' element={<ActivateLayout/>} />
        </Routes>
      </Router>
    </div>
  )
}

export default App;
