import {View, Text} from 'react-native';
import styles from './styles';

export const listTypes = {bullets: 'bullets', numbers: 'numbers'};

const MealList = ({
    text = '',
    items = [],
    listType = 'bullets',
    wrapperStyles = [],
    itemsStyles = [],
    subtitleStyles = []
}) => (
    <View style={[styles.listWrapper, ...wrapperStyles]}>
        <View style={styles.list}>
            <Text style={[styles.subtitle, ...subtitleStyles]}>{text}:</Text>
        </View>
        <View>
            {items.map((item, i) => {
                const prefix = listType === 'bullets' ? '\u2022' : `${i + 1}.`;
                return (
                    <Text key={i} style={[styles.listItem, ...itemsStyles]}>
                        {prefix + ' ' + item}
                    </Text>
                );
            })}
        </View>
    </View>
);

export default MealList;
