import React, { Component } from 'react';
import styled from 'styled-components/native';
import PickerModal from './Modal';

/**
    data = [{
        text: '',
        id: '',
        value: '',
    }]
*/

export default class SelectPicker extends Component {

    static defaultProps = {
        onChange: (item, index) => index,
        alpha: 0.64,
        animationType: 'none',
        width: '80%',
        height: '75%',
        style: {},
        textStyle: {},
        itemTextStyle: {},
        iconColor: '#333',
        data: [],
        initIndex: 0,
    }

    constructor(props) {
        super(props);
        this.state = {
            active: props.initIndex,
        }
    }

    render() {
        const { active } = this.state;
        const { data = [], iconColor, textStyle } = this.props;

        return (
            <Root activeOpacity={1} style={style} onPress={e => this.modal.open()}>
                <Text style={textStyle}>{data[active].text}</Text>

                <PickerModal
                    ref={r => this.modal = r}
                    theme={iconColor}
                    active={active}
                    {...this.props}
                    onChange={(item, index) => {
                        this.setState({ active: index });
                        this.props.onChange(item, index);
                    }}
                />
            </Root>
        );
    }
}

const Root = styled.TouchableOpacity`
    padding: 5px;
`;

const Text = styled.Text`
    color: #555;
`;
