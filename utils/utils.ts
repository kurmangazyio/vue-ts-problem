
export function compareObjects <T, B> ( a: T, b: B): boolean {
    return JSON.stringify(a) === JSON.stringify(b);
}

export function sortDesc (a: number, b: number): number {
    return b - a
}

export function sortAsc (a: number, b: number): number {
    return a - b
}

export function isString (value: any): boolean {
    return typeof value === 'string'
}