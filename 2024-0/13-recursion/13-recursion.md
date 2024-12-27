---
marp: true
theme: 2022cpl
class:
  - lead

backgroundColor: #FED8B1
paginate: true
size: 16:9
---
# <p id = "small-caps">13. &nbsp; Recursion</p>

[Hengfeng Wei (魏恒峰)](https://hengxin.github.io/)
hfwei@nju.edu.cn

![w:200](figs/C.png)
Dec. 27, 2024

---
### <font color = red>Recursive Functions (Recursion)</font>

![w:500](figs/hands.jpg)

### A function that calls itself <mark>(min-re.c)</mark>.

---
# <mark> (1) Thinking like a Computer Scientist </mark>

You have a problem and suppose you have the <mark>Mirror</mark>.

![w:550](figs/mirror.jpg)
#### <font color = red>The <mark>Mirror</mark> can solve smaller sub-problems for you <mark>magically</mark>.</font>

---
# <mark> (1) Thinking like a Computer Scientist </mark>
<br>

* How to reduce the original problem into smaller sub-problems?
<br>

* How to solve the original problem given the solutions to the smaller sub-problems?
<br>

### <font color = red>What are the smaller sub-problems?</font> &ensp; (<font color = red>$\star\star\star\star\star$</font>)

---
![w:650](figs/recursion-stair.jpg)
## <mark>stairs.c</mark>

---

# <mark> (2) Thinking like a Computer</mark>

![w:750](figs/think-computer.png)
### How does <mark>the Mirror</mark> work? (<mark>stairs.c</mark>)

---
### <font color = red>What are the smallest sub-problems?</font>

![w:520](figs/recursion-basecase.jpg)

### <mark>Solve them without recursion!</mark>

---
![w:800](figs/lets-code.jpeg)

### <mark>min-re.c &ensp; gcd-re.c &ensp; bsearch-re.c &ensp; mergesort.c</mark>

---
# Min (<mark>min-re.c</mark>)

![w:900](figs/Min.png)

<!--
---
# Fibonacci Sequence (<mark>fib-re.c</mark>)
<br>

$F_{0} = 0$

$F_{1} = 1$

$F_{n} = F_{n-1} + F_{n-2} \quad (n > 1)$
-->

---
# Greatest Common Divisor (<mark>gcd-re.c</mark>)

![w:350](figs/euclid.jpeg)
### $\text{gcd}(a, b) = \text{gcd}(b, a \;\%\; b)$

---
# Binary Search (<mark>bsearch-re.c</mark>)

![w:750](figs/binary-search-mario.png)

<!-- You should do sth. first to obtain the smaller task. -->

---
# MergeSort (<mark>mergesort.c</mark>)

![w:520](figs/mergesort.png)

---
![bg w:1000](figs/mergesort-dance.png)

---
![bg w:700](figs/happy-end.jpg)

---
![bg w:600](figs/see-you.jpeg)