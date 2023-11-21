---
marp: true
theme: 2022cpl
class:
  - lead

backgroundColor: #FED8B1
paginate: true
size: 16:9
---
# <p id = "small-caps">8. &nbsp; Pointers (and Arrays)</p>

[Hengfeng Wei (魏恒峰)](https://hengxin.github.io/)
hfwei@nju.edu.cn

![w:200](figs/C.png)
Nov. 24, 2023

---
# Review
</br>

### <font color = red>Recursion</font> (<mark>mergesort.c</mark>)
<br>

### <font color = blue>Data Types</font>

---
# Overview
<br>

![w:700](figs/C-Pointers.png)

### <mark>Pointers and Arrays</mark>

---
# Overview

![w:600](figs/C%2B%2B-Pointers.png) &emsp; ![w:450](figs/Java-Pointers.jpg)

---
![w:700](figs/lets-code.jpeg)

## <mark>radius.c &emsp; selection-sort.c &emsp; ~~merge.c~~</mark>

---
# Variables (<mark>radius.c</mark>)
<br>
<br>

### A <font color = red>variable</font> has its <mark>*type*</mark>, <mark>*value*</mark>, and <mark>*address*</mark>.
<br>

### A <font color = red>variable</font> can be used as a <mark>*lvalue*</mark> or a <mark>*rvalue*</mark>.

---
<font size = 12>

"A <mark>***pointer***</mark> is a <font color = red>***variable***</font> that
contains the <font color = red>***address***</font> of a variable."
</font>

![w:300](figs/KR.jpg)

---
# Swap (<mark>selection-sort.c</mark>)
<br>

![w:600](figs/swap.jpeg)

---
# Pointers and Arrays (<mark>selection-sort.c</mark>)
<br>

* In <font color = green>***expressions***</font>, the <font color = red>***name***</font> of an array is a synonym for the <mark>***address of its first element***</mark>.
<br>

* But an array name is <font color = red>**NOT**</font> a variable.

---
# Dynamic Memory Management (<mark>selection-sort.c</mark>)
<br>

### [void *malloc(size_t size);](https://en.cppreference.com/w/c/memory/malloc)
<br>

### [void free(void *ptr);](https://en.cppreference.com/w/c/memory/free)

---
# Returning Pointers from Functions (<mark>merge.c</mark>)

![w:800](figs/merge-arrays.png)

---
# Returning Multiple Values from Functions (<mark>scanf.c</mark>)
<br>

### <mark>while (<font color = red>scanf</font>("%d", \&numbers[++len]) != EOF);
</mark>

---
![bg w:600](figs/see-you.jpeg)