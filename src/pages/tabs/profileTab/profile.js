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
    Card, CardItem
} from 'native-base';

import {
    profileFontAwesomeIcons,
    profileIonIcons,
    styles,
} from './profile_theme'

const {
    profileListStyle,
    profileListItemHeaderStyle,
    profileListItemRideStyle,
    profileAvatarStyle,
    profileBodyStyle,
    profileRightStyle,
    profileRightIconStyle,
    profileItemsAvatarViewStyle,
    profileItemsAvatarColumnViewStyle,
    profileItemsNameColumnViewStyle,
    profileItemsNumbersColumnViewStyle,
    profileItemsNumbersRowRightViewStyle,
    profileItemsNumbersRowCenterViewStyle,
    profileItemsNumbersRowLeftViewStyle,
    profileItemsRideViewStyle,
    profileLeftStyle,
    profileLeftAvatarStyle,
    profileListItemRideMapStyle
} = styles;

export default class ProfilePage extends Component {

    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            // {/*<Container>*/}
                <View>
                <List style={profileListStyle}>
                    <ListItem avatar style={profileListItemHeaderStyle}>
                        <View style = {profileItemsAvatarViewStyle}>
                            <View style={profileItemsAvatarColumnViewStyle}>
                                <Thumbnail style={profileAvatarStyle} source={require('../../../assets/avatars/user_0.png')} />
                            </View>
                            <View style={profileItemsNameColumnViewStyle}>
                                <Text>Mokhlas Hussein</Text>
                                <Text note>@iMokhles ( Software Engineer )</Text>
                            </View>
                            <View style={profileItemsNumbersColumnViewStyle}>
                                <View style={profileItemsNumbersRowLeftViewStyle}>
                                    <Text>Rides</Text>
                                    <Text note>67</Text>
                                </View>
                                <View style={profileItemsNumbersRowCenterViewStyle}>
                                    <Text>Following</Text>
                                    <Text note>8765</Text>
                                </View>
                                <View style={profileItemsNumbersRowRightViewStyle}>
                                    <Text>Followers</Text>
                                    <Text note>567</Text>
                                </View>
                            </View>

                        </View>
                    </ListItem>

                    <ListItem style={profileListItemRideStyle}>
                        <Card >
                            <CardItem>
                                <Left>
                                    <Image style={{height: 30, width: 30, borderRadius: 15,}} source={require('../../../assets/avatars/user_6.png')} />
                                    <Body>
                                    <Text>Mokhlas Hussein</Text>
                                    <Text note>@iMokhles</Text>
                                    </Body>
                                </Left>
                            </CardItem>
                            <CardItem cardBody>
                                <Image style={profileListItemRideMapStyle} source={require('../../../assets/cells/Paris-Map.png')} />
                            </CardItem>
                            <CardItem content>
                                <Text>Wait a minute. Wait a minute, Doc. Uhhh...
                              Are you telling me that you built a time machine... out of a DeLorean?!
                              Whoa. This is heavy.</Text>
                            </CardItem>
                            <CardItem style={{ justifyContent: 'space-around', borderTopWidth: 2, borderColor: '#f48e5c', marginLeft: 20, marginRight: 20, }}>
                                <Button transparent style={{marginLeft: -35,}}>
                                    <Icon active name="thumbs-up" />
                                    <Text>12</Text>
                                </Button>
                                <Button transparent style={{marginLeft: -25,}}>
                                    <Icon active name="chatbubbles" />
                                    <Text>4</Text>
                                </Button>
                                <Button transparent/>
                                <Button transparent/>
                                <Button transparent/>
                                <Text style={{color: '#666', fontSize: 14,}}>11h ago</Text>
                            </CardItem>
                        </Card>
                    </ListItem>


                </List>
                </View>
            // </Container>
        );
    }
}