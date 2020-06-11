import React,{useState} from 'react'

const SetColor=()=>{
    const html = document.querySelector("html")
    //const checkbox = document.querySelector("input[name=theme]")
   
    const getStyle = (elements, style) =>
        window
            .getComputedStyle(elements)
            .getPropertyValue(style)

    const [initialColor, setInitialColor] = useState( {
        bgColor: getStyle(html, "--bg-color"),
        bg: getStyle(html, "--bg"),
        primaryColor: getStyle(html, "--primary-color"),
        colorHeading: getStyle(html, "--color-heading"),
        titleColor: getStyle(html, "--title-color"),
        textColor: getStyle(html, "--text-color"),
         formColor: getStyle(html, " --form-color")

       
    })
    const [darkMode, setDarkMode] = useState({
        bg: "#333333",
        bgColor:"#000",
        primaryColor: "#434343",
        colorHeading: "#3664FF",
        titleColor:"#FFFFFF",
        textColor: "#B5B5B5",
        formColor:"gray"
    })

    const transformky = key => "--" + key.replace(/([A-Z])/, "-$1").toLowerCase()

   
    const changColors = (colors) => {
                Object.keys(colors).map(key => {
                    html.style.setProperty(transformky(key), colors[key])
                })
            }

    
   return(
       <div id="dark">
           <input type="checkbox" name="theme" id="check" onChange={
               ({target}) => target.checked ? changColors(darkMode) : changColors(initialColor)
           } />
           <label for="check">Toggle</label>
       </div>
   )
}

export default SetColor