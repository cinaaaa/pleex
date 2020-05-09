/**
 * toCollection function, write to a collection
 */
import {AsyncStorage} from 'react-native';
import {getCollection} from './getCollection';

export const toCollection = (collection: string, input: object, cb: (arg0: any) => void) => {
    
    getCollection(collection, async (data) => {
        try {
            
            // Now we have collection
            // Write new items to it
            await AsyncStorage.setItem(collection, JSON.stringify([...data, input]));
            cb(true);

        } catch (error) {
            // Error writing data
            throw new Error(`Unknown error in write to ${collection} collection`);
        };
    });

};