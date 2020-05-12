/**
 * toCollection function, write to a collection
 */
import {AsyncStorage} from 'react-native';
import {getCollection} from './getCollection';

export const toCollection = (collection, input, success, failure, clear) => {
    
    getCollection(collection, async (data) => {
        try {

            // Now we have collection
            // Write new items to it
            if (clear) {
                await AsyncStorage.setItem(collection, JSON.stringify([input]));
                success(true);
            }
            else {
                await AsyncStorage.setItem(collection, JSON.stringify([...data, input]));
                success(true);
            };

        } catch (error) {
            // Error writing data
            failure(`Unknown error in write to ${collection} collection`);
        };
    }, (/**Failure */) => failure('Error to get collection') );

};
