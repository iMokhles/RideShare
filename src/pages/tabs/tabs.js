/**
 * Created by imokhles on 11/04/2017.
 */

import React, { Component } from 'react';
import {
    View,
    Image,
    StatusBar
} from 'react-native';

import {
    Container, Content, Title, Right, Left,
    Body, Header, Button, Icon,
    Tabs, Tab, TabHeading, Text,
    Footer, FooterTab, getTheme, StyleProvider
} from 'native-base';

import {
    variablesFontAwesomeIcons,
    variablesIonIcons,
    variablesFooter,
    variablesFooterTab,
    variablesHeader,
    styles,
} from '../../theme/theme_light'

const {
    footerStyle,
    headerStyle,
    tabButtonStyle,
    launchBackgroundStyle,
    headerTitleStyle
} = styles;

import StatusBarView from '../../components/StatusBarView'
import NotifiationsPage from './notificationsTab/notifications'
import ProfilePage from './profileTab/profile'
import AddRidePage from './addrideTab/addride'


export default class TabsPage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            selectedTab: 'Add Ride'
        }
    }
    renderSelectedTab () {
        switch (this.state.selectedTab) {
            case 'Home':
                // return (<Home />);
                break;
            case 'Notifications':
                return (<NotifiationsPage />);
                break;
            case 'Profile':
                return (<ProfilePage />);
                break;
            case 'Add Ride':
                return (<AddRidePage />);
                break;
            default:
        }
    }
    render() {
        return (
            <Container>
                <StatusBarView backgroundColor="#fff" barStyle="light-content" />
                <Image source={require('../../assets/backgrounds/BackgroundLight.png')}
                       style={launchBackgroundStyle}>
                        <Header style={headerStyle}>
                            <Body>
                            <Title style={headerTitleStyle}>{this.state.selectedTab}</Title>
                            </Body>
                        </Header>
                    <Content>
                        {this.renderSelectedTab()}
                    </Content>
                    <StyleProvider style={getTheme(variablesFooter)}>
                        <Footer style={footerStyle}>
                            <StyleProvider style={getTheme(variablesFooterTab)}>
                                <FooterTab>
                                    <Button
                                        active={this.state.selectedTab==='Home'}
                                        onPress={() => this.setState({selectedTab: 'Home'})}
                                        style={tabButtonStyle}>
                                        <StyleProvider style={getTheme(variablesFontAwesomeIcons)}>
                                            <Icon name="road" />
                                        </StyleProvider>
                                    </Button>
                                    <Button active={this.state.selectedTab==='Notifications'}
                                            onPress={() => this.setState({selectedTab: 'Notifications'})}
                                            style={tabButtonStyle}>
                                        <StyleProvider style={getTheme(variablesIonIcons)}>
                                            <Icon name="notifications" />
                                        </StyleProvider>
                                    </Button>
                                    <Button active={this.state.selectedTab==='Profile'}
                                            onPress={() => this.setState({selectedTab: 'Profile'})}
                                            style={tabButtonStyle}>
                                        <StyleProvider style={getTheme(variablesFontAwesomeIcons)}>
                                            <Icon name="user" />
                                        </StyleProvider>
                                    </Button>
                                    <Button active={this.state.selectedTab==='Add Ride'}
                                            onPress={() => this.setState({selectedTab: 'Add Ride'})}
                                            style={tabButtonStyle}>
                                        <StyleProvider style={getTheme(variablesFontAwesomeIcons)}>
                                            <Icon name="plus-circle" />
                                        </StyleProvider>
                                    </Button>
                                </FooterTab>
                            </StyleProvider>
                        </Footer>
                    </StyleProvider>
                </Image>
            </Container>
        );
    }
}