import {Pleex} from '../index';
jest.useFakeTimers();

it('Test remove Item', done => {

    // Create collection first
    let my_collection = Pleex.collection('test');

    my_collection.removeItem(
        {test: 'test'},
        () => {
            console.error('Error in remove');
        },
        () => {
            // correct because no object exists with that keys
            done();
        },
    );

});