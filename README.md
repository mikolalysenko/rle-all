`rle-all`
=========
A narrowband level set is a sparse representation of a level set as it is sampled on a regular grid.  However, instead of storing an entire dense array of voxels, narrowband methods only store voxels which are near the boundary of the level set.  This means that their storage and processing requirements are typically O(n^2/3) of the size of a dense level set.  To facilitate efficient queries and streaming operations, these points are stored in lexicographic order.  Doing so allows queries like point membership or surface extraction to run with at most a logarithmic overhead.  As a result, narrowband methods are often much more efficient than dense methods.

Overview
--------
The `rle` system is split across several packages.  This is the root package which imports a default, useful subset of the features; though if you want you can also pick and choose exactly the components you need.  Broadly speaking the library is split into the following parts:

* `rle-core`: Foundational data structures and algorithms
* `rle-stencils`: Commonly used stencils
* `rle-mesh`: Surface extraction and meshing operations
* `rle-funcs`: Functional programming primitives for narrowband levelsets
* `rle-topology`: Topological computations on level sets (connected component extraction, etc.)
* `rle-classify`: Primitive classification and queries.  Supports points, lines, rays, boxes, etc.
* `rle-repair`: Repair and validation methods
* `rle-csg`: Constructive solid geometry (aka boolean set operations)
* `rle-morphology`: Mathematical morphology for level sets.

Installation
============
This library pulls in a commonly used subset of packages for working with narrow band level sets.  To use it, just do:

    npm install rle

And then you can create volumes.  For a complete description of the imported methods, just look at the source code for index.js (it should be pretty self explanatory).

The documentation for each of the subcomponents can be found on their respective github pages.  If you don't want to yank in the whole library, you can also just pull in only the parts you need via npm.

Credits
=======
(c) 2013 Mikola Lysenko
