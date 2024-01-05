import {View} from 'react-native';
import styles from './styles';
import MealsList from '../../components/MealsList';
import {MEALS} from '../../data/dummy-data';
import {useSelector} from 'react-redux';
import {getFavoritesIds} from '../../store/redux/favoritesSlice';

const FavoritesScreen = () => {
    const favoritesIds = useSelector(getFavoritesIds);
    const meals = MEALS.filter(meal => favoritesIds.includes(meal.id));

    return (
        <View style={styles.screen}>
            <MealsList data={meals} />
        </View>
    );
};

export default FavoritesScreen;
