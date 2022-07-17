import { sumTwoNumbers } from '../src/utils/sum';

test('Сложив 1+2 получим 3', () => {
    expect(sumTwoNumbers(1, 2)).toBe(3);
});
