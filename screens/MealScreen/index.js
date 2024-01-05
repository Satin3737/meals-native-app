import {View, Text, Image, ScrollView} from 'react-native';
import styles from './styles';
import {useRoute} from '@react-navigation/native';
import {useContext, useLayoutEffect} from 'react';
import {MEALS} from '../../data/dummy-data';
import MealInfo from '../../components/MealInfo';
import MealList, {listTypes} from '../../components/MealList';
import IconButton from '../../components/IconButton';
import {FavoritesContext} from '../../store/favorites-context';

const MealScreen = ({navigation}) => {
    const {ids, addFavorite, removeFavorite} = useContext(FavoritesContext);
    const {params} = useRoute();
    const mealId = params?.id;
    const mealData = MEALS.find(meal => meal.id === mealId);
    const {bullets, numbers} = listTypes;
    const {title, imageUrl, duration, complexity, affordability, ingredients, steps} = mealData;
    const mealInfo = {duration, complexity, affordability};
    const isFavorite = ids.includes(mealId);

    const changeFavoriteState = () => (isFavorite ? removeFavorite(mealId) : addFavorite(mealId));

    useLayoutEffect(() => {
        navigation.setOptions({
            title,
            headerRight: () => (
                <IconButton icon={isFavorite ? 'star' : 'star-outline'} onPress={changeFavoriteState} />
            )
        });
    }, [navigation, changeFavoriteState]);

    return (
        <ScrollView style={styles.screen}>
            <Image source={{uri: imageUrl}} style={styles.image} />
            <View style={styles.contentWrapper}>
                <Text style={styles.title}>{title}</Text>
                <MealInfo
                    {...mealInfo}
                    wrapperStyles={[styles.infoWrapper]}
                    itemsStyles={[styles.infoItem]}
                />
                <View style={styles.listsWrapper}>
                    <MealList text={'Ingredients'} items={ingredients} listType={bullets} />
                    <MealList text={'Steps'} items={steps} listType={numbers} />
                </View>
            </View>
        </ScrollView>
    );
};

export default MealScreen;
