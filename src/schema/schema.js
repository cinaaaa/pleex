/**
 * Schema, use this to create schemas
 */

export const schema = (schema) => {

    let generatedSchema = {};

    // Loop key values to choose types
    Object.keys(schema).forEach((key) => {
        // Check for valid type
        if (schema[key].name) {
            generatedSchema = {...generatedSchema, [key]: schema[key].name.toLowerCase()};
        }
        else {
            // invalid type assigned
            throw new Error(`Invalid type assigned for ${key} key`);
        };
    });

    return generatedSchema;
};