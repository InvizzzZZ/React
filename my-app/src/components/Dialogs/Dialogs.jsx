import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {

    let dialogsElements = props.state.dialogs.map((dialog) => {
        return <DialogItem name={dialog.name} id={dialog.id} srcAvatar={dialog.srcAvatar} />
    });

    let messagesElements = props.state.messages.map((message) => {
        return <Message message={message.message}/>
    });

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>
        </div>
    )
};

export default Dialogs;