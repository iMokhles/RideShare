/**
 * Created by imokhles on 13/04/2017.
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
    StyleProvider, View, Grid, Col,
    List, Thumbnail, ListItem
} from 'native-base';

import {
    notificationFontAwesomeIcons,
    notificationIonIcons,
    styles,
} from './notifications_theme'

const {
    notificationListStyle,
    notificationListItemStyle,
    notificationBodyStyle,
    notificationRightStyle,
    notificationRightIconStyle,
    notificationAvatarStyle,
    notificationAvatarViewStyle,
} = styles;

export default class NotificationsPage extends Component {

    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <View>
                <List style={notificationListStyle}>
                    <ListItem avatar last style={notificationListItemStyle}>
                        <Left>
                            <View style={notificationAvatarViewStyle}>
                                <Thumbnail style={notificationAvatarStyle} source={require('../../../assets/avatars/user_0.png')} />
                            </View>
                        </Left>
                        <Body style={notificationBodyStyle}>
                            <Text>Kumar Pratik</Text>
                            <Text note>Send you a message</Text>
                        </Body>
                        <Right style={notificationRightStyle}>
                            <Text note>3:43 pm</Text>
                            <StyleProvider style={getTheme(notificationFontAwesomeIcons)}>
                                <Icon style={notificationRightIconStyle} name="comments" />
                            </StyleProvider>
                        </Right>
                    </ListItem>
                    <ListItem avatar last style={notificationListItemStyle}>
                        <Left>
                            <View style={notificationAvatarViewStyle}>
                                <Thumbnail style={notificationAvatarStyle} source={require('../../../assets/avatars/user_1.png')} />
                            </View>
                        </Left>
                        <Body style={notificationBodyStyle}>
                        <Text>Kumar Pratik</Text>
                        <Text note>Rated your ride number #8696</Text>
                        </Body>
                        <Right style={notificationRightStyle}>
                            <Text note>3:43 pm</Text>
                            <StyleProvider style={getTheme(notificationFontAwesomeIcons)}>
                                <Icon style={notificationRightIconStyle} name="thumbs-up" />
                            </StyleProvider>
                        </Right>
                    </ListItem>
                </List>
            </View>
        );
    }
}