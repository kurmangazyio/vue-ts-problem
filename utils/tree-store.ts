import { ITreeStore } from './types/tree-store'
import { TreeItem } from './types/tree-item'
import { isString, sortAsc } from './utils'

export class TreeStore implements ITreeStore {
    constructor (
        private items: Array<TreeItem>
    ) {}
    
    public getAll (): Array<TreeItem> {
        return this.items
    }

    public getItem (id: string | number): TreeItem | undefined {
        return this.items.find(item => item.id === id)
    }

    public getChildren (id: string | number): Array<TreeItem> {
        return this.items.filter(item => item.parent === id)
    }

    public getAllChildren (id: string | number): Array<TreeItem> {
        const result: Array<TreeItem> = []
        const children = this.getChildren(id)

        if (children.length === 0) return result

        for (let i = 0; i < children.length; i++) {
            result.push(children[i])
            result.push(...this.getAllChildren(children[i].id))
        }

        return result.sort((a, b) => {
            if (isString(a.parent) || isString(b.parent)) return 0
            return sortAsc(a.parent as number, b.parent as number)
        })
    }

    public getAllParents (id: string | number): Array<TreeItem> {
        const item = this.getItem(id)
        return []
    }
}

export function createTreeStore (items: Array<TreeItem>): TreeStore {
    return new TreeStore(items as Array<TreeItem>)
}