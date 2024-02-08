import { Fragment } from "react";
function ListContent() {
    return(
        <Fragment>
            <h1>Welcome to the Elev Atendens (EA)!</h1>
            <ul className="list-content">
                <li className="list-content"> Elev Profil</li>
                <li className="list-content"> Kalender</li>
                <li className="list-content">Kontaktlista</li>
                <li className="list-content">Attendens</li>
                <li className="list-content">Documentation</li>
                <li className="list-content">Elev Assecement</li>
                <li className="list-content">Elev life</li>
                <li className="list-content">Event </li>
                <li className="list-content">Blog</li>
                <li className="list-content">Elevs clothers</li>
                <li className="list-content"> Education</li>
                <li className="list-content">Plan</li>
            </ul>
        </Fragment>
    );
}

export default ListContent;
