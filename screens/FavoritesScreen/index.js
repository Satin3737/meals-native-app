import {View} from 'react-native';
import styles from './styles';
import MealsList from '../../components/MealsList';
import {MEALS} from '../../data/dummy-data';
import {FavoritesContext} from '../../store/favorites-context';
import {useContext} from 'react';

const FavoritesScreen = () => {
    const {ids} = useContext(FavoritesContext);
    const meals = MEALS.filter(meal => ids.includes(meal.id));

    return (
        <View style={styles.screen}>
            <MealsList data={meals} />
        </View>
    );
};

export default FavoritesScreen;
