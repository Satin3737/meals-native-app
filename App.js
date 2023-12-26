import {StatusBar} from 'expo-status-bar';
import {SafeAreaView, View} from 'react-native';
import styles from './appStyles';
import CategoryScreen from './screens/CategoryScreen';

const App = () => {
    return (
        <View style={styles.app}>
            <StatusBar style="auto" />
            <SafeAreaView style={styles.appSaveView}>
                <CategoryScreen />
            </SafeAreaView>
        </View>
    );
};

export default App;
