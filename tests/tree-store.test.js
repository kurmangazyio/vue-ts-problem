"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const globals_1 = require("@jest/globals");
const tree_store_1 = require("./../utils/tree-store");
const utils_1 = require("./../utils/utils");
const data_1 = require("./../data");
(0, globals_1.describe)('TreeStore Class', () => {
    const ts = new tree_store_1.TreeStore(data_1.items);
    (0, globals_1.test)('* Check instance of ts object', () => {
        (0, globals_1.expect)(ts instanceof tree_store_1.TreeStore).toBe(true);
    });
    (0, globals_1.test)('* Check getAll() method', () => {
        const result = ts.getAll();
        let count = 0;
        for (let i = 0; i < result.length; i++)
            if ((0, utils_1.compareObjects)(result[i], data_1.items[i]))
                count++;
        (0, globals_1.expect)(count).toBe(data_1.items.length);
    });
    (0, globals_1.test)('* Check getItem() method => testing id = 7', () => {
        const result = ts.getItem(7);
        (0, globals_1.expect)((0, utils_1.compareObjects)(result, data_1.items[6])).toBe(true);
    });
    (0, globals_1.test)('* Check getItem() method => testing id is not in the list', () => {
        const result = ts.getItem(221);
        (0, globals_1.expect)(result).toBe(undefined);
    });
    (0, globals_1.test)('* Check getChildren() method => testing id = 4', () => {
        const result = ts.getChildren(4);
        const expected = data_1.items.slice(6, 8);
        (0, globals_1.expect)((0, utils_1.compareObjects)(result, expected)).toBe(true);
    });
    (0, globals_1.test)('* Check getChildren() method => testing id = 5', () => {
        const result = ts.getChildren(5);
        (0, globals_1.expect)(result).toHaveLength(0);
    });
    (0, globals_1.test)('* Check getChildren() method => testing id = 2', () => {
        const result = ts.getChildren(2);
        const expected = data_1.items.slice(3, 6);
        (0, globals_1.expect)((0, utils_1.compareObjects)(result, expected)).toBe(true);
    });
    (0, globals_1.test)('* Check getAllChildren() method => testing id = 2', () => {
        const result = ts.getAllChildren(2);
        const expected = data_1.items.slice(3, 8);
        (0, globals_1.expect)((0, utils_1.compareObjects)(result, expected)).toBe(true);
    });
});
