/**
 * Insert multiple function, use this to add multiple data to your collection in same time
 */
import {toCollection} from '../_serializer/toCollection';

export const insertMultiple = async (collection, data, schema, success, failure) => {

    /* Loop data array and compare the schema and data length and keys */
    data.forEach((item) => {
      if (Object.keys(item).length !== Object.keys(schema).length) {
          throw new Error('Data is not same as schema');
      };
    });
    data.forEach((item) => {
      Object.keys(item).sort().every(function(value, index) {
          if (value !== Object.keys(schema).sort()[index]) { throw new Error('Data included is not same as schema'); };
      });
    });

    /* Check types of values compare to schema */
    data.forEach((item) => {
      Object.keys(item).forEach((key) => {
          // Check for valid type
          if (schema[key] !== typeof data[key]) {
              throw new Error(`Type of ${key} should be ${schema[key]} not ${typeof data[key]}`);
          };
      });
    });

    /* Now data is clean and same to shape */
    /* Save data in storage */
    toCollection(collection, data, (/*Success*/) => success(true), (error) => failure(error), false, true );

};
