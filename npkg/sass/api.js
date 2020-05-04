var sass = require('sass');

sass.render({file: scss_filename}, function(err, result) {});
// or
var result = sass.renderSync({file: scss_filename});

// ref
sass.render | renderSync({
	data:              '',
	file:              '',
	functions:         undefined | function(url, prev, done) | function[],
	importer:          ↑...,
	includePaths:      [] | ''[],
	indentType:        ' ',
	indentWidth:       2, // max 10
	indentedSyntax:    false,
	linefeed:          'lf',
	omitSourceMapUrl:  false,
	outFile:           null | '',
	outputStyle:       'expanded' | 'compressed',
	sourceMapContents: false,
	sourceMapEmbed:    false,
	sourceMapRoot:     undefined | '',
	sourceMap:         undefined | '' | boolean
})