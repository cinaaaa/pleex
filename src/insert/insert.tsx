/**
 * Insert function, use this to add data to your collection
 */
import {AsyncStorage} from 'react-native';

interface InsertProps {
    data: object; // Data want to insert
    shape: object; // Schema included
};

const insert = async (collection, data:InsertProps) => {
    await AsyncStorage.setItem('key', 'value');
};