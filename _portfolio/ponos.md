---
title: "Ponos Libraries"
excerpt: "<hr><img src='/images/500x300.png'>"
collection: portfolio
---

I've been compiling all my code (C++) into a set of libraries that serve as a basis for new projects. Among these, you can find auxiliary classes for geometry, data structures, algorithms, GPU computing, rendering, graphical applications, physical simulations, etc.

This project is under continuous development (and probably eternal hehe). Someday, some minimal decent documentation will be available, so other people can make use of it.

The code organization has the following categories: general utility (Ponos), graphics (Circe), fluid simulations (Posseidon), rigid body simulations (Heracles), game engine (Odysseus), GPU computing (Hermes) and rendering (Helios).

<hr>

Ponos comprises the basis for all other sub-libraries listed above. It provides tools ranging from math to data structures. Here is a list of some features:

<ul>
  <li>Geometry;</li>
  <li>Memory;</li>
</ul>

<hr>

<div class="grid__item">
      <article class="archive__item" itemscope itemtype="http://schema.org/CreativeWork">
        <div class="archive__item-teaser">
          <img src="/images/ponos.jpg" style="width:100%"> 
        </div>
        <h2 class="archive__item-title" itemprop="headline">Ponos</h2>
        <p class="archive__item-excerpt" itemprop="description">
      <strong>Utility Library</strong>
        </p>
        <p class="archive__item-excerpt" itemprop="description">
      Data structures, geometry and other useful tools.
        </p>
      </article>
    </div>

asdasdasd
asdasdasdasdasdasdasdasd
<img align="left" src="/images/ponos.jpg" style="width:50%;border:5px solid white;">        asdasdasdasdasdasdasdasdasd
asdasdasdasd

{% highlight cpp %}
#include <circe/circe.h>

int main() {
    circe::SceneApp<> app(800, 800, "Example");
    circe::CartesianGrid grid(5);
    app.scene.add(&grid);
    return app.run();
}{% endhighlight %}