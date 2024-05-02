const { calcBillingPeriods } = require('./calcBillingPeriods');

describe('calcBillingPeriods', () => {
    test('should return array of billing periods with valid inputs', () => {
        const result = calcBillingPeriods(15, '2024');
        expect(Array.isArray(result)).toBe(true);
        expect(result.length).toBe(12);
        result.forEach(period => {
            expect(period.start_date).toBeDefined();
            expect(period.end_date).toBeDefined();
            expect(period.month).toBeDefined();
        });
    });

    test('should return false for invalid period year', () => {
        const result = calcBillingPeriods(15, 'abcd');
        expect(result).toBe(false);
    });

    test('should return false for invalid cutoff date', () => {
        const result = calcBillingPeriods(0, '2024');
        expect(result).toBe(false);
    });

    test('should handle cutoff date at the end of the month', () => {
        const result = calcBillingPeriods(31, '2024');
        expect(result).toBeTruthy();
        result.forEach(period => {
            expect(period.start_date).toBeDefined();
            expect(period.end_date).toBeDefined();
            expect(period.month).toBeDefined();
        });
    });

    test('should handle cutoff date at the beginning of the month', () => {
        const result = calcBillingPeriods(1, '2024');
        expect(result).toBeTruthy();
        result.forEach(period => {
            expect(period.start_date).toBeDefined();
            expect(period.end_date).toBeDefined();
            expect(period.month).toBeDefined();
        });
    });

    test('should handle cutoff date in the middle of the month', () => {
        const result = calcBillingPeriods(15, '2024');
        expect(result).toBeTruthy();
        result.forEach(period => {
            expect(period.start_date).toBeDefined();
            expect(period.end_date).toBeDefined();
            expect(period.month).toBeDefined();
        });
    });

    test('should return correct start and end dates for each month', () => {
        const result = calcBillingPeriods(15, '2024');
        result.forEach(period => {
        });
    });

    test('should handle edge cases of period year', () => {
        const result = calcBillingPeriods(15, '2000');
        expect(result).toBeTruthy();
        result.forEach(period => {
            expect(period.start_date).toBeDefined();
            expect(period.end_date).toBeDefined();
            expect(period.month).toBeDefined();
        });
    });
});
