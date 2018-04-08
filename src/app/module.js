/**
 * Created by imokhles on 11/04/2017.
 */

import React, { Component } from 'react';
import {
    View,
    Keyboard,
    Alert,
    StyleSheet,
    NavigatorIOS
} from 'react-native';

import TabsPage from '../pages/tabs/tabs'
import LaunchPage from  '../pages/launch/launch'

// debugging only
import LoginPage from '../pages/login/login'
export default class AppModule extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loggedIn: false,
            navigationBarHidden: true
        };
    }
    componentWillMount () {

    }

    render () {
        if (this.state.loggedIn) {
            // logged in
            return (
                // <LaunchPage />
                <TabsPage />
            );

        } else {
            // not logged in
            return (
                <TabsPage />
                // {/*<NavigatorIOS ref="nav"*/}
                //               {/*itemWrapperStyle={styles.navWrap}*/}
                //               {/*style={styles.nav}*/}
                //               {/*navigationBarHidden={this.state.navigationBarHidden}*/}
                //               {/*initialRoute={{*/}
                //       {/*title: "LaunchPage",*/}
                //       {/*component: LoginPage,*/}
                //       {/*passProps: {}*/}
                //     {/*}} />*/}
            );
        }
    }
}

var styles = StyleSheet.create({
    navWrap: {
        flex: 1,
        marginTop: 0
    },
    nav: {
        flex: 1,
    },
    button: {
        backgroundColor: "#009DDD",
        padding: 10,
        margin: 10,
    },
    buttonText: {
        color: "#fff"
    }
});