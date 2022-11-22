import {describe, expect, test} from '@jest/globals'

import { TreeItem } from '../utils/types/tree-item'
import { TreeStore } from './../utils/tree-store'
import { compareObjects } from './../utils/utils'

import { items } from './../data'

describe('TreeStore Class', () => {
    const ts = new TreeStore(items)

    test('* Check instance of ts object', () => {
      expect(ts instanceof TreeStore).toBe(true)
    })

    test('* Check getAll() method', () => {
        const result = ts.getAll()
        let count = 0;
        for (let i = 0; i < result.length; i++) if (compareObjects<TreeItem, any>(result[i], items[i])) count++

        expect(count).toBe(items.length)
    })

    test('* Check getItem() method => testing id = 7', () => {
        const result = ts.getItem(7)

        expect(compareObjects<any, any>(result, items[6])).toBe(true)
    })

    test('* Check getItem() method => testing id is not in the list', () => {
        const result = ts.getItem(221)

        expect(result).toBe(undefined)
    })

    test('* Check getChildren() method => testing id = 4', () => {
        const result = ts.getChildren(4)
        const expected = items.slice(6, 8)

        expect(compareObjects<any, any>(result, expected)).toBe(true)
    })

    test('* Check getChildren() method => testing id = 5', () => {
        const result = ts.getChildren(5)

        expect(result).toHaveLength(0)
    })

    test('* Check getChildren() method => testing id = 2', () => {
        const result = ts.getChildren(2)
        const expected = items.slice(3, 6)

        expect(compareObjects<any, any>(result, expected)).toBe(true)
    })

    test('* Check getAllChildren() method => testing id = 2', () => {
        const result = ts.getAllChildren(2)
        const expected = items.slice(3, 8)

        expect(compareObjects<any, any>(result, expected)).toBe(true)
    })

    test('* Check getAllParents() method => testing id = 7', () => {
        const result = ts.getAllParents(7)
        const expected = [
            {"id": 4, "parent": 2, "type": "test" },
            {"id": 2, "parent": 1, "type": "test" },
            {"id": 1, "parent": "root"}
        ]

        expect(compareObjects<any, any>(result, expected)).toBe(true)
    })
})