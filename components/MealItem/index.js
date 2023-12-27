import {View, Text} from 'react-native';
import styles from './styles';

const MealItem = ({data}) => {
    const {title} = data;

    return (
        <View style={styles.item}>
            <Text style={styles.title}>{title}</Text>
        </View>
    );
};

export default MealItem;
