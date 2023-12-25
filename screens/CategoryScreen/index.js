import {FlatList} from 'react-native';
import {CATEGORIES} from '../../data/dummy-data';
import CategoryItem from '../../components/CategoryItem';

const CategoryScreen = () => {
    return (
        <FlatList
            data={CATEGORIES}
            keyExtractor={(item) => item.id}
            renderItem={(item) => <CategoryItem data={item.item} />}
        />
    );
};

export default CategoryScreen;
