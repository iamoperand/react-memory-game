import React, { Component } from 'react';
import {
  Card,
  Row,
  Col,
} from 'antd';
import styled from 'styled-components';

import MemoryCard from '../MemoryCard';


const NoPaddingCard = styled(Card)`
  .ant-card-body {
    padding: 0;
  }
`;

class Playground extends Component {
  constructor(props) {
    super(props);
    this.state = {
      avatars: [],
    };
  }

  componentDidMount() {
    const startingIndex = Math.ceil(5 * Math.random());
    this.generateAvatars(startingIndex);
  }

  shuffle = (avatarsArray) => {
    const transformedArray = avatarsArray.map((avatar) => {
      return `${Math.random() * 100}-${avatar}`;
    });

    transformedArray.sort((a, b) => (a - b));

    const shuffledArray = transformedArray.map((transformedAvatar) => {
      const firstOccurenceOfSeparator = transformedAvatar.indexOf('-');
      return transformedAvatar.slice(firstOccurenceOfSeparator + 1);
    });

    return shuffledArray;
  }

  generateAvatars = (startingIndex) => {
    let index = startingIndex;
    const endIndex = startingIndex + 5;

    const tempAvatarsArray = [];

    while (index <= endIndex) {
      tempAvatarsArray.push(`/images/avatar-${index}.png`);
      tempAvatarsArray.push(`/images/avatar-${index}.png`);

      index += 1;
    }

    const shuffledArray = this.shuffle(tempAvatarsArray);

    const shuffledArrayWithKey = shuffledArray.map((avatar, shuffledIndex) => {
      return {
        key: shuffledIndex,
        image: avatar,
      };
    });

    this.setState({
      avatars: shuffledArrayWithKey,
    });
  }

  render() {
    const { avatars } = this.state;

    return (
      <div>
        <h2>
          Playground
        </h2>
        <NoPaddingCard style={{ display: 'flex', flexWrap: 'wrap' }}>
          <Row>
            {
              avatars.map(avatar => (
                <Col span={6}>
                  <MemoryCard
                    frontImage={avatar.image}
                    backImage="/images/placeholder.png"
                    key={avatar.key}
                  />
                </Col>
              ))
            }
          </Row>
        </NoPaddingCard>
      </div>
    );
  }
}


export default Playground;
