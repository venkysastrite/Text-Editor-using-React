import React from 'react';
const FontWeight = (fontfamily,fontweight,setfontweight,fontdata)=>{
    if (!fontdata || !fontdata[fontfamily] || !fontdata[fontfamily].variants) {
        return <div>Loading font weights...</div>;
    }
    return(
        <div>
            <label htmlFor = "fontweight">Font Weight</label>
            <select
            id="fontweight"
            value={fontweight}
            onChange={(t)=>setfontweight(t.target.value)}>
                {Object.keys(fontdata[fontfamily].variants).map((weight)=>(
                    <option key={weight} value={weight}>
                        {weight}
                    </option>
                ))}
            </select>
        </div>
    );
};export default FontWeight;