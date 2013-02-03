"use strict";

//Core API
var core = require("rle-core");
exports.EPSILON           = core.EPSILON;
exports.POSITIVE_INFINITY = core.POSITIVE_INFINITY;
exports.NEGATIVE_INFINITY = core.NEGATIVE_INFINITY;
exports.compareCoord      = core.compareCoord;
exports.DynamicVolume     = core.DynamicVolume;
exports.StaticVolume      = core.StaticVolume;
exports.sample            = core.sample;
exports.StencilIterator   = core.StencilIterator;
exports.beginStencil      = core.beginStencil;
exports.MultiIterator     = core.MultiIterator;
exports.beginMulti        = core.beginMulti;

//Stencil methods
exports.stencils          = require("rle-stencils");

//Mesh generation
exports.mesh              = require("rle-mesh");

//Helper functions
var funcs = require("rle-funcs");
exports.apply             = funcs.apply;
exports.merge             = funcs.merge;

//Morphology
var morphology = require("rle-morphology");
exports.dilate            = morphology.dilate;
exports.erode             = morphology.erode;
exports.opening           = morphology.opening;
exports.closing           = morphology.closing;

//CSG
var csg = require("rle-csg");
exports.unite             = csg.unite;
exports.intersect         = csg.intersect;
exports.subtract          = csg.subtract;

//Basic topology stuff
var topology = require("rle-topology");
exports.labelComponents   = topology.labelComponents;
exports.splitComponents   = topology.splitComponents;
