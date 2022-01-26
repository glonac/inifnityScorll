import {Route, Routes} from 'react-router-dom';
import Posts from "./pages/Posts";
import Post from "./pages/Post";
import User from "./pages/User";
import NotFound from "./pages/NotFound";
import ServerError from "./pages/ServerError";


function App() {
    return (
        <div className="App">
            <header className="App-header">
                <Routes>
                    <Route path="/" exact element={<Posts/>}/>
                    <Route path="/post/:id" exact element={<Post/>}/>
                    <Route path="/user/:id" exact element={<User/>}/>
                    <Route path="*" exact element={<NotFound/>}/>
                    <Route path="500" exact element={<ServerError/>}/>
                </Routes>
            </header>
        </div>

    );
}

export default App;
