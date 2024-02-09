// eslint-disable-next-line react-refresh/only-export-components
function ListContent(){
    const items= ["Elev Profil", "Kalender", "Kontaktlista", "Attendens", "Documentation", "Elev Assecement", "Elev lifeEvent", "BlogElevs", "clothers", "Education", "Plan"]
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
