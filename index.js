import {typechecker} from './src/_typecheker/typechecker';
import {insert} from './src/insert/insert';
import {insertMultiple} from './src/insertMultiple/insertMultiple';
import {getAll} from './src/getAll/getAll';
import {getItem} from './src/getItem/getItem';
import {getItems} from './src/getItems/getItems';
import {removeItem} from './src/removeItem/removeItem';
import {schema} from './src/schema/schema';
import {clearCollection} from './src/clearCollection/clearCollection';

const options = (collection) => {
    return {
        insert: (data, schema, success, failure) => {
            typechecker(
                [
                    [data, Object],
                    [schema, Object],
                    [success, Function],
                    [failure, Function],
                ],
                () => {insert(collection, data, schema, (cb) => {success(cb)}, (err) => failure(err));}
            );
        },
        getAll: (success, failure) => {
            typechecker(
                [
                    [success, Function],
                    [failure, Function],
                ],
                () => {getAll(collection, (cb) => success(cb), (err) => failure(err));}
            );
        },
        getItem: (search, success, failure) => {
            typechecker(
                [
                    [search, Object],
                    [success, Function],
                    [failure, Function],
                ],
                () => {getItem(collection, search, (cb) => success(cb), (err) => failure(err));}
            );
        },
        getItems: (search, success, failure) => {
            typechecker(
                [
                    [search, Object],
                    [success, Function],
                    [failure, Function],
                ],
                () => {getItems(collection, search, (cb) => success(cb), (err) => failure(err));}
            );
        },
        removeItem: (remove, success, failure) => {
            typechecker(
                [
                    [remove, Object],
                    [success, Function],
                    [failure, Function],
                ],
                () => {removeItem(collection, remove, (cb) => success(cb), (err) => failure(err));}
            );
        },
        clearCollection: (success, failure) => {
            typechecker(
                [
                    [success, Function],
                    [failure, Function],
                ],
                () => {clearCollection(collection, (cb) => success(cb), (err) => failure(err));}
            );
        },
        insertMultiple: (data, schema, success, failure) => {
            typechecker(
                [
                    [data, Object],
                    [schema, Object],
                    [success, Function],
                    [failure, Function],
                ],
                () => {insertMultiple(collection, data, schema, (cb) => success(cb), (err) => failure(err));}
            );
        },
    };
};

export const Pleex = {
    collection: (collection) => {
        if (typeof collection === 'string' && collection !== null) {
            return options(collection);
        }
        else {
            /* When collection name not included or invalid */
            throw new Error(`Collection name type must be object but now is ${typeof collection}`);
        };
    },
    schema: (schemaObj) => {
        if (typeof schemaObj === 'object' && schemaObj !== null) {
            return schema(schemaObj);
        }
        else {
            /* Schema is not valid object name not included */
            throw new Error(`Schema type must be object but now is ${typeof schemaObj}`);
        };
    },
};
