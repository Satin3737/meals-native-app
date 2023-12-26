import {Pressable, View, Text} from 'react-native';
import styles from './styles';

const CategoryItem = ({data}) => {
    const {title, color} = data;

    return (
        <View style={styles.item}>
            <Pressable
                style={({pressed}) => [styles.button(color), pressed ? styles.pressed : null]}
                android_ripple={{color: '#23232320'}}
            >
                <View style={styles.innerItem}>
                    <Text style={styles.title}>{title}</Text>
                </View>
            </Pressable>
        </View>
    );
};

export default CategoryItem;
