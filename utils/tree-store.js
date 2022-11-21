"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createTreeStore = exports.TreeStore = void 0;
const utils_1 = require("./utils");
class TreeStore {
    constructor(items) {
        this.items = items;
    }
    getAll() {
        return this.items;
    }
    getItem(id) {
        return this.items.find(item => item.id === id);
    }
    getChildren(id) {
        return this.items.filter(item => item.parent === id);
    }
    getAllChildren(id) {
        const result = [];
        const children = this.getChildren(id);
        if (children.length === 0)
            return result;
        for (let i = 0; i < children.length; i++) {
            result.push(children[i]);
            result.push(...this.getAllChildren(children[i].id));
        }
        return result.sort((a, b) => {
            if ((0, utils_1.isString)(a.parent) || (0, utils_1.isString)(b.parent))
                return 0;
            return (0, utils_1.sortAsc)(a.parent, b.parent);
        });
    }
    getAllParents(id) {
        const item = this.getItem(id);
        return [];
    }
}
exports.TreeStore = TreeStore;
function createTreeStore(items) {
    return new TreeStore(items);
}
exports.createTreeStore = createTreeStore;
