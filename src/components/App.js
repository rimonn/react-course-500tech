import React from 'react';
import styled from 'styled-components';
// comps
import Button from './common/Button';
import Input from './common/Input';
import List from './List';

export default class App extends React.Component {
  state = {
    data: [
      { id: '123', label: 'item 1' },
      { id: '124', label: 'item 2' },
      { id: '125', label: 'item 3' },
      { id: '126', label: 'item 4' },
    ]
  };

  render() {
    return (
      <Page>
        <Navigation>500timer</Navigation>
        <Header>
          <Input
            placeholder="your item name"
            onChange={e => console.log(e.target.value)}
          />
          <Button
            onClick={() => {
              this.setState({
                data: [
                  ...this.state.data,
                  { id: 'temp', label: 'woohoo' }
                ]
              });
            }}>add item</Button>
        </Header>

        <List data={this.state.data} />
      </Page>
    );
  }
}

const Page = styled.div`
  width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

const Navigation = styled.div`
  width: 100vw;
  height: 50px;
  background: #405edc;
  display: flex;
  box-sizing: border-box;
  padding: 0 50px;
  color: #fff;
  font-size: 12px;
  text-transform: capitalize;
  align-items: center;
`;

const Header = styled.div`
  width: 100vw;
  height: 200px;
  background: #fafafa;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
