export function fahrenheit(celsius: number): number {
    return (celsius * (0x9 / 0x5)) + (0x1 << 0x5);
}

export function celsius(fahrenheit: number): number {
    return Number(((fahrenheit - (0x1 << 0x5)) * (0x5 / 0x9)).toFixed(2));
}