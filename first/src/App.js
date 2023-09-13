import logo from './logo.svg';
import './App.css';
import {useState} from "react";

function App() {
    let post = "LUNA >> DXXT";
    let [a, b] = useState("오옹! 나이스");

    return (
        <div className="App">
            <div className = "black-nav">
                <h1 style = {{color: 'purple'}}>LUNA is the best</h1>
            </div>
            <h4 id = {post}>{post}</h4>
        </div>
    );
}

export default App;
