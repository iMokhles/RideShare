/**
 * Created by imokhles on 12/04/2017.
 */

import React, { Component } from 'react';
import {
    View,
    Keyboard,
    Alert,
    Image
} from 'react-native';

import {
    Container, Content, Title, Right, Left,
    Body, Header, Button, Icon,
    Tabs, Tab, TabHeading, Text,
    Footer, FooterTab, getTheme, StyleProvider,
    Form, Item, Label, Input,
    InputGroup
} from 'native-base';

import {
    loginFormInputStyleProvider,
    styles,
} from './login_theme'

const {
    loginBackgroundStyle,
    loginLoginButtonStyle,
    loginLoginTextStyle,
    loginFormItemViewStyle,
    loginFormItemStyle,
    loginForLabelStyle,
    loginFormInputStyle,
} = styles;

import StatusBarView from '../../components/StatusBarView'

export default class LoginPage extends Component {

    constructor(props) {
        super(props);

        this.state = {
            username: this.props.username,
            email: this.props.email,
            password: this.props.password
        }
    }

    // password recovery
    async loginAction() {
        const { navigator } = this.props;
        const { email, password } = this.state;

        if (!email || !password) {
            Alert.alert('Please enter your email and password');
            return;
        }
        try {
            // start login
        } catch(err) {
            // catch error
            console.log(err);
        }
    }

    // resend verification email
    async resendEmail(username) {
        console.log('resend verification email');
        try {
            // start request
        } catch (err) {
            // catch error
        }
    }

    // send reset password request
    forgotPassword () {
        const { navigator } = this.props;
        const { username, email } = this.state;
    }

    popPage() {
        this.props.navigator.pop();
    }
    render() {
        return (
            <Container style={{backgroundColor: '#f5f5f5'}}>
                <StatusBarView backgroundColor="#fff" barStyle="dark-content" />
                <Image source={require('../../assets/backgrounds/BackgroundBlur.png')}
                       style={loginBackgroundStyle}>
                    <Content>
                        <Form>
                            <Image source={require('../../assets/fields/field_bg.png')}
                                   style={loginFormItemViewStyle}>
                                <Item stackedLabel style={loginFormItemStyle}>
                                    <Label style={loginForLabelStyle}>Username</Label>
                                    <StyleProvider style={getTheme(loginFormInputStyleProvider)}>
                                        <Input
                                            style={loginFormInputStyle}
                                            placeholder="Enter your username"
                                        >
                                        </Input>
                                    </StyleProvider>
                                </Item>
                            </Image>

                            <Image source={require('../../assets/fields/field_bg.png')}
                                   style={loginFormItemViewStyle}>
                                <Item stackedLabel style={loginFormItemStyle}>
                                    <Label style={loginForLabelStyle}>Password</Label>
                                    <StyleProvider style={getTheme(loginFormInputStyleProvider)}>
                                        <Input
                                            style={loginFormInputStyle}
                                            placeholder="Enter your password"
                                        >
                                        </Input>
                                    </StyleProvider>
                                </Item>
                            </Image>
                        </Form>
                    </Content>
                    <Button rounded block
                            style={loginLoginButtonStyle}
                            onPress={this.loginAction.bind(this)}>
                        <Text style={loginLoginTextStyle}>LOG IN</Text>
                    </Button>

                </Image>
            </Container>
        );
    }

}