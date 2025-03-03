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
March 05, 2025

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

* How to <font color = red><b>reduce</b></font> the original problem into smaller sub-problems?
<br>

* <font color = green>Recursively call the Mirror to solve these sub-problems</font>
<br>

* How to <font color = red><b>combine</b></font> the solutions to the smaller sub-problems into the solution to the original problem?
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
![bg w:900](figs/thankyou.jpg)