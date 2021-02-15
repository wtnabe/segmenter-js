import * as assert from 'power-assert'
import Segmenter7 from '../src/segmenter7'

describe('Segmenter7', () => {
  describe('#toSignals', () => {
    it('return array of boolean', () => {
      const segmenter = new Segmenter7('')
      assert.deepEqual(segmenter.toSignals(0x30), [false, true, true, false, false, false, false])
    })
  })

  describe('#segments', () => {
    it('return array of array of boolean', () => {
      const segmenter = new Segmenter7('1')
      assert.deepEqual(segmenter.segments(), [[false, true, true, false, false, false, false]])
    })
  })
})
