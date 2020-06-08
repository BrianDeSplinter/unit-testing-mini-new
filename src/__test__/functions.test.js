import {add} from '../utils/functions'

test('add return sum of two integers', () => {
    expect(add(1,2)).toBe(3)
})

test('add will add a string and a number together', () => {
    expect(add('12', 5)).toBe(17)
})

test('add return NaN if non numbers are the arguments', () => {
    expect(add('submarine', 'nuclear reactor')).toBeNaN()
})