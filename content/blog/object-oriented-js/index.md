---
title: "Object Oriented Javascript: An Inherited Problem"
date: "2019-06-09"
description: "JavaScript has a great many ways to create an object, some better than others. This post is going to walk through a few of those various object creation methods and the reasoning behind their use."
---

## Hello World...

I'm going to assume you have learned a some of the JavaScript basics already. Things like variables, data structures, and functions. In your travels, inevitably you will have come across the subject of inheritance.

A quick Google search later and you’re up to your IDE in a whole host of articles that teach you how to do inheritance in JavaScript.

Those things might look a little something like this:

```javascript{numberLines: true}
function Cat(sound) {
  this.sound = sound;
}

Cat.prototype.makeSound = function() {
  console.log(this.sound);
}

var leopard = new Cat('ROAR!');
leopard.makeSound(); // ROAR!
```

More recently (if you’re familiar with ES6) they may even look like this:

```javascript{numberLines: true}
class Cat {
  constructor(sound) {
    this.sound = sound;
  }
}

Cat.prototype.makeSound = function () {
  console.log(this.sound);
}

const leopard = new Cat('ROAR!');
leopard.makeSound(); // ROAR!
```

> Right about now you’re probably saying to yourself “yeah, so what? That’s just like, prototypal inheritance, man…”

Except it’s not.

The above is sort of a hacky workaround and a leaky abstraction at best, both meant to *simulate classical inheritance patterns*.

While it make use of the prototype and will do the thing it's meant to do, it’s hardly the best or most efficient way and is not actually idiomatic JavaScript.

## A more desirable Object…
