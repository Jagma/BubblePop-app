import {StatusBar} from 'expo-status-bar';
import React, {useState} from 'react';
import {StyleSheet, Text, View, TouchableWithoutFeedback, Image, Dimensions} from 'react-native';
import IMAGE_EXPO from './assets/triangle.png'

const IMAGE_SIZE = 100;

export default function App() {

    const [score, setScore] = useState(0);
    const [position, setPosition] = useState(getRandXY);

    return (
        <View style={{flex: 1, backgroundColor: 'steelblue'}}>
            <Text style={{fontSize: 72, textAlign: 'center'}}>{score}</Text>
            <TouchableWithoutFeedback onPressIn={() => increaseScore()}>
                <Image source={IMAGE_EXPO} style={{
                    width: IMAGE_SIZE,
                    height: IMAGE_SIZE,
                    left: position.x,
                    top: position.y,
                    position: 'absolute'
                }}/>
            </TouchableWithoutFeedback>
        </View>
    );

    function increaseScore() {
        setScore(score + 1);
        setPosition(getRandXY());
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

function getRandXY() {
    return {
        x: getRandInt(0, Dimensions.get('window').width - IMAGE_SIZE),
        y: getRandInt(0, Dimensions.get('window').height - IMAGE_SIZE)
    }
}

function getRandInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}
