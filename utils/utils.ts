
export function compareObjects <T, B> ( a: T, b: B): boolean {
    return JSON.stringify(a) === JSON.stringify(b);
}
