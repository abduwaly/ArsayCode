---
title: "Functional Programming Fundamental"
date: 2019-06-15T15:33:51+08:00
draft: false
---

### What is Funtional Programming ?

> Functional programming is a programming paradigm a style of building the structure and elements of computer programs — 
that treats computation as the evaluation of mathematical functions and avoids changing state and mutable data

> ------ Wikipedia

#### Programming Pradigms ?

* Imperative

follow my commands , do this , then that ...

* Declarative

this is what i want, i don't care how you do it ...

* Object-Oriented (a.k.a OO)

keep state to yourself, send/receive messages ...

* Functional
...

#### Is there a definition of Functional Programming Language ?

No !

There's no accepted definition of functional programming language.

If you define functional language as the language that supports first class functions and lambdas, then yes, JavaScript *is* a functional language.

If you also consider the factors like support for immutability, algebraic data types, pattern matching, partial application etc then no, JavaScript *is not* a functional language.

#### What the heck is Functional Programming on earth ?

No rush ! Let's have a look at these two concept:

* Pure functions

* Immutability

#### What is pure function ?

- It returns the same result if given the same arguments

- It does NOT cause any observable side effects

Let's look at the examples of impure functions & side effects as below: 

```javascript
/* Impure */

let PI = 3.14;

const calculateArea = (radius) => radius * radius * PI;

calculateArea(10); // returns 314.0

/* Side Effects */

let result = 0;

function sum(x) {
    result += x;
    return result;
}

sum(10); // returns 10, but result===10

```
So, is there a way to make them pure ?  - Sure, there is!

```javascript
/* Pure */

const calculateArea = (radius, pi) => radius * radius * pi;

calculateArea(10, 3.14); // returns 314.0

/* No side-effect */

const increment = x => x + 1;

increment(10); // returns 11

```

#### Why pure functions ?

* More predicable, safer

-- same results for same params

* Easy to test/debug

-- anything is testable

-- no need to mock anything

* Multi-thread programming

-- concurrency ready

-- easy to scale up/down


#### Immutability

* Unchanging over time or unable to be changed

* No in-place changing, instead replacing

Let's have a look at the demos ***with Mutation*** & ***without Mutation*** 

```javascript
/* Mutation (dangerous!!!) */

const ownerList = ["Yaodong", "Danna", "Kun"];

ownerList[2] = ownerList[2] + 'Xi';

ownerList; // ["Yaodong", "Danna", "Kun Xi"]

```

```javascript
/* No mutation (safer) */

const ownerList = ["Yaodong", "Danna", "Kun"];

const newOwnerList = ownerList.map(x => {
  if (x === "Kun") { return "Kun Xi" }
  else { return x; }
});


ownerList; // ["Yaodong", "Danna", "Kun"]
newOwnerList; // ["Yaodong", "Danna", "Kun Xi"]

```

As we can see, mutations always *DANGEROUS* !

Instead of inplace changing, replacing it will be much safer.


### Summary

For a beginner of functional programming, ***pure function*** and ***immutability*** are the top 2 core  concepts !
Functional programming, as one of the computer programming paradigms, tries to build a *stateless* world with heaps of pure functions who do only care about the inputs and return a result as its output without any observable side effects. However, the world we're living is a world full of *things* with states.



_~ TO BE CONTINUED_

---

***Online Slides: <https://abduwaly.github.io/slides/Functional_Programming/#/>***

---







