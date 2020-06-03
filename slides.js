// Load asciidoctor.js and asciidoctor-reveal.js
var asciidoctor = require('asciidoctor.js')();
var asciidoctorRevealjs = require('asciidoctor-reveal.js');
asciidoctorRevealjs.register()

var options = {safe: 'safe', backend: 'revealjs'};
asciidoctor.convertFile('walkthrough.adoc', options); // (1)
