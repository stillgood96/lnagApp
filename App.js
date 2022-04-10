import React, { useEffect, useState } from 'react';
import { Animated, TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;
const Box = styled.View`
  background-color: tomato;
  width: 200px;
  height: 200px;
`;

const AnimatedBox = Animated.createAnimatedComponent(Box);

export default function App() {

  const y = new Animated.Value(0);
  const moveUp = ()=> {
    Animated.timing(y, {
      toValue : -200,
      useNativeDriver : true
    }).start()
  }

  y.addListener( () => {console.log(y)});


  return <Container>
    <TouchableOpacity onPress={moveUp}>
    <AnimatedBox  style={{
      transform: [{translateY:y}]
    }}></AnimatedBox>
    </TouchableOpacity>
  
  </Container>
}

