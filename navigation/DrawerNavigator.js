import {createDrawerNavigator} from '@react-navigation/drawer';
import CategoryScreen from '../screens/CategoryScreen';
import FavoritesScreen from '../screens/FavoritesScreen';
import Ionicons from '@expo/vector-icons/Ionicons';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
    return (
        <Drawer.Navigator
            screenOptions={{
                headerStyle: {backgroundColor: '#282828'},
                sceneContainerStyle: {backgroundColor: '#3f3f3f'},
                headerTintColor: '#fff',
                drawerContentStyle: {backgroundColor: '#282828'},
                drawerInactiveTintColor: '#ffffff80',
                drawerActiveTintColor: '#ffffff'
            }}
        >
            <Drawer.Screen
                name={'categories'}
                component={CategoryScreen}
                options={{
                    title: 'Food',
                    drawerIcon: ({color, size}) => <Ionicons name={'list'} color={color} size={size} />
                }}
            />
            <Drawer.Screen
                name={'favorites'}
                component={FavoritesScreen}
                options={{
                    title: 'Favorites',
                    drawerIcon: ({color, size}) => <Ionicons name={'star'} color={color} size={size} />
                }}
            />
        </Drawer.Navigator>
    );
};

export default DrawerNavigator;
