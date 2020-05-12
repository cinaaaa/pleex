import {Pleex} from '../src/index';
jest.useFakeTimers();

it('Test Get All', done => {

    // Create collection first
    let my_collection = Pleex.collection('test');
    my_collection.getAll(
        (data) => {
            expect(data).toEqual([]);
            done();
        },
        (error) => {
            console.error(error);
        }
    );

});