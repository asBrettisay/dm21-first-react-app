import React, { Component } from 'react';

class Child extends Component {
  render() {
    console.log(
      "CHILD RENDERING"
    )
    var name = 'Brett';
    var salutation = 'Hello!';

    var chores = [
      'Do Laundry',
      'Wash Dishes',
      'Walk Dog',
      'Learn React'
    ]

    var formattedList = this.props.list.map(chore => {
      return <p>{chore}</p>
    })

    console.log(this.props);
 
    return (
      <div>
        
        <h1>Hello, {this.props.title}</h1>
        <h1>{formattedList}</h1>
      </div>
    )
  }
}

export default Child