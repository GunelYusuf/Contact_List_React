import Header from "./containers/Header/Header";
import './App.css';
import {Route, Routes} from "react-router-dom";
import ContactList from "./containers/Contact List/ContactList";

function App() {
  return (
      <Routes>
          <Route path='/' exact element={<Header/>}/>
      </Routes>
  );
}

export default App;
