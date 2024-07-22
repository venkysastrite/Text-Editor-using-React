import React from 'react';
const Italic = ({fontfamily,fontweight,italic,setItalic,fontdata})=>{
    if (italic === undefined || setItalic === undefined) {
        return <div>Loading...</div>;
    }
    //const issupported = fontdata[fontfamily].variants[fontweight].italic;
    return (
        <div>
            <label htmlFor="itallic">Itallic</label>
            <input 
            type="checkbox"
            id="itallic"
            checked={italic}
            onChange={(t)=>setItalic(t.target.checked)}
            disabled={!italic}
            />
        </div>
    );
};
export default Italic;