import {View, Text} from 'react-native';
import styles from './styles';

const MealInfo = ({
    duration = '',
    complexity = '',
    affordability = '',
    wrapperStyles = [],
    itemsStyles = []
}) => (
    <View style={[styles.info, ...wrapperStyles]}>
        <Text style={[styles.infoItem, ...itemsStyles]}>{duration}m</Text>
        <Text style={[styles.infoItem, ...itemsStyles]}>{complexity.toUpperCase()}</Text>
        <Text style={[styles.infoItem, ...itemsStyles]}>{affordability.toUpperCase()}</Text>
    </View>
);

export default MealInfo;
