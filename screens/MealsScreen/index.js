import {FlatList, View} from 'react-native';
import styles from './styles';
import {useRoute} from '@react-navigation/native';
import {MEALS} from '../../data/dummy-data';
import MealItem from '../../components/MealItem';

const MealsScreen = () => {
    const {params} = useRoute();
    const meals = MEALS.filter(meal => meal.categoryIds.includes(params?.catId));

    return (
        <View style={styles.screen}>
            <FlatList
                data={meals}
                keyExtractor={item => item.id}
                renderItem={({item}) => <MealItem data={item} />}
            />
        </View>
    );
};

export default MealsScreen;
