// JavaScript source code
let Block = require('./block')
let Blockchain = require('./blockchain')
let Transaction = require('./transaction')
let transaction = new Transaction('Sohaib', 'Fahad', 350, '23-1, Khayaban e Shamsheer', 33.44, 'remittance')
let genesisBlock = new Block()
let blockchain = new Blockchain(genesisBlock)
console.log(blockchain)