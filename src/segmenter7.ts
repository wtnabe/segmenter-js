import { sprintf } from 'sprintf-js'

import { Table, Signals } from './segmenter7.d'

export default class Segmenter7 {
  private readonly chars: string
  private readonly table: Table

  /**
   * @param {String} chars
   */
  constructor (chars: string) {
    this.chars = chars
    this.table = this.createTable()
  }

  /**
   * @return {object}
   */
  createTable (): Table {
    return {
      0: 0x7e,
      1: 0x30,
      2: 0x6d,
      3: 0x79,
      4: 0x33,
      5: 0x5b,
      6: 0x5f,
      7: 0x70,
      8: 0x7f,
      9: 0x7b
    }
  }

  /**
   * @return {Array}
   */
  segments (): Signals[] {
    return this.chars.split('').map((c) => {
      return this.table[c]
    }).map((n) => {
      return this.toSignals(n)
    })
  }

  /**
   * @param {Number} num
   * @return {Array}
   */
  toSignals (num: number): Signals {
    return sprintf('%07d', num.toString(2)).split('').map((e) => {
      return parseInt(e) > 0
    })
  }
}
