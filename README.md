`rle-all`
=========
A narrowband level set is a sparse representation of a level set as it is sampled on a regular grid.  However, instead of storing an entire dense array of voxels, narrowband methods only store voxels which are near the boundary of the level set.  This means that their storage and processing requirements are typically O(n^2/3) of the size of a dense level set.  To facilitate efficient queries and streaming operations, these points are stored in lexicographic order.  Doing so allows queries like point membership or surface extraction to run with at most a logarithmic overhead.  As a result, narrowband methods are often much more efficient than dense methods.

Overview
--------
The `rle` system is split across several packages.  This is the root package which imports a default, useful subset of the features; though if you want you can also pick and choose exactly the components you need.  Broadly speaking the library is split into the following parts:

* [`rle-core`](https://github.com/mikolalysenko/rle-core): Foundational data structures and algorithms
* [`rle-stencils`](https://github.com/mikolalysenko/rle-stencils): Commonly used stencils
* [`rle-mesh`](https://github.com/mikolalysenko/rle-mesh): Surface extraction and meshing operations
* [`rle-funcs`](https://github.com/mikolalysenko/rle-funcs): Functional programming primitives for narrowband levelsets
* [`rle-topology`](https://github.com/mikolalysenko/rle-topology): Topological computations on level sets (connected component extraction, etc.)
* [`rle-classify`](https://github.com/mikolalysenko/rle-classify): Primitive classification and queries.  Supports points, lines, rays, boxes, etc.
* [`rle-repair`](https://github.com/mikolalysenko/rle-repair): Repair and validation methods
* [`rle-rasterize`](https://github.com/mikolalysenko/rle-rasterize): Rasterizes meshes into level sets.
* [`rle-csg`](https://github.com/mikolalysenko/rle-csg): Constructive solid geometry (aka boolean set operations)
* [`rle-morphology`](https://github.com/mikolalysenko/rle-morphology): Mathematical morphology for level sets.

Installation
============
This library pulls in a commonly used subset of packages for working with narrow band level sets.  To use it, just do:

    npm install rle

And then you can create volumes.  For a complete description of the imported methods, just look at the source code for index.js (it should be pretty self explanatory).

The documentation for each of the subcomponents can be found on their respective github pages.  If you don't want to yank in the whole library, you can also just pull in only the parts you need via npm.

Demos
=====

* Mesh extraction
* Mesh extraction for multiphase level sets
* CSG
* Game of life 3D


Status
======
* `rle-core`: 70%, multi iterators not tested
* `rle-stencils`: 100%
* `rle-mesh`: 90%, works well.  may evolve in the future.  Needs better testing
* `rle-funcs`: 50%, merge needs work
* `rle-repair`: 30%, missing functions
* `rle-classify`: 10%
* `rle-topology`: 10%
* `rle-csg`: 50%
* `rle-morphology`: 90%

Future Ideas
============
* Fast marching methods for sampling
* Level of detail
* Linear transformations
* Advection/warping
* Rasterization for converting triangle meshes into level sets
* Buffer reuse/pooling?


Credits
=======
(c) 2013 Mikola Lysenko.  All packages are BSD Licensed
