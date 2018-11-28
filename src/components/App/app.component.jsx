import React from 'react';
import {connect} from 'react-redux';
import {message} from 'antd';
import {closeMessageAction} from '../../actions/message.action';
import './app.css';

@connect(
  state => ({
    message: state.message
  })
)
class App extends React.Component {
  static propTypes = {
    message: React.PropTypes.object.isRequired,
    dispatch: React.PropTypes.func.isRequired
  }

  static contextTypes = {
    router: React.PropTypes.object.isRequired
  }

  showMessage(messageData) {
    message[messageData.type](messageData.content);
    this.props.dispatch(closeMessageAction());
  }

  shouldComponentUpdate(nextProps) {
    if (nextProps.message.show) {
      this.showMessage(nextProps.message);
    }

    return true;
  }

  render() {
    return (
      <div style={{height: '100%', minWidth: '900px'}}>
        {this.props.children}
      </div>
    );
  }
}

export default App;
