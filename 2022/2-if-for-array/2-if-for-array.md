---
marp: true
theme: 2022cpl
class:
  - lead

backgroundColor: #FED8B1
paginate: true
size: 16:9
---
# <p id = "small-caps">2. &nbsp; If, For, Array</p>

[Hengfeng Wei (魏恒峰)](https://hengxin.github.io/)
hfwei@nju.edu.cn

![w:200](figs/C.png)
Oct. 07, 2022

---
# Feedback

---
<br>
<br>
<br>

# 好原料 + 好工艺 = 好产品

---
# Review

### <font color = "blue">Variables (变量) &emsp; Data Types (数据类型)</font>

<br>

### <font color = "red">Operators (运算符) &emsp; Expressions (表达式)
### Assignment Statements (赋值语句)</font>

<br>

### <font color = "purple">I/O (Input/Output; 输入输出)</font>

---
# Overview
<br>

### If Statement (`if` 语句)
### For Statement (`for` 语句)
### Logical Expressions (逻辑表达式)
<br>

### Array (数组)
---
![w:700](figs/lets-code.jpeg)

## <mark>min.c &ensp; leap.c &ensp; sum.c &ensp; min.c</mark>

---
# Min

![w:800](figs/minimum.jpg)

---
# Min of Two
<br>

Given two integers $a$ and $b$, to compute their minimum.
<br>

$min = \min\{a, b\}$

---
# Min of Two

fig of code: relational operator, relational expression

---
# Min of Two
<br>

## <code><font color = yellow>min = a >= b <font color = red>?</font> b <font color = red>:</font> a;</font></code>
<br>

# Do Not Use it Too Much!

---
# Min of Two
<br>

Given two <font color = red size = 8>double</font>s $a$ and $b$, to compute their minimum.
<br>

$\mathit{min} = \min\{a, b\}$

---
# Min of Three
<br>

Given three integers $a$, $b$, and $c$, to compute their minimum.
<br>

$\mathit{min} = \min\{a, b, c\}$

---
# Min of Three
<br>

nested vs. flatten

&&, ||

---
# Min of a Set of Numbers
<br>

Given a set $A$ of integers, to compute their minimum.

$\mathit{min} = \min A$
<br>

![w:500](figs/loop.jpg)

---
# Leap Year

![w:800](figs/leap-year.jpeg)

---
# Leap Year (1): Nested `if/else`
![w:800](figs/leap-year-flowchart.png)

---
# Leap Year (2): Nested `if/else`
<br>

![w:1200](figs/leap-year-wiki.png)

---
# Leap Year (3): `else if`

---
# Leap Year (4): The Ultimate Version
<br>

A year is a <mark>**leap year**</mark> if
<br>

- it is divisible by $4$ but not by $100$,
- except that years divisible by $400$ are leap years.

---
# Leap Year (4): The Ultimate Version
<br>

---
# Short-circuit Evaluation

* year = 25
* year = 80

---
# Sum

Given an integer $n \ge 0$, to compute $\sum\limits_{i = 1}^{n} i$.

---
![bg w:600](figs/see-you.jpeg)