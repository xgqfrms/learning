// https://repl.it/languages/nodejs






var crypto = require('crypto');
var alice = crypto.getDiffieHellman('modp5');
var bob = crypto.getDiffieHellman('modp5');

alice.generateKeys();
bob.generateKeys();

var alice_secret = alice.computeSecret(
    bob.getPublicKey(), null, 'hex'
);
var bob_secret = bob.computeSecret(
    alice.getPublicKey(), null, 'hex'
);

/* alice_secret and bob_secret should be the same */
console.log(alice_secret == bob_secret);














