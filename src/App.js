import {Route, Routes} from 'react-router-dom';
import Posts from "./pages/Posts";
import Post from "./pages/Post";
import User from "./pages/User";


function App() {
    return (
        <div className="App">
            <header className="App-header">
                <Routes>
                    <Route path="/" exact element={<Posts/>}/>
                    <Route path="/post/:id" exact element={<Post/>}/>
                    <Route path="/user/:id" exact element={<User/>}/>
                </Routes>
            </header>
        </div>

    );
}

export default App;
