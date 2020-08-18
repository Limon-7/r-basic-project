import React, { Component } from "react";
import { CardList } from "./components/card-list/card-list.component";

import "./App.css";
import SearchBox from "./components/search-box/search-box";

class App extends Component {
    constructor() {
        super();
        this.state = {
            monsters: [],
            searchField: "",
        };
    }
    componentDidMount() {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then((response) => response.json())
            .then((monsters) => this.setState({ monsters }));
    }
    handleSearch = (e) => {
        this.setState({ searchField: e.target.value });
    };
    render() {
        const { monsters, searchField } = this.state;
        const filterMonsters = monsters.filter((m) =>
            m.name.toLowerCase().includes(searchField.toLowerCase())
        );
        return (
            <div className="App">
                <h1>Monsters Rolodex </h1>
                <SearchBox
                    placeholder="search monster"
                    handleChange={this.handleSearch}
                />
                <CardList monsters={filterMonsters} />
            </div>
        );
    }
}

export default App;
