---
title: "Object Oriented Javascript: An Inherited Problem"
date: "2019-06-09"
---

## Hello World...

This post is going to assume you have learned a few basics already. Things like variables, data structures, and functions. And inevitably you have come across the subject of inheritance.

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

What you see above is a hacky workaround and a leaky abstraction at best, both meant to *simulate classical inheritance patterns*.

Does it make use of the prototype? Sure it does… it sets the prototype, and will do what’s it’s meant to. But it’s hardly the best or most efficient way and is not idiomatic JavaScript.

A lot of developers coming to JavaScript from other languages are incensed that this little upstart language dares to buck the tried and true tradition of classical inheritance models. As such, things like the above get jammed into the spec whether they make sense or not.

## A more desirable Object…

A lot of developers coming to JavaScript from other languages are incensed that this little upstart language dares to buck the tried and true tradition of classical inheritance models. As such, things like the above get jammed into the spec whether they make sense or not.
