import {FlatList, View} from 'react-native';
import styles from './styles';
import MealItem from '../../components/MealItem';
import EmptyList from '../EmptyList';

const MealsList = ({data}) => {
    return (
        <FlatList
            data={data}
            keyExtractor={item => item.id}
            ItemSeparatorComponent={() => <View style={styles.gap}></View>}
            ListEmptyComponent={<EmptyList />}
            renderItem={({item}) => {
                const {id, title, imageUrl, duration, complexity, affordability} = item;

                const mealProps = {
                    id,
                    title,
                    imageUrl,
                    duration,
                    complexity,
                    affordability
                };

                return <MealItem {...mealProps} />;
            }}
        />
    );
};

export default MealsList;
