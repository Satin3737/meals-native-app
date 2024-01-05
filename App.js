import {StatusBar} from 'expo-status-bar';
import {SafeAreaView, View} from 'react-native';
import styles from './appStyles';
import {NavigationContainer} from '@react-navigation/native';
import MealsScreen from './screens/MealsScreen';
import {useMemo} from 'react';
import MealScreen from './screens/MealScreen';
import Stack from './navigation/StackNavigator';
import DrawerNavigator from './navigation/DrawerNavigator';

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
                            name={'drawerNavigator'}
                            component={DrawerNavigator}
                            options={{headerShown: false}}
                        />
                        <Stack.Screen
                            name={'meals'}
                            component={MealsScreen}
                            options={{title: 'Meals', ...screenOption}}
                        />
                        <Stack.Screen
                            name={'meal'}
                            component={MealScreen}
                            options={{title: 'Meal', ...screenOption}}
                        />
                    </Stack.Navigator>
                </SafeAreaView>
            </View>
        </NavigationContainer>
    );
};

export default App;
