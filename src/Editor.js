import React from 'react';

const Editor = ({text,setText})=>{
    return (
        <textarea id = "editor"
        value={text}
        onChange={(t)=>setText(t.target.value)}
        style={{width:'300px', height:'300px'}}
        />
    );
};
export default Editor;
