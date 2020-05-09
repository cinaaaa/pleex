/**
 * getCollection function, get a collection data and convert it to json
 */
import {AsyncStorage} from 'react-native';

export const getCollection = async (collection: string, success: (arg0: any) => void, failure: (arg0: any) => void) => {

    try {

        let data = await AsyncStorage.getItem(collection);

        if (data != null) {/* Data exist, return parsed of data */ success(JSON.parse(data));}

        else {
            await AsyncStorage.setItem(collection, "[]");
            success([]);
        };

    } catch (error) {
        // Error retrieving data
        failure(`error accured: ${error}`);
    };

};