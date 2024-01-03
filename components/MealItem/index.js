import {View, Text, Pressable, Image} from 'react-native';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';
import MealInfo from '../MealInfo';

const MealItem = ({id, title, imageUrl, duration, complexity, affordability}) => {
    const navigation = useNavigation();
    const mealInfo = {duration, complexity, affordability};

    const onPress = () => {
        navigation.navigate('meal', {
            id,
            title
        });
    };

    return (
        <View style={styles.item}>
            <Pressable
                style={({pressed}) => (pressed ? styles.pressed : null)}
                android_ripple={{color: '#23232320'}}
                onPress={onPress}
            >
                <View style={styles.inner}>
                    <View>
                        <Image source={{uri: imageUrl}} style={styles.image} />
                        <Text style={styles.title}>{title}</Text>
                    </View>
                </View>
                <MealInfo {...mealInfo} wrapperStyles={[styles.info]} />
            </Pressable>
        </View>
    );
};

export default MealItem;
