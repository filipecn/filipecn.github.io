---
title: "Ponos Libraries"
excerpt: "<hr><img align='right' src='/images/portfolio/circe.gif' style='width:20%; padding : 10px; border-radius: 25px;'>
Base code for all my projects. 
<br>It is a set of libraries that provide auxiliary classes for geometry, data structures, algorithms, GPU computing, rendering, graphical applications, physical simulations, etc.<br clear='right'>"

collection: portfolio
---

I've been compiling all my code (C++) into a set of libraries that serve as a basis for new projects. Among these, you can find auxiliary classes for geometry, data structures, algorithms, GPU computing, rendering, graphical applications, physical simulations, etc.

This project is under continuous development (and probably eternal hehe). Someday, some minimal decent documentation will be available, so other people can make use of it.

The code organization has the following categories: general utility (Ponos), graphics (Circe), fluid simulations (Posseidon), rigid body simulations (Heracles), game engine (Odysseus), GPU computing (Hermes) and rendering (Helios).

<hr>

<img align="right" src="/images/ponos.jpg" style="width:30%; padding : 10px; border-radius: 25px;"> 


**Ponos** comprises the basis for all the other sub-libraries listed above. It provides tools ranging from math to data structures. Here is a list of some features:

<ul>
  <li>Geometry: vector, point, transforms, quaternions, etc.</li>
  <li>Memory: memory blocks, multidimensional arrays, memory arena, etc.</li>
  <li>Data Structures: BVH, half-edge, octree, meshes, object pool, etc.</li>
  <li>Others: linear system solvers, sparse matrices, interpolations, grids, etc.</li>
</ul>

<hr>

<img align="left" src="/images/circe.jpg" style="width:30%; padding : 10px; border-radius: 25px;"> 

**Circe** should be useful for building graphical applications. Intended to be a minimal framework for OpenGL applications, Circe offers a series of helper classes to manipulate IO, buffers, shaders, textures, instancing, compute shaders, user interaction, scenes, etc.

The idea is to facilitate full access to OpenGL features with a minimal amount of lines of code. Here is an example of a simple 3D application presenting a cartesian grid with camera control (result on the right):

<br clear="left">
<img align="right" src="/images/portfolio/circe.gif" style="width:30%; padding : 10px; border-radius: 25px;"> 
{% highlight cpp %}
#include <circe/circe.h>

int main() {
    circe::SceneApp<> app(800, 800);
    circe::CartesianGrid grid(5);
    app.scene.add(&grid);
    return app.run();
}{% endhighlight %}

<hr>

<img align="right" src="/images/hermes.jpg" style="width:30%; padding : 10px; border-radius: 25px;"> 

**Hermes** is intended to be a version of ponos written in CUDA. It serves as a set of data structures and geometric objects adapted to the GPU in order to achieve better performance. It provides structures that can be stored in global memory and in fast texture memory. Among the basic features of ponos, hermes provides some classes for numerical grids manipulation including interpolation schemes.

<hr>

<img align="left" src="/images/poseidon.jpg" style="width:30%; padding : 10px; border-radius: 25px;"> 

**Poseidon** provides tools for fluid simulation. The idea is to offer implementations of algorithms such as FLIP, MPM, etc. However, the development is in its early stages. I've been experimenting with libraries such as CUDA and [OpenVDB](https://www.openvdb.org) here.
<br clear="left">

<hr>

<img align="right" src="/images/helios.jpg" style="width:30%; padding : 10px; border-radius: 25px;"> 

**Helios** concentrates my studies in offline rendering. My main reference is the [PBRT](https://www.pbrt.org) book, and helios is my own implementation of the book. however, there is a long way ahead and much work to do.

<br clear="right">

<hr>

<img align="left" src="/images/odysseus.jpg" style="width:30%; padding : 10px; border-radius: 25px;"> 

**Odysseus** is a game engine (at least when finished) based on state machines. Although I have a C# version I made years ago, I would like to implement it in C++ with all the new things I learned over these years.

<br clear="left">

<hr>

<img align="right" src="/images/hercules.jpg" style="width:30%; padding : 10px; border-radius: 25px;"> 

**Heracles** is the physics engine used by Odysseus. (future project)




