import * as React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

class SideBarComponent extends React.Component {
    render() {
        return (

            <aside className="sidebar position-fixed top-0 left-0 overflow-auto h-100 float-left" id="show-side-navigation1">
                <i className="uil-bars close-aside d-md-none d-lg-none" data-close="show-side-navigation1"></i>
                <div className="sidebar-header d-flex justify-content-center align-items-center px-3 py-4">
                </div>

                <ul className="categories list-unstyled">
                    <li >
                        <i className="uil-estate fa-fw"></i> <Link to="/">Home</Link>
                    </li>
                    <li >
                        <i className="uil-map-marker"></i><Link to="/VegHotels">Hotels and SPA</Link>
                    </li>
                    <li >
                        <i className="uil-estate fa-fw"></i> <Link to="/NonVegHotels">Cafe</Link>
                    </li>
                    {/* <li >
                        <i className="uil-map-marker"></i><Link to="/PlacesToVisit">PlacesToVisit</Link>
                    </li> */}
                </ul>
            </aside>
        )
    }
}

export default SideBarComponent