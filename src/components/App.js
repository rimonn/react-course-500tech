import React from 'react';

export default class App extends React.Component {
  // state = {
  //   count: 0
  // };

  constructor() {
    super();

    this.state = {
      count: 0
    };

    // equivalent to: add = () => ...
    //                sub = () => ...
    // but more elegant
    //this.add = this.add.bind(this);
    //this.sub = this.sub.bind(this);
  }

  add = () => {
    // this.setState({ count: this.state.count + 1});
    this.state.count += 1;
    this.forceUpdate();
  };

  sub = () => {
    this.setState({ count: this.state.count - 1});
  };

  render() {
    const { count } = this.state;

    return (
      <div>
        <div>{count}</div>
        {/*not recommended because causing the binding to be performed each render*/}
        {/*<button onClick={() => this.add.bind(this)}>add</button>*/}
        
        <button onClick={this.add}>add</button>
        <button onClick={this.sub}>sub</button>
      </div>
    );
  }
}
