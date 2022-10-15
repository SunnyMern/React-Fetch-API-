import React from "react";
import './App.css';
import Test from "./Test";
class App extends React.Component {

  // Constructor
  constructor(props) {
    super(props);

    this.state = {
      items: [],
      DataisLoaded: false
    };
  }

  // ComponentDidMount is used to
  // execute the code
  componentDidMount() {
    fetch(
      "https://testing-std.herokuapp.com/api/student")
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
    if (!DataisLoaded) return <div>
      <h1> Pleses wait some time.... </h1> </div>;

    return (
      <div className="App">
        <Test />
         {
          items.map((item) => (
            <ol key={item.id} >
              {/* {item.firstName},
              {item.lastName},
              {item.class} */}
            </ol>
          ))
        }
      </div>
    );
  }
}

export default App;
