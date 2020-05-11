import {Pleex} from '../index';
jest.useFakeTimers();

it('Test Get Item', done => {

    // Create collection first
    let my_collection = Pleex.collection('test');

    my_collection.getItem(
        {test: 'test'},
        (data) => {
            if (typeof data === 'undefined') {
                done(); 
            };
        },
        (error) => {
            console.error(error);
        },
    );

});