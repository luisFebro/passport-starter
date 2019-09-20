import React from 'react';

const terminal = ({ userData, selected }) => {
    const selectedData = selected === "All" ? userData : userData[selected];
    const jsonCode = JSON.stringify(selectedData, null, 4);

    return(
        <div className='window'>
            <div className="title-bar">
                <div className="buttons">
                    <div className="mac-btn close"></div>
                    <div className="mac-btn minimize"></div>
                    <div className="mac-btn zoom"></div>
                </div>
                <p style={{ textAlign: "center", margin: 0}}>
                    json-terminal
                </p>
            </div>
            <div className="content">
                <pre>{jsonCode}</pre>
            </div>
        </div>
    );
}

export default terminal;