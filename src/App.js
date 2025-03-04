import { Routes, Route} from 'react-router'
import Home from "./component/routes/home/home.component";
import Navigation from './component/routes/navigation/navigation.component'
import Authentication from './component/routes/authentication/authentication.component'; 

const App= () => {
    return (
    <Routes>
      <Route path='/' element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path='authentication' index element={<Authentication />} />
      </Route>
    </Routes>
    )
  };

export default App;
