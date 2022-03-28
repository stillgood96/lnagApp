import React, { useEffect, useState } from 'react';
import { Animated } from 'react-native';
import styled from 'styled-components/native';

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;
const Box = styled.TouchableOpacity`
  background-color: tomato;
  width: 200px;
  height: 200px;
`;

const AnimatedBox = Animated.createAnimatedComponent(Box);

export default function App() {

  const y = new Animated.Value(0);
  const moveUp = ()=> {
  }


  return <Container>
    <Box onPress={moveUp} style={{
      transform: [{translateY:y}]
    }}></Box>
  </Container>
}

