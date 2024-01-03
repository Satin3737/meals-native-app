import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    screen: {
        flex: 1
    },
    contentWrapper: {
        paddingTop: 24,
        paddingBottom: 16,
        paddingHorizontal: 16
    },
    image: {
        width: '100%',
        objectFit: 'cover',
        height: 240
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 12,
        color: '#fff'
    },
    infoWrapper: {
        marginBottom: 24
    },
    infoItem: {
        color: '#fff'
    },
    listsWrapper: {
        gap: 16
    }
});

export default styles;
