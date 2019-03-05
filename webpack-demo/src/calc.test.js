import {add, product} from './calc';

test('add works fine', () => {
    expect(add(3,5)).toBe(8);
});

test('product works fine', () => {
    expect(product(3,5)).toBe(15);
});