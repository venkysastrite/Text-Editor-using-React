import React from 'react';

const Editor = ({text,setText})=>{
    return (
        <textarea id = "editor"
        value={text}
        onChange={(t)=>setText(t.target.value)}
        style={{width:'600%', height:'300%'}}
        />
    );
};
export default Editor;