import {insert} from './insert/insert';
import {getAll} from './getAll/getAll';
import {getItem} from './getItem/getItem';
import {getItems} from './getItems/getItems';
import {removeItem} from './removeItem/removeItem';
import {schema} from './schema/schema';

export const options = (collection: string) => {
    return {
        insert: function (data: object, schema: object, success: (arg0: any) => void, failure: (arg0: any) => void) {
            return insert(collection, data, schema, (callback) => { success(callback) }, (error) => failure(error) );
        },
        getAll: function (success: (arg0: any) => void, failure: (arg0: any) => void) {
            return getAll(collection, (data) => success(data), (error) => failure(error));
        },
        getItem: function (search: object, success: (arg0: any) => void, failure: (arg0: any) => void) {
            return getItem(collection, search, (data) => success(data), (error) => failure(error));
        },
        getItems: function (search: object, success: (arg0: any) => void, failure: (arg0: any) => void) {
            return getItems(collection, search, (data) => success(data), (error) => failure(error));
        },
        removeItem: function (remove: object, success: (arg0: any) => void, failure: (arg0: any) => void) {
            return removeItem(collection, remove, (data) => success(data), (error) => failure(error));
        },
    }
};

export const Pleex = {
    collection: function (collection: string /* Collection name */) { 
        if (typeof collection === 'string' && collection !== null) {
            return options(collection);
        }
        else {
            /* When collection name not included or invalid */
            throw new Error(`Collection name type must be object but now is ${typeof collection}`);
        };
    },
    schema: function (schemaObj: object /* Schema object */) {
        if (typeof schemaObj === 'object' && schemaObj !== null) {
            return schema(schemaObj);
        }
        else {
            /* Schema is not valid object name not included */
            throw new Error(`Schema type must be object but now is ${typeof schemaObj}`);
        };
    },
};