import React from 'react';
import logo from './logo.svg';
import { HousesCharacters } from './components/characters';
import {GetHouses} from './requests/houses';
import { TableComponent } from './components/table';
import { StudentsCharacters } from './components/characters';
import { GetStudents } from './requests/students';
import { StaffCharacters } from './components/characters';
import { GetStaff } from './requests/staff';


import './App.css';

function App() {

  return (
    <div className="App">
      <header className="App-header">
        {/* <GetHouses Houses={'slytherin'}/> */}
        
      </header>
      
      <TableComponent/>

    </div>);
       
    <div className="App">
    <header className="App-header">
      {/* <GetHouses houses/> */}
      
    </header>
    
    <TableComponent/>

  </div>;
  

}

  <div className="App">
    <header className="App-header">
      {/* <GetStudents Students={'slytherin'}/> */}
      
    </header>
    
    <TableComponent/>

  </div>;(
  <div className="App">
  <header className="App-header">
    {/* <GetStudents students/> */}
    
  </header>
  
  <TableComponent/>

</div>


);


export default App;
