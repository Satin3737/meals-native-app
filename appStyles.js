import {Dimensions, Platform, StyleSheet} from 'react-native';
import Constants from 'expo-constants';

const styles = StyleSheet.create({
    app: {
        flex: 1,
        minHeight: Dimensions.get('screen').height,
        backgroundColor: '#282828'
    },
    appSaveView: {
        flex: 1
        // paddingHorizontal: 16,
        // paddingTop: Platform.OS === 'android' ? Constants.statusBarHeight + 24 : 24
    }
});

export default styles;
