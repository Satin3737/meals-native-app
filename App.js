import {StatusBar} from 'expo-status-bar';
import {SafeAreaView, View} from 'react-native';
import styles from './appStyles';
import CategoryScreen from './screens/CategoryScreen';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import MealsScreen from './screens/MealsScreen';

const Stack = createNativeStackNavigator();

const App = () => {
    return (
        <NavigationContainer>
            <View style={styles.app}>
                <StatusBar style="auto" />
                <SafeAreaView style={styles.appSaveView}>
                    <Stack.Navigator>
                        <Stack.Screen name={'Categories'} component={CategoryScreen} />
                        <Stack.Screen name={'Meals'} component={MealsScreen} />
                    </Stack.Navigator>
                </SafeAreaView>
            </View>
        </NavigationContainer>
    );
};

export default App;
