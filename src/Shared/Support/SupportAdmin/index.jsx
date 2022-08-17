import React from 'react';
import { ChatEngine } from 'react-chat-engine';

const SupportAdmin = () => {
    return (
        <ChatEngine
            projectID={process.env.REACT_APP_CE_PROJECT_ID}
            userName='test 401'
            userSecret='test401'
            height='calc(100vh - 20px'
        ></ChatEngine>
    );
}

export default SupportAdmin;
