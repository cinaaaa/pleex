import {Pleex} from '../index';
jest.useFakeTimers();

it('schema test', () => {

    // varible to put all data in
    let final;

    // Create collection first
    let my_collection = Pleex.collection('test');

    my_collection.getAll(
        (data) => console.log(data),
        (error) => final = error
    )

    console.log(final);

    expect(typeof final).toEqual('object');
});