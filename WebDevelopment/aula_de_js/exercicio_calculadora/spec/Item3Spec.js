describe('Operações Complexas', () => {
  beforeAll(() => {
    this.elementos = carregarConteudo()
    this.$resultado = this.elementos['calc'].querySelector('input')
    initCalculadora()
  })
  beforeEach(() => {
    this.$resultado.value = ''
  })
  describe('Multiplicação', () => {
    it('Multiplicar 2 * 3 deve resultar em 6', () => {
      this.elementos[2].click()
      this.elementos['*'].click()
      this.elementos[3].click()
      this.elementos['='].click()
      expect(this.$resultado.value.trim()).toBe('6')
    })
    it('Multiplicar 1.5 * 8 deve resultar em 12', () => {
      this.elementos[1].click()
      this.elementos['.'].click()
      this.elementos[5].click()
      this.elementos['*'].click()
      this.elementos[8].click()
      this.elementos['='].click()
      expect(this.$resultado.value.trim()).toBe('12')
    })
    it('Multiplicar .5 * 2.4 deve resultar em 1.2', () => {
      this.elementos['.'].click()
      this.elementos[5].click()
      this.elementos['*'].click()
      this.elementos[2].click()
      this.elementos['.'].click()
      this.elementos[4].click()
      this.elementos['='].click()
      expect(this.$resultado.value.trim()).toBe('1.2')
    })
  })
  describe('Divisão', () => {
    it('Dividir 4 / 2 deve resultar em 2', () => {
      this.elementos[4].click()
      this.elementos['/'].click()
      this.elementos[2].click()
      this.elementos['='].click()
      expect(this.$resultado.value.trim()).toBe('2')
    })
    it('Dividir 2.4 / 8 deve resultar em 0.3', () => {
      this.elementos[2].click()
      this.elementos['.'].click()
      this.elementos[4].click()
      this.elementos['/'].click()
      this.elementos[8].click()
      this.elementos['='].click()
      expect(this.$resultado.value.trim()).toBe('0.3')
    })
    it(' 3.75 * 0.75 deve resultar em 5', () => {
      this.elementos[3].click()
      this.elementos['.'].click()
      this.elementos[7].click()
      this.elementos[5].click()
      this.elementos['/'].click()
      this.elementos[0].click()
      this.elementos['.'].click()
      this.elementos[7].click()
      this.elementos[5].click()
      this.elementos['='].click()
      expect(this.$resultado.value.trim()).toBe('5')
    })
  })
})
