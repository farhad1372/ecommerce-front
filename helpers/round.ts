
export const RoundRate = (rate: number, precision = 1) => {
    return Number((rate || 0).toFixed(precision));
}