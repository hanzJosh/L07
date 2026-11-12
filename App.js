import React from 'react';
import {Text, View} from 'react-native';
import Exercise1 from './exercises/Exercise1';
import Exercise2 from './exercises/Exercise2';
import Exercise3A from "./exercises/Exercise3A";
import Exercise3B from "./exercises/Exercise3B";
import Exercise3C from "./exercises/Exercise3C";
import Exercise3D from "./exercises/Exercise3D";
import Exercise3E from "./exercises/Exercise3E";
import Exercise4 from "./exercises/Exercise4";

const L07App = () => {
    return (
        <View style={{marginTop: 30}}>
            <Text style={{fontSize:30}}>EXERCISE 1</Text>
            <Exercise1 />

            <Text style={{fontSize:30}}>EXERCISE 2</Text>
            <Exercise2 />

            <Text style={{fontSize:30}}>EXERCISE 3A</Text>
            <Exercise3A />
        </View>
    );
};

export default Exercise4;
