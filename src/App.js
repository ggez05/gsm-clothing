import { Routes, Route } from "react-router-dom";
import Home from "./routes/home/home.component";
import Navigation from "./routes/navigation/navigation.component";
import Authentication from "./routes/authentication/authentication.component";
import Shop from "./routes/shop/shop.component";
import Checkout from "./routes/checkout/checkout.component";
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation/>}> 
        {/* if you give route if the path matches it will render the element */}
        <Route index element={<Home />}/> {/* giving the route the path to home page (using react route)*/}
        {/* Now with nested routing we can access /home/shop or anything with /home/... */}
        <Route path='shop/*' element={<Shop />}></Route>
        <Route path='auth' element={<Authentication />}></Route>
        <Route path='checkout' element={<Checkout/>}></Route>
      </Route>
      
    </Routes>
    
  );

};
export default App;
