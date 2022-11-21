
export interface ITreeStore<T> {
    getAll (): Array<T>;
    getItem (id: string | number): T | undefined;
    getChildren? (id: string | number): Array<T>;
    getAllChildren? (id: string | number): Array<T>;
    getAllParents? (id: string | number): Array<T>;
}