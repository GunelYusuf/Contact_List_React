import Header from "./containers/Header/Header";
import './App.css';
import {Route, Routes} from "react-router-dom";
import AddContact from "./containers/LocalStorage/LocalStorage";

function App() {
  return (
      <Routes>
          <Route path='/contacts' exact element={<Header/>}/>
          <Route path={'/contacts/add'} element={<AddContact/>}/>
      </Routes>
  );
}

export default App;
