import React, { Component } from 'react';
import styled from 'styled-components/native';
import {
    View, Modal,
    ScrollView,
    TouchableNativeFeedback as Touch,
    TouchableOpacity as OTouch,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

/**
    list = [{
        text: '',
        id: '',
        value: '',
    }]
*/

export default class Picker extends Component {
    constructor(props) {
        super(props);
        this.state = {
            show: false,
        }
    }

    open = () => {
        this.setState({ show: true });
    }

    close = () => {
        this.setState({ show: false });
    }

    render() {
        const {
            data = [], active = 0,
            theme, width, height,
            itemTextStyle,
            animationType,
            onChange = _ => _,
        } = this.props;
        const { show } = this.state;


        return (
            <Modal
                animationType={animationType || 'none'}
                visible={show}
                transparent={true}
                onRequestClose={this.close}
                hardwareAccelerated={true}
                presentationStyle='overFullScreen'>
                <Float>
                    <OTouch
                        activeOpacity={1}
                        style={{ width, height }}
                        onPress={this.close}>
                        <ScrollView style={{
                            flex: 1,
                        }} contentContainerStyle={{
                            elevation: 8,
                            backgroundColor: '#fff',
                        }}>
                            <Root>
                                {data.map((item, index) => (
                                    <Touch key={index} onPress={e => {
                                        onChange(item, index);
                                        this.close();
                                    }}>
                                        <Item>
                                            <Text style={itemTextStyle}>{item.text}</Text>
                                            {active === index ?
                                                <Icon name='check' size={22} color={theme} /> :
                                                <View style={{ width: 20, height: 20 }} />
                                            }
                                        </Item>
                                    </Touch>
                                ))}
                            </Root>
                        </ScrollView>
                    </OTouch>
                </Float>
            </Modal>
        );
    }
}

const Float = styled.TouchableOpacity`
    position: relative;
    width: 100%;
    height: 100%;
    flex: 1;
    justify-content: center;
    align-items: center;
    background-color: rgba(1, 1, 1, ${p => p.alpha || 0.55});
`;

const Root = styled.View`
    width: 100%;
    background-color: #fff;
    border-radius: 2px;
`;

const Item = styled.View`
    padding: 12px 16px;
    flex-direction: row;
    align-items: center;
    height: 50px;
    border-bottom-color: #eee;
    border-bottom-width: 0.3px;
`;

const Text = styled.Text`
    font-size: 14px;
    color: #333;
    flex: 1;
`;