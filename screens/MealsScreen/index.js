import {View} from 'react-native';
import styles from './styles';
import {useRoute} from '@react-navigation/native';
import {MEALS} from '../../data/dummy-data';
import MealsList from '../../components/MealsList';

const MealsScreen = () => {
    const {params} = useRoute();
    const meals = MEALS.filter(meal => meal.categoryIds.includes(params?.catId));

    return (
        <View style={styles.screen}>
            <MealsList data={meals} />
        </View>
    );
};

export default MealsScreen;
