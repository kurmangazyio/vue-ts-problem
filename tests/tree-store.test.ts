import {describe, expect, test} from '@jest/globals'

import { items } from './../data'
import { TreeStore } from './../utils/tree-store'
import { compareObjects } from './../utils/utils'

describe('TreeStore Class', () => {
    const ts = new TreeStore(items)

    test('* Check instance of ts object', () => {
      expect(ts instanceof TreeStore).toBe(true)
    })

    test('* Check getAll() method', () => {
        const result = ts.getAll()
        let count = 0;
        for (let i = 0; i < result.length; i++) {
            if (compareObjects(result[i], items[i])) count++
        }

        expect(count).toBe(items.length)
    })
})