import { useState } from "react";
function ListContent(){
    const items= ["Elev Profil", "Kalender", "Kontaktlista", "Attendens", "Documentation", "Elev Assecement", "Elev lifeEvent", "BlogElevs", "clothers", "Education", "Plan"]
    let selectedIndex= -1;
    //Hook
    const [selectedIndex, setSelectedIndex]= useSate(-1);
    // variable (selectedIndex)
    // updater function(setSelectedIndex)
    return(
        <>
        <h1> Welcome to elev Attendens (EA)!</h1>
        <p> List of content</p>
        <ul className ="list-content">
            {items.map ((item)=><li key= {item}>{item}</li>)}
        </ul>
        </>
    )
}
export default ListContent;
