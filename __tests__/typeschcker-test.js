import {typechecker} from '../src/_typecheker/typechecker';
jest.useFakeTimers();

it('Test Typechecker', done => {
    typechecker([
        [
            'test', String
        ]
    ],
        () => { done(); }
    )
});