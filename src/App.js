import { Routes, Route } from "react-router-dom";
import Home from "./routes/home/home.component";
import Navigation from "./routes/navigation/navigation.component";
import SignIn from "./routes/sign-in/sign-in.component";

const Shop = () => {
  return (
    <div>
      <div>
        <h1>
          I am Shop
        </h1>
      </div>
    </div>
  );
}


const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation/>}> 
        {/* if you give route if the path matches it will render the element */}
        <Route index element={<Home />}/> {/* giving the route the path to home page (using react route)*/}
        {/* Now with nested routing we can access /home/shop or anything with /home/... */}
        <Route path='shop' element={<Shop />}></Route>
        <Route path='sign-in' element={<SignIn />}></Route>
      </Route>
      
    </Routes>
    
  );

};
export default App;
