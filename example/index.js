import React, { Component } from 'react';
import {
    View
} from 'react-native';

import Picker from 'react-native-easy-picker';

export default class App extends Component {
    render() {
        return (
            <View style={{ flex: 1 }}>
                <Picker
                    iconColor='#333'
                    initIndex={0}
                    data={[... new Array(4)].map((v, i) => ({
                        id: i + 1,
                        text: 'text-' + (i + 1),
                        value: 'value-' + (i + 1),
                    }))}
                    onChange={item => console.log(item)}
                    animationType='none'
                    alpha={0.5}
                    textStyle={{
                        fontSize: 24,
                    }}
                    itemTextStyle={{
                        color: '#333'
                    }}
                />
            </View>
        );
    }
}
