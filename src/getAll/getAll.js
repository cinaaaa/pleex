/**
 * getAll function, use this to get all data from your collection
 */
import {getCollection} from '../_serializer/getCollection';

export const getAll = (collection, success, failure) => {

    /* Call getCollection function */
    getCollection(collection, (data /**Success */) => success(data), (error) => failure(error));

};