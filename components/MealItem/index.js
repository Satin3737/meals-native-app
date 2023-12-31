import {View, Text, Pressable, Image} from 'react-native';
import styles from './styles';

const MealItem = ({title, imageUrl, duration, complexity, affordability}) => {
    return (
        <View style={styles.item}>
            <Pressable
                style={({pressed}) => (pressed ? styles.pressed : null)}
                android_ripple={{color: '#23232320'}}
            >
                <View style={styles.inner}>
                    <View>
                        <Image source={{uri: imageUrl}} style={styles.image} />
                        <Text style={styles.title}>{title}</Text>
                    </View>
                    <View style={styles.info}>
                        <Text style={styles.infoItem}>{duration}m</Text>
                        <Text style={styles.infoItem}>{complexity.toUpperCase()}</Text>
                        <Text style={styles.infoItem}>{affordability.toUpperCase()}</Text>
                    </View>
                </View>
            </Pressable>
        </View>
    );
};

export default MealItem;
