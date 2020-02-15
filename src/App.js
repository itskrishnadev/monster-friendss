import React, { Component } from 'react';
import {Cardlist} from './components/card.list/card-list.component';
import './App.css';

import {SearchBox} from './components/serch-box/search.component';

class App extends Component{

  constructor(){
    super();
    this.state = {
      monsters : [],
      searchField : ''
      
    }
  }

  handleChange = e => 
    {this.setState({searchField : e.target.value})}

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users=> this.setState({monsters: users}));

  }
  render(){
      const {monsters , searchField} = this.state;
      const filteredMonsters = monsters.filter(monsters => monsters.name.toLowerCase().includes(searchField.toLowerCase()));

    return(
      <div className="App">
        <h1 className="code">Monsters Roledox</h1>

        <SearchBox 
        
        placeholder="Search Monsters"
        handleChange = {this.handleChange}
         />
        <Cardlist monsters={filteredMonsters} />
      </div>
    )
  }
}

export default App;
