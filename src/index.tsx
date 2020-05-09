import {insert} from './insert/insert';
import {getAll} from './getAll/getAll';

export const options = (collection: string) => {
    return {
        insert: function (data: object, schema: object, success: (arg0: any) => void, failure: (arg0: any) => void) {
            return insert(collection, data, schema, (callback) => { success(callback) }, (error) => failure(error) );
        },
        getAll: function (success: (arg0: any) => void, failure: (arg0: any) => void) {
            return getAll(collection, (data /**Success */) => success(data), (error) => failure(error));
        }
    }
};