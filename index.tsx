import {options} from './src';

export const Pleex = {
    collection: function (collection: string) { 
        if (collection) {
            return options;
        }
        else {
            /* When collection name not included */
            throw new Error('Collection name is an required');
        };
    },
};
