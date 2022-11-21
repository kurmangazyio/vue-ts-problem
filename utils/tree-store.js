"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createTreeStore = exports.TreeStore = void 0;
class TreeStore {
    constructor(items) {
        this.items = items;
    }
    // Должен возвращать изначальный массив элементов.
    getAll() {
        return this.items;
    }
    // Принимает id элемента и возвращает сам объект элемента
    getItem(id) {
        return this.items.find(item => item.id === id);
    }
    // * Принимает id элемента и возвращает массив элементов, являющихся дочерними для того элемента,
    // * Чей id получен в аргументе. Если у элемента нет дочерних, то должен возвращаться пустой массив;
    getChildren(id) {
        return this.items.filter(item => item.parent === id);
    }
    getAllChildren(id) {
        const children = this.getChildren(id);
        return [];
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
