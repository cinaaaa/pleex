/**
 * clearCollection function, use this to clear collections
 */
import {toCollection} from '../_serializer/toCollection';

export const clearCollection = (collection, success, failure) => {
    toCollection(
        collection,
        [],
        () => {
            success(true);
        },
        (error) => {
            failure(error);
        },
        true
    );
};