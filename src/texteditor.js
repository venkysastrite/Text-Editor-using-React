import React,{useState,useEffect} from 'react';
import FontSelect from './FontFamily';
import FontWeight from './FontWeight';
import Italic from './ToggleItalic';
import Editor from './Editor';
<html>
    <head>
    <style>
    body{
    background-color: azure;
    margin:1%;
    }
    </style>
        </head>
    </html>
const TextEditor = () => {
    const [fontdata, setFontsData] = useState(null);
    const[fontfamily,setfontfamily] = useState();
    const[fontweight,setfontweight]=useState('100');
    const[italic,setItalic] = useState(false);
    const[text,setText] = useState('Type something');
    useEffect(() => {
        const fetchFontsData = async () => {
            try {
                const response = await fetch(`${process.env.PUBLIC_URL}/fonts.json`);
                const data = await response.json();
                setFontsData(data);
                if (data) {
                    setfontfamily(Object.keys(data)[0]);
                    setfontweight(Object.keys(data[Object.keys(data)[0]].variants)[0]);
                }
            } catch (error) {
                console.error('Failed to fetch fonts data:', error);
            }
        };
        fetchFontsData();
    }, []);
    useEffect(()=>{
        const savedSettings = JSON.parse(localStorage.getItem('editorSettings'));
        if(savedSettings)
        {
            setText(savedSettings.text || 'TYPE SOMETHING');
            setfontfamily(savedSettings.fontfamily||'Tourney');
            setfontweight(savedSettings.fontweight||'100 ');
            setItalic(savedSettings.italic || false);
        }
    },[]
    );
    useEffect(()=>{
        if (fontdata && fontdata[fontfamily] && fontdata[fontfamily].variants && fontdata[fontfamily].variants[fontweight]) {
            const fonturl = fontdata[fontfamily].variants[fontweight].url;
            const fontStyle = italic ? 'italic' : 'normal';

            // Clean up existing style
            const existingStyle = document.getElementById('dynamic-font-style');
            if (existingStyle) {
                existingStyle.remove();
            }
        const newStyle = document.createElement('style');
        newStyle.appendChild(document.createTextNode(
            `@font-face {
                font-family :${fontfamily}
                src : url(${fonturl});
                font-weight : ${fontweight};
                font-style:${fontStyle};
                }
                #editor{
                font-family :${fontfamily}
                font-weight : ${fontweight};
                font-style:${fontStyle};
                }`
        ));
        document.head.appendChild(newStyle);
        const Settings = {
            text,
            fontfamily,
            fontweight,
            italic,
        };
        localStorage.setItem('editorSettings',JSON.stringify(Settings));}
    },[fontfamily,fontweight,italic,text,fontdata]);
    if (!fontdata) {
        return <div>Loading...</div>;
    }
    return (
        <div>
            <div>
                <FontSelect
                fontfamily={fontfamily}
                setfontfamily={setfontfamily}
                fontdata={fontdata}
                />
                <FontWeight
                fontfamily={fontfamily}
                fontweight={fontweight}
                setfontweight={setfontweight}
                fontdata={fontdata}
                />
                <Italic
                    italic={italic}
                    setItalic={setItalic}
                />
                </div>
                <Editor text={text} setText={setText}/>
                </div>
    );
};
export default TextEditor;
