/**
 * getCollection function, get a collection data and convert it to json
 */
import {AsyncStorage} from 'react-native';

export const getCollection = async (collection: string, cb: (arg0: any) => void) => {

    try {
        let data = await AsyncStorage.getItem(collection);

        if (data != null) {/* Data exist, return parsed of data */ cb(JSON.parse(data));}
        else {
            await AsyncStorage.setItem(collection, "[]");
            cb([]);
        };
    } catch (error) {
       // Error retrieving data
        throw new Error(`error accured: ${error}`);
    };

};
