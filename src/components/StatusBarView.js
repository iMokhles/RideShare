/**
 * Created by imokhles on 12/04/2017.
 */

import React, {Component} from 'react';
import {
    View,
    StatusBar,
    Platform,
} from 'react-native';

import {
    StatusBarView_Theme,
} from './StatusBarView_theme'

const {
    mainViewStyle
} = StatusBarView_Theme;

export default StatusBarView = ({backgroundColor, ...props}) => {
    return  (
        <View style={[mainViewStyle, { backgroundColor }]}>
            <StatusBar backgroundColor={backgroundColor} {...props} />
        </View>
    );
};