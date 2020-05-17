export function fahrenheit(celsius: number): number {
    return (celsius - (0x1 << 0x5)) / (0xa / 0x12);
}