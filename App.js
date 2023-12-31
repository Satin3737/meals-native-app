import {StatusBar} from 'expo-status-bar';
import {SafeAreaView, View} from 'react-native';
import styles from './appStyles';
import CategoryScreen from './screens/CategoryScreen';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import MealsScreen from './screens/MealsScreen';
import {useMemo} from 'react';

const Stack = createNativeStackNavigator();

const App = () => {
    const screenOption = useMemo(() => ({
        headerStyle: {backgroundColor: '#282828'},
        contentStyle: {backgroundColor: '#3f3f3f'},
        headerTintColor: '#fff'
    }));

    return (
        <NavigationContainer>
            <View style={styles.app}>
                <StatusBar style="light" />
                <SafeAreaView style={styles.appSaveView}>
                    <Stack.Navigator>
                        <Stack.Screen
                            name={'categories'}
                            component={CategoryScreen}
                            options={{
                                title: 'Categories',
                                ...screenOption
                            }}
                        />
                        <Stack.Screen
                            name={'meals'}
                            component={MealsScreen}
                            options={{title: 'Meals', ...screenOption}}
                        />
                    </Stack.Navigator>
                </SafeAreaView>
            </View>
        </NavigationContainer>
    );
};

export default App;
