/**
 * Created by imokhles on 12/04/2017.
 */

import {
    Platform,
} from 'react-native';
const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? 20 : 0;

export const StatusBarView_Theme = {
    mainViewStyle: {
        height: STATUSBAR_HEIGHT,
    }
}