# `2-if-for-array`

## Additional

- `Settings` => `Code Style` (Google)
- `Settings` => `Action on Save` (Formatting Code)
- TODO (hfwei): CLion code template

## `min-of-two.c`

- `if-else`
- code style
  - tab vs. space video
  - google format
  - format on save
- `?:`: conditional operator; ternary operator
- `fmin, fmax` for doubles

## `min-of-three.c`

- nested `if-else`
- `if-else` template
- comment for `else`

## `leap-if-else.c`

- flowchart
- `leap`: 0/1 integer as a flag
- `if-else`
  - easier cases go first
- code style
  - spaces
- `==`: 0 == leap
- `if (leap == 0)` vs `if (leap != 0)`

## `leap-else-if.c`

- easier cases go first (Flatten Arrow Code)

## `leap-elseif.c`

- `else if` (Cascading If Statements)
  - `{ }` removed
  - `if` and `else` in the same line
  - `Code => Format Code (Ctrl + Alt + L)`
- find the iff condition for leap

## `leap.c`

- `&&`, `||` operator
  - operator precedence (https://en.cppreference.com/w/c/language/operator_precedence)
- short-circuit
  - test: 25, 80, 100, 400
  - TODO: order of evaluation (https://en.cppreference.com/w/c/language/eval_order)
    - `i = ++i + i++;`
- Code improvements
  - `if`: without `else`
  - `int leap = (year % 4 == 0 && year % 100 != 0) || (year % 400 == 0);`
  - `?:` in `printf`

## `min-array.c`

- `array`
  - `array initializer` (初始化器)
  - What if uninitialized? (garbage in, garbage out)
  - designator (Since C99)
  - `int n[5] = {[4]=5,[0]=1,2,3,4}; // holds 1,2,3,4,5`
  ```C
    int a[MAX] = { // starts initializing a[0] = 1, a[1] = 3, ...
      1, 3, 5, 7, 9, [MAX-5] = 8, 6, 4, 2, 0
    };
  ```
- `const int NUM`
- `#define NUM 5`
- `for`
  - syntax
    - `for (init-clause; condition-expression; iteration-expression) loop-statement`
  - semantics (CLion debug!!!)
    - (1): []
    - (2): i < NUM: not i <= NUM (accessing out-of-bounds; 访问越界)
    - (3): int i = 1; since C99 (declaration in for-loop); code in standard C library

## `min-array-input.c`

- `array` initializer
  - designator
  - What if uninitialized?
- input an array
  - `&numbers[i]`: lvalue
  - what if `n (NUM)` is known???