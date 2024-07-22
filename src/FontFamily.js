import React from 'react';

const FontSelect=({fontfamily,setfontfamily,fontdata})=>{
    if (!fontdata) {
        return <div>Loading fonts...</div>;
    }
    return(
        <div>
            <label htmlFor="fontfamily">Font Selection</label>
            <select
                id="fontfamily"
                value={fontfamily}
                onChange={(t)=>setfontfamily(t.target.value)}>
                    {Object.keys(fontdata).map((font)=>(
                        <option key={font} value={font}>
                            {font}
                        </option>
                    ))}
            </select>
        </div>
    );
};
export default FontSelect;