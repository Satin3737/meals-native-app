import {Dimensions, Platform, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    item: {
        flex: 0.48,
        borderRadius: 16,
        elevation: 4,
        backgroundColor: '#fff',
        shadowColor: '#000',
        shadowOpacity: 0.25,
        shadowRadius: 8,
        shadowOffset: {width: 0, height: 2},
        minHeight: Dimensions.get('window').height / 6,
        ...Platform.select({
            android: {overflow: 'hidden'},
            ios: {overflow: 'visible'}
        })
    },
    button: (color) => ({
        flex: 1,
        backgroundColor: color,
        borderRadius: 16
    }),
    pressed: {
        ...Platform.select({
            ios: {opacity: 0.5}
        })
    },
    innerItem: {
        flex: 1,
        padding: 16,
        alignItems: 'center',
        justifyContent: 'center'
    },
    title: {
        fontWeight: 'bold',
        fontSize: 18
    }
});

export default styles;
