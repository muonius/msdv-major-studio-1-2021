### Major Studio 1 - Lab 1: Intro to coding

#### Topics

- JavaScript data structures & functions
- JS quirks and tricks
- DOM manipulation with vanilla JS

#### Instructions

##### Exercise 2 - quirks and tricks

Working with decimal math - I noticed the excessive decimal points in the calculation. Upon research, accroding to this [article] (http://adripofjavascript.com/blog/drips/avoiding-problems-with-decimal-math-in-javascript.html), it appears that 

> In JavaScript all numbers are IEEE 754 floating point numbers. Due to the binary nature of their encoding, some decimal numbers cannot be represented with perfect accuracy. This is analagous to how the fraction 1/3 cannot be accurately represented with a decimal number with a finite number of digits. Once you hit the limit of your storage you'll need to round the last digit up or down.

And the solution is try to calculate using integers and convert to decimal points if needed?

##### Exercise 3 - fetch data and create new DOM elements

