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
    List, Thumbnail, ListItem,
    Card, CardItem, Form,
    Item, Label, Input
} from 'native-base';

import {
    addrideFontAwesomeIcons,
    addrideIonIcons,
    styles,
} from './addride_theme'

const {
    addrideListStyle,
    addrideAvatarViewStyle,
    addrideListItemHeaderStyle,
    addrideListItemRideStyle,
    addrideHeaderFormStyle,
    addrideHeaderFormItemStyle,
    addrideLineTopStyle,
    addrideLineBottomStyle,
    addrideBodyStyle,
    addrideGreenDotStyle,
    addrideRedDotStyle,
    addrideRightStyle,
    addrideRightIconStyle,
    addrideItemsAvatarViewStyle,
    addrideItemsAvatarColumnViewStyle,
    addrideItemsNameColumnViewStyle,
    addrideItemsNumbersColumnViewStyle,
    addrideItemsNumbersRowRightViewStyle,
    addrideItemsNumbersRowCenterViewStyle,
    addrideItemsNumbersRowLeftViewStyle,
    addrideItemsRideViewStyle,
    addrideLeftStyle,
    addrideLeftAvatarStyle,
    addrideListItemRideMapStyle
} = styles;

export default class AddRidePage extends Component {

    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <View>
                <List style={addrideListStyle}>
                    <ListItem avatar style={addrideListItemHeaderStyle}>
                        <Left>
                            <View style={addrideAvatarViewStyle}>
                                <StyleProvider style={getTheme(addrideFontAwesomeIcons)}>
                                    <Icon style={addrideGreenDotStyle} name="street-view" />
                                </StyleProvider>
                                <Image style={addrideLineTopStyle} source={require('../../../assets/fields/line_img.png')} />
                                <Image style={addrideLineBottomStyle} source={require('../../../assets/fields/line_img.png')} />
                                <StyleProvider style={getTheme(addrideFontAwesomeIcons)}>
                                    <Icon style={addrideRedDotStyle} name="map-pin" />
                                </StyleProvider>
                            </View>
                        </Left>
                        <Body style={addrideBodyStyle}>
                            <Form style={addrideHeaderFormStyle}>
                                <Item  style={addrideHeaderFormItemStyle}>
                                    <Input placeholder="Current location">
                                    </Input>
                                </Item>
                                <Item style={addrideHeaderFormItemStyle}>
                                    <Input placeholder="Destination">
                                    </Input>
                                </Item>
                            </Form>
                        </Body>

                    </ListItem>
                </List>
            </View>
        );
    }
}