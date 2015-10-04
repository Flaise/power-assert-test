import assert from 'power-assert'

describe('assert', () => {
    it('should not give the same output as a regular assertion', () => {
        const a = {value: 3}
        const b = {value: 4}
        
        assert(a.value === b.value)
    })
})
