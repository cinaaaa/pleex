import {Pleex} from '../src/index';

it('collection test', () => {
    let my_collection = Pleex.collection('test');
    expect(typeof my_collection).toEqual('object');
});