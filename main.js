"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tree_store_1 = require("./utils/tree-store");
const items = [
    { id: 1, parent: 'root' },
    { id: 2, parent: 1, type: 'test' },
    { id: 3, parent: 1, type: 'test' },
    { id: 4, parent: 2, type: 'test' },
    { id: 5, parent: 2, type: 'test' },
    { id: 6, parent: 2, type: 'test' },
    { id: 7, parent: 4, type: null },
    { id: 8, parent: 4, type: null },
];
const ts = new tree_store_1.TreeStore(items);
console.log('Result of getAll(): ', ts.getAll());
console.log('Result of getItem(7): ', ts.getItem(7));
console.log('Result of ts.getChildren(4): ', ts.getChildren(4));
console.log('Result of ts.getChildren(5): ', ts.getChildren(5));
console.log('Result of ts.getChildren(2): ', ts.getChildren(2));
