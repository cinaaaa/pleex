import {insert} from './insert/insert';
import {getAll} from './getAll/getAll';
import {getItem} from './getItem/getItem';

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
    }
};