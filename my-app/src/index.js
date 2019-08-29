import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Post from "./components/Profile/MyPosts/Post/Post";
import DialogItem from "./components/Dialogs/DialogItem/DialogItem";
import Message from "./components/Dialogs/Message/Message";

//from profile
let posts = [
    {id: 1, message: 'Hi, how are you?', likesCount: 12},
    {id: 1, message: 'It\'s my first post', likesCount: 11}
];

//end from profile

//from dialogs
let dialogs = [
    {id: 1, name: 'Dimych'},
    {id: 2, name: 'Andrew'},
    {id: 3, name: 'Sveta'},
    {id: 4, name: 'Sasha'},
    {id: 5, name: 'Viktor'},
    {id: 6, name: 'Valera'}
];



let messages = [
    {id: 1, message: 'Hi'},
    {id: 2, message: 'How are you?'},
    {id: 3, message: 'Yo'},
    {id: 4, message: "I'm fine"},
    {id: 5, message: 'cool'}
];


//end from dialogs

ReactDOM.render(<App posts={posts} dialogs={dialogs}
                     messages={messages}/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
