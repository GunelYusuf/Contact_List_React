import Header from "./containers/Header/Header";
import './App.css';
import {Route, Routes} from "react-router-dom";
import AddContact from "./containers/AddContact/AddContact";
import EditContact from "./containers/EditContact/EditContact";

function App() {
  return (
      <Routes>
          <Route path={'/contacts'} exact element={<Header/>}/>
          <Route path={'/contacts/add'} element={<AddContact/>}/>
          <Route path={'/contacts/edit/id'} element={<EditContact/>}/>
      </Routes>
  );
}

export default App;
