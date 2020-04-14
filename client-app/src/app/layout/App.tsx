import React from 'react';
import axios from 'axios';
import { Header, Icon } from 'semantic-ui-react';
import { List } from 'semantic-ui-react';
import { IActivity } from '../models/activity';

interface IState {
  activities: IActivity[];
}

class App extends React.Component<{}, IState> {
  readonly state: IState = {
    activities: [],
  };
  componentDidMount() {
    axios
      .get<IActivity[]>('http://localhost:5000/api/activities')
      .then((response) => {
        console.log(response);
        this.setState({
          activities: response.data,
        });
      });
  }
  render() {
    return (
      <div className='App'>
        <Header as='h2'>
          <Icon name='users' />
          <Header.Content>Reactivity</Header.Content>
        </Header>
        <List>
          {this.state.activities.map((activity) => (
            <List.Item key={activity.id}>{activity.title}</List.Item>
          ))}
        </List>
      </div>
    );
  }
}

export default App;
