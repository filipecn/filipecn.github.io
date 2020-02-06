---
title: "Ponos Libraries"
excerpt: "<hr><img src='/images/500x300.png'>"
collection: portfolio
---

I've been compiling all my code (C++) into a set of libraries that serve as a basis for new projects. Among these, you can find auxiliary classes for geometry, data structures, algorithms, GPU computing, rendering, graphical applications, physical simulations, etc.

This project is under continuous development (and probably eternal hehe). Someday, some minimal decent documentation will be available, so other people can make use of it.

The code organization has the following categories: general utility (Ponos), graphics (Circe), fluid simulations (Posseidon), rigid body simulations (Heracles), game engine (Odysseus), GPU computing (Hermes) and rendering (Helios).

<hr>

<img align="right" src="/images/ponos.jpg" style="width:30%; padding : 10px; border-radius: 25px;"> 


Ponos comprises the basis for all other sub-libraries listed above. It provides tools ranging from math to data structures. Here is a list of some features:

<ul>
  <li>Geometry;</li>
  <li>Memory;</li>
  <li>Memory;</li>
  <li>Memory;</li>
</ul>


{% highlight cpp %}
#include <circe/circe.h>

int main() {
    circe::SceneApp<> app(800, 800, "Example");
    circe::CartesianGrid grid(5);
    app.scene.add(&grid);
    return app.run();
}{% endhighlight %}