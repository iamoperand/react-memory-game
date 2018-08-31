import React, { Component } from 'react';
import {
  Row,
  Button,
  Icon,
} from 'antd';
import PropTypes from 'prop-types';

import routes from '../../config/routes';


class Home extends Component {
  letsPlay = () => {
    const { history } = this.props;
    history.push(routes.Playground);
  }

  render() {
    return (
      <div style={{ textAlign: 'center', margin: '1em 0' }}>
        <Row>
          <h1>Recollection - The Memory Game</h1>
        </Row>

        <Row style={{ marginTop: '5em' }}>
          <Row>
            <h3>Ready to roll?</h3>
          </Row>
          <Row>
            <Button type="primary" onClick={this.letsPlay}>
              LET&apos;S PLAY<Icon type="right" />
            </Button>
          </Row>
        </Row>
      </div>
    );
  }
}

Home.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

export default Home;
