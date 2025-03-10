import { Routes, Route} from 'react-router'
import Home from "./component/routes/home/home.component";
import Navigation from './component/routes/navigation/navigation.component'
import Authentication from './component/routes/authentication/authentication.component'; 
import Shop from './component/routes/shop/shop.component';
import Checkout from './component/routes/checkout/checkout.component';
const App= () => {
    return (
    <Routes>
      <Route path='/' element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path='shop' index element={<Shop />} />
        <Route path='authentication' index element={<Authentication />} />
        <Route path='checkout' index element={<Checkout />} />

      </Route>
    </Routes>
    )
  };

export default App;
