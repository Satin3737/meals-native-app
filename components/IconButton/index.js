import {Pressable} from 'react-native';
import styles from './styles';
import Ionicons from '@expo/vector-icons/Ionicons';

const MealInfo = ({icon = 'star', color = 'white', size = 24, onPress = () => {}, buttonStyles = []}) => (
    <Pressable style={({pressed}) => [...buttonStyles, pressed ? styles.pressed : null]} onPress={onPress}>
        <Ionicons name={icon} size={size} color={color} />
    </Pressable>
);

export default MealInfo;
