import { TreeStore } from './utils/tree-store'
import { items } from './data'

const ts = new TreeStore(items)

console.log('Result of getAll(): ', ts.getAll())
console.log('Result of getItem(7): ', ts.getItem(7))
console.log('Result of ts.getChildren(4): ', ts.getChildren(4))
console.log('Result of ts.getChildren(5): ', ts.getChildren(5))
console.log('Result of ts.getChildren(2): ', ts.getChildren(2))