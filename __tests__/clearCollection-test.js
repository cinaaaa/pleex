import {Pleex} from '../index';
jest.useFakeTimers();

it('Test Clear Collection', done => {

    let my_collection = Pleex.collection('test');

    my_collection.clearCollection(
        () => done(),
        (err) => console.error(err),
    )

});