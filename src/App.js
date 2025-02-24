import { Routes, Route} from 'react-router'
import Home from "./component/routes/home/home.component";
import Navigation from './component/routes/navigation/navigation.component'
import SignIn from './component/routes/sign-in/sign-in.component';

const App= () => {
    return (
    <Routes>
      <Route path='/' element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path='sign-in' index element={<SignIn />} />
      </Route>
    </Routes>
    )
  };

export default App;
