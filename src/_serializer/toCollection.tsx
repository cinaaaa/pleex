/**
 * toCollection function, write to a collection
 */
import {AsyncStorage} from 'react-native';
import {getCollection} from './getCollection';

export const toCollection = (collection: string, input: object, success: (arg0: any) => void, failure: (arg0: any) => void) => {
    
    getCollection(collection, async (data) => {
        try {
            
            // Now we have collection
            // Write new items to it
            await AsyncStorage.setItem(collection, JSON.stringify([...data, input]));
            success(true);

        } catch (error) {
            // Error writing data
            failure(`Unknown error in write to ${collection} collection`);
        };
    }, (/**Failure */) => failure('Error to get collection') );

};