import { TreeItem } from './tree-item'

export interface ITreeStore {
    getAll (): Array<TreeItem>;
    getItem (id: string | number): TreeItem | undefined;
    getChildren? (id: string | number): Array<TreeItem>;
    getAllChildren? (id: string | number): Array<TreeItem>;
    getAllParents? (id: string | number): Array<TreeItem>;
}