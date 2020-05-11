/**
 * getAll function, use this to get all data from your collection
 */
import {getCollection} from '../_serializer/getCollection';

export const getAll = (collection: string, success: (arg0: any) => void, failure: (arg0: any) => void) => {

    /* Call getCollection function */
    getCollection(collection, (data /**Success */) => success(data), (error) => failure(error));

};