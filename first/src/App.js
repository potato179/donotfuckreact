import logo from './logo.svg';
import './App.css';
import {useState} from "react";

function App() {
    let post = "LUNA >> DXXT";
    let [a, b] = useState(["오옹! 나이스", "ㄱㅇㅈㅇㄱ", "Osong"]);
    let [likes, addLikes] = useState(0);

    return (
        <div className="App">
            <div className = "black-nav">
                <h1 style = {{color: 'purple'}}>LUNA is the best</h1>
            </div>
            <h4 id = {post}>{post}</h4>

            <div className = "list">
                <h4>{a[0]} <span onClick = {() => {addLikes(likes + 1)}}>따봉</span> {likes} </h4>
            </div>
            <div className = "list">
                <h4>{a[1]}</h4>
            </div>
            <div className = "list">
                <h4>{a[2]}</h4>
            </div>
        </div>

    );
}

export default App;
