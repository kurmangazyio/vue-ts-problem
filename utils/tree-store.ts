import { ITreeStore } from './types/tree-store'
import { TreeItem } from './types/tree-item'

export class TreeStore implements ITreeStore<TreeItem> {
    constructor (
        private items: Array<TreeItem>
    ) {}
    
    // Должен возвращать изначальный массив элементов.
    public getAll (): Array<TreeItem> {
        return this.items
    }

    // Принимает id элемента и возвращает сам объект элемента
    public getItem (id: string | number): TreeItem | undefined {
        return this.items.find(item => item.id === id)
    }

    // * Принимает id элемента и возвращает массив элементов, являющихся дочерними для того элемента,
    // * Чей id получен в аргументе. Если у элемента нет дочерних, то должен возвращаться пустой массив;
    getChildren (id: string | number): Array<TreeItem> {
        return this.items.filter(item => item.parent === id)
    }

    getAllChildren (id: string | number): Array<TreeItem> {
        const children = this.getChildren(id)
        return []
    }

    getAllParents (id: string | number): Array<TreeItem> {
        const item = this.getItem(id)
        return []
    }
}

export function createTreeStore (items: Array<TreeItem>): TreeStore {
    return new TreeStore(items as Array<TreeItem>)
}