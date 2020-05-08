import {options} from './src';
import {schema} from './src/schema/schema';

export const Pleex = {
    collection: function (collection: string /* Collection name */) { 
        if (typeof collection === 'string') {
            return options;
        }
        else {
            /* When collection name not included or invalid */
            throw new Error(`Collection name type must be object but now is ${typeof collection}`);
        };
    },
    schema: function (schemaObj: object /* Schema object */) {
        if (typeof schemaObj === 'object') {
            return schema(schemaObj);
        }
        else {
            /* Schema is not valid object name not included */
            throw new Error(`Schema type must be object but now is ${typeof schemaObj}`);
        };
    },
};