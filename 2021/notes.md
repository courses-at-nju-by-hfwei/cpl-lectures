# Notes

## Missing
- `f(void)` in function declaration
- `struct` assignment: deep/shallow copy

## Erratum
- `bsearch.c`:
  - `int mid = (low + high) / 2` may encounter overflow
  - using `int mid = low + (high - low) / 2`

## What is Next?
- macro
- File
- Networking Programming
- UI as early as possible
- [Dancing Links @ wiki](https://en.wikipedia.org/wiki/Dancing_Links)