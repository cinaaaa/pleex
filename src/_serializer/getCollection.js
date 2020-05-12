/**
 * getCollection function, get a collection data and convert it to json
 */
import {AsyncStorage} from 'react-native';

export const getCollection = async (collection, success, failure) => {

    try {

        let data = await AsyncStorage.getItem(collection);

        if (data != null) {success(JSON.parse(data));}
        else {
            await AsyncStorage.setItem(collection, "[]");
            success([]);
        };

    } catch (error) {
        // Error retrieving data
        failure(`error accured: ${error}`);
    };

};
