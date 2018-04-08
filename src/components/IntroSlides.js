/**
 * Created by imokhles on 12/04/2017.
 */

import React, {Component} from 'react';
import {
    Image,
    Text,
    View,
    ScrollView,
    StyleSheet,
    Animated,
    PanResponder,
    TouchableHighlight,
    TouchableOpacity,
    Dimensions
} from 'react-native';


import {
    IntroSlides_Theme,
} from './IntroSlides_theme'


const {
    mainViewStyle,
    mainScrollView
} = IntroSlides_Theme;

export default class IntroSlides extends Component {

    constructor() {
        super();
    }

    componentWillMount() {

    }

    render() {
        return (
            <View style={mainViewStyle}>
                <ScrollView style={mainScrollView}>

                </ScrollView>
            </View>
        );
    }
}