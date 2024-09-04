import { BrowserRouter,Routes,Route,Navigate } from "react-router-dom";
import ToDoList from "./ToDoList";
import { UserContextProvider } from './Context/userContext';

const App = () => {

    let user;

    return (        <UserContextProvider>
        <BrowserRouter>
            <Routes>
                {/* <Route path="/home" element={ user ? <ToDoList /> : <Navigate to="/home" />} /> */}
                {/* <Route path="/" element={ !user? <Authentication /> : <Navigate to="/home" />} /> */}
                <Route path="/" element= {<ToDoList />} />
            </Routes>
        </BrowserRouter>
        </UserContextProvider>
    );
}

export default App;