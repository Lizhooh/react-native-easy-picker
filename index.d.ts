import * as React from 'react';
import * as ReactNative from 'react-native';

interface IProps {
    /** select data source */
    data: [{
        id: number | string,
        text: string,
        value: any,
    }],
    /** default: 0.64 */
    alpha: number,
    /**
     * The `animationType` prop controls how the modal animates.
     *
     * - `slide` slides in from the bottom
     * - `fade` fades into view
     * - `none` appears without an animation
     */
    animationType?: 'none' | 'slide' | 'fade',

    /** Visual area default: 80% */
    width?: number | string,
    /** Visual area default: 75% */
    height?: number | string,
    /** Selected text style */
    textStyle?: ReactNative.TextStyle,
    /** Text style of the option */
    itemTextStyle?: ReactNative.TextStyle,
    /** icon color, default: #333 */
    iconColor?: string,
    /** Change selected item */
    onChange: (item: {
        id: number | string,
        text: string,
        value: any,
    }, index: number) => any,
    /** Initial selection index */
    initIndex: number,
}

export default class ReactNativeEasyPicker extends React.Component<IProps> {

}