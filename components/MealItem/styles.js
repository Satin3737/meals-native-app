import {Dimensions, Platform, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    item: {
        flex: 1,
        marginHorizontal: 16,
        borderRadius: 16,
        overflow: 'hidden',
        backgroundColor: '#fff',
        elevation: 4,
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
    info: {
        paddingHorizontal: 8,
        paddingTop: 4,
        paddingBottom: 16
    },
    inner: {
        borderRadius: 16,
        overflow: 'hidden'
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        margin: 8,
        textAlign: 'center'
    },
    image: {
        flex: 1,
        width: '100%',
        aspectRatio: 1.6,
        objectFit: 'cover'
    },
    pressed: {
        ...Platform.select({
            ios: {opacity: 0.5}
        })
    }
});

export default styles;
