import {Pleex} from '../index';
jest.useFakeTimers();

it('Test Get All Item', done => {

    // Create collection first
    let my_collection = Pleex.collection('test');

    my_collection.getAllItems(
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