import {StatusBar} from 'expo-status-bar';
import {View} from 'react-native';
import styles from './appStyles';
import CategoryScreen from './screens/CategoryScreen';

const App = () => {
    return (
        <View style={styles.screen}>
            <StatusBar style="auto" />
            <CategoryScreen />
        </View>
    );
};

export default App;
