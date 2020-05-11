import {Pleex} from '../index';
jest.useFakeTimers();

it('Test Get All', done => {

    // Create collection first
    let my_collection = Pleex.collection('test');
    
    // Then we should create a schema
    const my_schema = Pleex.schema({
        test: String
    });

    my_collection.insert(
        {test: 'test'},
        my_schema,
        () => {
            done();
        },
        (error) => {
            console.error(error);
        },
    );

});