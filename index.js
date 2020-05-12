import {insert} from './src/insert/insert';
import {getAll} from './src/getAll/getAll';
import {getItem} from './src/getItem/getItem';
import {getItems} from './src/getItems/getItems';
import {removeItem} from './src/removeItem/removeItem';
import {schema} from './src/schema/schema';

export const options = (collection) => {
    return {
        insert: function (data, schema, success, failure) {
            return insert(collection, data, schema, (callback) => { success(callback) }, (error) => failure(error) );
        },
        getAll: function (success, failure) {
            return getAll(collection, (data) => success(data), (error) => failure(error));
        },
        getItem: function (search, success, failure) {
            return getItem(collection, search, (data) => success(data), (error) => failure(error));
        },
        getItems: function (search, success, failure) {
            return getItems(collection, search, (data) => success(data), (error) => failure(error));
        },
        removeItem: function (remove, success, failure) {
            return removeItem(collection, remove, (data) => success(data), (error) => failure(error));
        },
    }
};

export const Pleex = {
    collection: function (collection) { 
        if (typeof collection === 'string' && collection !== null) {
            return options(collection);
        }
        else {
            /* When collection name not included or invalid */
            throw new Error(`Collection name type must be object but now is ${typeof collection}`);
        };
    },
    schema: function (schemaObj) {
        if (typeof schemaObj === 'object' && schemaObj !== null) {
            return schema(schemaObj);
        }
        else {
            /* Schema is not valid object name not included */
            throw new Error(`Schema type must be object but now is ${typeof schemaObj}`);
        };
    },
};