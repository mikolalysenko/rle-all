"use strict";

var core = require("rle-core");
exports.EPSILON           = core.EPSILON;
exports.POSITIVE_INFINITY = core.POSITIVE_INFINITY;
exports.NEGATIVE_INFINITY = core.NEGATIVE_INFINITY;
exports.compareCoord      = core.compareCoord;

exports.Volume            = core.Volume;
exports.empty             = core.empty;
exports.sample            = core.sample;

exports.StencilIterator   = core.StencilIterator;
exports.beginStencil      = core.beginStencil;
exports.MultiIterator     = core.MultiIterator;
exports.beginMulti        = core.beginMulti;

exports.stencils          = require("rle-stencils");
exports.mesh              = require("rle-mesh");

var funcs = require("rle-funcs");
exports.apply             = funcs.apply;
exports.merge             = funcs.merge;
