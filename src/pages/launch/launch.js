/**
 * Created by imokhles on 12/04/2017.
 */

import React, { Component } from 'react';
import {
    Keyboard,
    Image
} from 'react-native';

import {
    Container, Content, Title, Right, Left,
    Body, Header, Button, Icon,
    Tabs, Tab, TabHeading, Text,
    Footer, FooterTab, getTheme,
    StyleProvider, View, Grid, Col
} from 'native-base';

// import IntroSlides from '../../components/IntroSlides'

import {
    styles,
} from './launch_theme'


const {
    launchSignUpButtonStyle,
    launchLoginButtonStyle,
    launchBackgroundStyle,
    launchLoginTextStyle,
    launchLogSignUpTextStyle,
    launchLogoStyle,
} = styles;

import StatusBarView from '../../components/StatusBarView'

import LoginPage from '../login/login'
import SignupPage from '../signup/signup'

export default class LaunchPage extends Component {

    constructor(props) {
        super(props);
        this.state = {

        }
    }

    openLoginModal() {
        this.props.navigator.push({
            title: "LoginPage",
            component: LoginPage,
            passProps: {}
        });
    }
    openSignupModal() {
        this.props.navigator.push({
            title: "SignupPage",
            component: SignupPage,
            passProps: {}
        });
    }

    render() {
        return (
            <Container>

                <StatusBarView backgroundColor="#fff" barStyle="dark-content" />
                <Image source={require('../../assets/backgrounds/BackgroundLight.png')}
                       style={launchBackgroundStyle}>
                    <Content>
                        <Image source={require('../../assets/logos/logo1.png')}
                               style={launchLogoStyle}/>

                    </Content>
                    {/* Login IN*/}
                    <Button rounded block
                            style={launchLoginButtonStyle}
                            onPress={this.openLoginModal.bind(this)}>
                        <Text style={launchLoginTextStyle}>LOG IN</Text>
                    </Button>
                    {/* Sign UP*/}
                    <Button outline rounded block bordered
                            style={launchSignUpButtonStyle}
                            onPress={this.openSignupModal.bind(this)}>
                        <Text style={launchLogSignUpTextStyle}>SIGN UP</Text>
                    </Button>
                </Image>
            </Container>
        );
    }

}