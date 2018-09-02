import React, { Component } from 'react';
import {
  Card,
  Avatar,
} from 'antd';
import PropTypes from 'prop-types';
import styled from 'styled-components';


const LargeAvatar = styled(Avatar)`
  width: 100%;
  height: 90%;
  padding: 0px;
  position: absolute;
`;

const FlexCenteredCard = styled(Card)`
  .ant-card-body {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
  }

  position: relative;
  width: 17em;
  height: 17em;
`;

class MemoryCard extends Component {
  render() {
    const { frontImage, backImage } = this.props;
    return (
      <FlexCenteredCard style={{ padding: '1em' }}>
        <LargeAvatar src={frontImage} />
        <LargeAvatar src={backImage} />
      </FlexCenteredCard>
    );
  }
}

MemoryCard.propTypes = {
  frontImage: PropTypes.string.isRequired,
  backImage: PropTypes.string.isRequired,
};


export default MemoryCard;
