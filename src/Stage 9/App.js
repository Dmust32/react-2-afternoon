import React, { Component } from 'react';

import Employee from './models/Employee';

// components
import Header from "./components/Header";
import EmployeeList from "./components/EmployeeList";
import EmployeeEditor from "./components/EmployeeEditor";

class App extends Component {
  // constructor
  constructor(props){
    super(props)

    this.state = {
      employees: [ new Employee(0, 'Bernice Ortiz', 4824931093, 'CEO'), new Employee(1, 'Marnie Barnett', 3094812387, 'CTO'), new Employee(2, 'Phillip Weaver', 7459831843, 'Manager'), new Employee(3, 'Teresa Osborne', 3841238745, 'Director of Engineering'), new Employee(4, 'Dollie Berry', 4873459812, 'Front-End Developer'), new Employee(5, 'Harriett Williamson', 6571249801, 'Front-End Developer'), new Employee(6, 'Ruby Estrada', 5740923478, 'Back-End Developer'), new Employee(7, 'Lou White', 8727813498, 'Full-Stack Developer'), new Employee(8, 'Eve Sparks', 8734567810, 'Product Manager'), new Employee(9, 'Lois Brewer', 8749823456, 'Sales Manager') ],

      selectEmployee: null

    }
  }

  // selectEmployee
  selectedEmployee = (employee) => {
    this.setState({selectEmployee: employee})
  }

  // refresh
  refresh = () => {
    this.setState(this.state)
  }

  render() {
    return (
      <div id="app">
        <Header id = "app" />
        <div className="main-container">
          <EmployeeList id = "main-container" employees = {this.state.employees} selectEmployee = {(employee) => {this.selectedEmployee(employee)}} />
          <EmployeeEditor id = "main-container" selected={this.state.selectEmployee} refreshList = {this.refresh}/>
        </div>
      </div>
    )
  }
}

export default App;
