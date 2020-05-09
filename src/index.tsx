import {insert} from './insert/insert';

export const options = (collection: string) => {
    return {
        insert: function (data: object, schema: object, cb: (arg0: any) => void) {
            return insert(collection, data, schema, (callback) => {cb(callback)});
        },
    }
};