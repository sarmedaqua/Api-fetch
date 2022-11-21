import React from "react";
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      items: [],
      DataisLoaded: false
    };
  }

  componentDidMount() { //life cycle hooks http://localhost:3001/api
    //fetch("https://jsonplaceholder.typicode.com/users")
    fetch("http://localhost:3002/api")
      .then((res) => res.json())
      .then((json) => {
        this.setState({
          items: json,
          DataisLoaded: true
        });
      })
  }

  render() {
    const { DataisLoaded, items } = this.state;
    if (!DataisLoaded) return <div><h1>Wait a  bit</h1> </div>;

    return (
      <div className="App">
        <h1>Fetch data from the api</h1> {
          items.map((item) => (
            <ol key={item.id}>
              User_Name: {item.username},
              Full_Name: {item.name},
              User_Email: {item.email}
            </ol>
          ))
        }
      </div>
    );

  }
}

export default App;
