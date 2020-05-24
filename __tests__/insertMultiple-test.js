import {Pleex} from '../index';
jest.useFakeTimers();

it('Test Multiple Insert', done => {

    // Create collection first
    let my_collection = Pleex.collection('test');

    // Then we should create a schema
    const my_schema = Pleex.schema({
        test: String
    });

    my_collection.insertMultiple(
        [
            {test: 'test'},
            {test: 'test'}
        ],
        my_schema,
        () => {
            done();
        },
        (error) => {
            console.error(error);
        },
    );

});
