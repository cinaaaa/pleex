import {Pleex} from '../src/index';
jest.useFakeTimers();

it('Test Get All Items', done => {

    // Create collection first
    let my_collection = Pleex.collection('test');

    my_collection.getItems(
        {test: 'test'},
        (data) => {
            if (typeof data === "object") {
                done();
            };
        },
        (error) => {
            console.error(error);
        },
    );

});