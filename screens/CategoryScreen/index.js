import {FlatList} from 'react-native';
import {CATEGORIES} from '../../data/dummy-data';
import CategoryItem from '../../components/CategoryItem';
import styles from './styles';

const CategoryScreen = () => {
    return (
        <FlatList
            data={CATEGORIES}
            keyExtractor={(item) => item.id}
            renderItem={(item) => <CategoryItem data={item.item} />}
            numColumns={2}
            columnWrapperStyle={styles.gap}
        />
    );
};

export default CategoryScreen;
