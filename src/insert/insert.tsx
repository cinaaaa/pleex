/**
 * Insert function, use this to add data to your collection
 */
import {toCollection} from '../_serializer/toCollection';

export const insert = async (collection: string, data: object, schema: object, success: (arg0: any) => void, failure: (arg0: any) => void) => {

    /* Check type of the inputs and schema */
    if (typeof data !== 'object' || data === null) { throw new Error(`Imported data should be object not ${typeof data}`); };
    if (typeof schema !== 'object' || data === null) { throw new Error(`Schema should be object not ${typeof data}`); };
    
    /* Compare the schema and data length and keys */
    if (Object.keys(data).length !== Object.keys(schema).length) {
        throw new Error('Data is not same as schema');
    };
    Object.keys(data).sort().every(function(value, index) { 
        if (value !== Object.keys(schema).sort()[index]) { throw new Error('Data included is not same as schema'); };
    });
    

    /* Check types of values compare to schema */
    Object.keys(data).forEach((key) => {
        // Check for valid type
        if (schema[key] !== typeof data[key]) {
            throw new Error(`Type of ${key} should be ${schema[key]} not ${typeof data[key]}`);
        };
    });

    /* Now data is clean and same to shape */
    /* Save data in storage */
    toCollection(collection, data, (/*Success*/) => success(true), (error) => failure(error) );
    
};
