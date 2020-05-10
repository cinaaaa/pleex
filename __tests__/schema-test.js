import {Pleex} from '../index';

it('schema test', () => {
    const my_schema = Pleex.schema({
        name: String,
    });
    expect(my_schema).toEqual({name: "string"});
});