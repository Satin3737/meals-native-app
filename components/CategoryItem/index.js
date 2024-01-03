import {Pressable, View, Text} from 'react-native';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';

const CategoryItem = ({data}) => {
    const {id, title, color} = data;
    const navigation = useNavigation();

    const onPress = () => {
        navigation.navigate('meals', {
            catId: id
        });
    };

    return (
        <View style={styles.item}>
            <Pressable
                style={({pressed}) => [styles.button(color), pressed ? styles.pressed : null]}
                android_ripple={{color: '#23232320'}}
                onPress={onPress}
            >
                <View style={styles.innerItem}>
                    <Text style={styles.title}>{title}</Text>
                </View>
            </Pressable>
        </View>
    );
};

export default CategoryItem;
