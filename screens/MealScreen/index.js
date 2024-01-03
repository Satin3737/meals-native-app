import {View, Text, Image, ScrollView} from 'react-native';
import styles from './styles';
import {useRoute} from '@react-navigation/native';
import {useLayoutEffect} from 'react';
import {MEALS} from '../../data/dummy-data';
import MealInfo from '../../components/MealInfo';
import MealList, {listTypes} from '../../components/MealList';
import IconButton from '../../components/IconButton';

const MealScreen = ({navigation}) => {
    const {params} = useRoute();
    const mealId = params?.id;
    const mealData = MEALS.find(meal => meal.id === mealId);
    const {bullets, numbers} = listTypes;
    const {title, imageUrl, duration, complexity, affordability, ingredients, steps} = mealData;
    const mealInfo = {duration, complexity, affordability};

    const addToWishHandler = () => {
        console.log('Pressed');
    };

    useLayoutEffect(() => {
        navigation.setOptions({
            title,
            headerRight: () => <IconButton onPress={addToWishHandler} />
        });
    }, [navigation, addToWishHandler]);

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
