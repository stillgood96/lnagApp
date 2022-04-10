import React, { useRef, useState } from 'react';
import { Animated, Easing, TouchableOpacity } from 'react-native';
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

  const [up, setUp] = useState(false);

  const y = useRef(new Animated.Value(0)).current;

  const toggleUp = () => setUp(prev => !prev);
  const moveUp = ()=> {
    Animated.timing(y, {
      toValue : up? 200 :  -200,
      useNativeDriver : true,
      easing : Easing.elastic(5)
    }).start(toggleUp);
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

