import {Text, View} from 'react-native';
import styles from './styles';

const EmptyList = () => {
    return (
        <View>
            <Text style={styles.text}>List is empty (</Text>
        </View>
    );
};

export default EmptyList;
