import React from 'react';
import {profiles} from '../profiles';
import SearchBar from '../searchBar/searchbar';
import Trends from '../trends';
import SearchDropdown from '../SearchDropdown/searchDropdown'
// import { render } from '@testing-library/react';

class SidebarCol extends React.Component {
    constructor() {
        super();
        this.state = {
            profiles: profiles,
        }
    }
render() {
    return (
        <div className="t-sidebar-col">
            <SearchBar />
            {/* <SearchDropdown /> */}
            <Trends />
        </div>
        );
    }
}

export default SidebarCol;
