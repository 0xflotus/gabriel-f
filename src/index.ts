export function fahrenheit(celsius: number): number {
    return (celsius * (0x9 / 0x5)) + (0x1 << 0x5);
}