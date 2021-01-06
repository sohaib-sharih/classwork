// JavaScript source code
class Transaction {
    constructor(from, to, amount, address, coordinates, purpose) {
        this.from = from
        this.to = to
        this.amount = amount
        this.address = address
        this.coordinates = coordinates
        this.purpose = purpose
    }
}
module.exports = Transaction
