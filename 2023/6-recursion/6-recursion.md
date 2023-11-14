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
Nov. 10, 2023

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
![w:450](figs/recursion-stair.jpg)

### A function that calls itself (<mark>main-re.c</mark>).

---
# <mark> (1) Thinking like a Computer Scientist </mark>

![w:650](figs/think-recursively.jpg)

#### <font color = red>Solving a task by first solving its smaller subtasks</font>

---
# <mark> (1) Thinking like a Computer Scientist </mark>

You want to solve a task and suppose you have the <mark>Mirror</mark>.

![w:550](figs/mirror.jpg)
#### <font color = red>The <mark>Mirror</mark> can solve the smaller task for you magically.</font>

---
# <mark> (1) Thinking like a Computer Scientist </mark>
<br>

* What is a smaller task? &ensp; (<font color = red>$\star\star\star\star\star$</font>)
<br>

* How to reduce the original task into the smaller task? &ensp; (<font color = red>$\star\star\star$</font>)
<br>

* How to solve the task given the solution to the smaller one? (<font color = red>$\star\star\star$</font>)
<br>

* What is the smallest task?&ensp; (<font color = red>$\star$</font>)

---
# <mark>Thinking Recursively</mark>

<br>
<br>
<br>

## <mark>It will be a <font color = red>loooooooooong</font> way to go to master RECURSION!!!</mark>

---

# <mark> (2) Thinking like a Computer</mark>

![w:750](figs/think-computer.png)
## <mark>min.c</mark>

---
![w:700](figs/lets-code.jpeg)

## <mark>min-re.c &ensp; sum-re.c &ensp; fib-re.c &ensp; gcd-re.c &ensp; bsearch-re.c &ensp; <del>mergesort.c</del></mark>

---
# Min (<mark>min-re.c</mark>)

![w:700](figs/mirror.jpg)

---
# Min (<mark>min-re.c</mark>)

![w:900](figs/Min.png)

---
# Sum (<mark>sum-re.c</mark>)

![w:700](figs/mirror.jpg)

---
# Sum (<mark>sum-re.c</mark>)

![w:800](figs/sum.png)

---
# Fibonacci Sequence (<mark>fib-re.c</mark>)
<br>

$F_{0} = 0$

$F_{1} = 1$

$F_{n} = F_{n-1} + F_{n-2} \quad (n > 1)$

<!-- ![w:900](figs/fib) -->

---
# Greatest Common Divisor (<mark>gcd-re.c</mark>)

![w:350](figs/euclid.jpeg)
$\text{gcd}(a, b) = \text{gcd}(b, a \;\%\; b)$

---
# Binary Search (<mark>bsearch-re.c</mark>)

![w:750](figs/binary-search-mario.png)

<!-- You should do sth. first to obtain the smaller task. -->

---
# MergeSort (<mark>mergesort.c</mark>)

![w:500](figs/mergesort.png)

---
# MergeSort (<mark>mergesort.c</mark>)

![w:800](figs/mergesort-animation.gif)

---
![bg w:600](figs/see-you.jpeg)