import {Pressable, View, Text} from 'react-native';

const CategoryItem = ({data}) => {
    const {title, color} = data;

    return (
        <View>
            <Pressable>
                <Text>{title}</Text>
            </Pressable>
        </View>
    );
};

export default CategoryItem;
