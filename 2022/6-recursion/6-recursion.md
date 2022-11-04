---
marp: true
theme: 2022cpl
class:
  - lead

backgroundColor: #FED8B1
paginate: true
size: 16:9
---
# <p id = "small-caps">6. &nbsp; Recursion</p>

[Hengfeng Wei (魏恒峰)](https://hengxin.github.io/)
hfwei@nju.edu.cn

![w:200](figs/C.png)
Nov. 04, 2022

---
# Review

# <font color = red>Functions</font>

### Function Definition
### Function Declaration
### <mark>Arrays as Parameters</mark>
### <mark>Pass by Value</mark>

---
# Overview

### <font color = red>Recursive Functions (Recursion)</font>
![w:520](figs/recursion-stair.jpg)

### A function that calls itself.

---
# <mark>Thinking Recursively</mark>

#### Solving a task by first solving its smaller subtasks

![w:650](figs/think-recursively.jpg)

#### It will be a <font color = red>loooong</font> way to go to master recursion!!!

---
# <mark>Thinking Recursively</mark>

You want to solve a task and suppose you have the <mark>Mirror</mark>.

![w:550](figs/mirror.jpg)
### <mark>Ask the Mirror Right Questions</mark>

---
# <mark>Thinking Recursively</mark>
<br>
<br>

* What is a smaller task? &ensp; (<font color = red>$\star\star\star\star\star$</font>)

* How to solve the task given the solution to the smaller one? (<font color = red>$\star\star\star$</font>)

* What is the smallest task?&ensp; (<font color = red>$\star$</font>)

---

# <mark>Thinking like a Computer</mark>

![w:700](figs/think-computer.png)

## <mark>min.c</mark>

---
![w:700](figs/lets-code.jpeg)

## <mark>min-re.c &ensp; sum-re.c &ensp; fib-re.c &ensp; gcd-re.c &ensp; bsearch-re.c &ensp; <del>mergesort.c</del></mark>

---
# Min (<mark>min-re.c</mark>)

![w:700](figs/mirror.jpg)
### <mark>Ask the Mirror Right Questions</mark>

---
# Min (<mark>min-re.c</mark>)

![w:900](figs/Min.png)

---
# Sum (<mark>sum-re.c</mark>)

![w:700](figs/mirror.jpg)
### <mark>Ask the Mirror Right Questions</mark>

---
# Sum (<mark>sum-re.c</mark>)

![w:900](figs/sum.png)

---
# Fibonacci Sequence (<mark>fib-re.c</mark>)
<br>

$F_{0} = 1$

$F_{1} = 1$

$F_{n} = F_{n-1} + F_{n-2} \quad (n > 1)$

<!-- ![w:900](figs/fib) -->

---
# Greatest Common Divisor (<mark>gcd-re.c</mark>)

![w:400](figs/euclid.jpeg)
$\text{gcd}(a, b) = \text{gcd}(b, a \;\%\; b)$

---
# Binary Search (<mark>bsearch-re.c</mark>)

![w:700](figs/binary-search-mario.png)

You should do sth. first to obtain the smaller task.

---
# MergeSort (<mark>mergesort.c</mark>)

![w:550](figs/mergesort.png)

---
# MergeSort (<mark>mergesort.c</mark>)

![w:800](figs/mergesort-animation.gif)

---
![bg w:600](figs/see-you.jpeg)