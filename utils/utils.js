"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isString = exports.sortAsc = exports.sortDesc = exports.compareObjects = void 0;
function compareObjects(a, b) {
    return JSON.stringify(a) === JSON.stringify(b);
}
exports.compareObjects = compareObjects;
function sortDesc(a, b) {
    return b - a;
}
exports.sortDesc = sortDesc;
function sortAsc(a, b) {
    return a - b;
}
exports.sortAsc = sortAsc;
function isString(value) {
    return typeof value === 'string';
}
exports.isString = isString;
