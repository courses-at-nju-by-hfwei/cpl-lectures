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
Sep. 29, 2024

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

<font color = red>

### If Statement (`if` 语句)
### For Statement (`for` 语句)
### Logical Expressions (逻辑表达式)
</font>
<br>

### <font color = blue>Array (数组)</font>
---
![w:700](figs/lets-code.jpeg)

## <mark>min.c &ensp; leap.c &ensp; min-array.c</mark>

---
# Min

![w:800](figs/minimum.jpg)

---
# Min of Two
<br>
<br>

#### Given two integers $a$ and $b$, to compute their minimum.
<br>

$min = \min\{a, b\}$

---
# Min of Two
<br>

## <code><font color = yellow>min = a >= b <font color = red>?</font> b <font color = red>:</font> a;</font></code>
#### (条件表达式; 三目运算符)
<br>

## Do Not Use it Too Much!
## Do Not Be Too Clever!

<!-- ---
# Min of Two
<br>

Given two <font color = red size = 8>double</font>s $a$ and $b$, to compute their minimum.
<br>

$\mathit{min} = \min\{a, b\}$ -->

---
# Min of Three
<br>
<br>

#### Given three integers $a$, $b$, and $c$, to compute their minimum.
<br>

$\mathit{min} = \min\{a, b, c\}$

---
# Min of a Set of Numbers
<br>

#### Given a set $A$ of integers, to compute their minimum.

$\mathit{min} = \min A$

![w:500](figs/loop.jpg)

---
# Leap Year

![w:800](figs/leap-year.jpeg)

---
# Leap Year (1): Nested `if/else` (YES)
![w:800](figs/leap-year-flowchart.png)

---
# Leap Year (2): Nested `if/else` (NO)

![w:800](figs/leap-year-flowchart.png)

---
# Leap Year (3): `else if`
<br>

![w:1200](figs/leap-year-wiki.png)

---
# Leap Year (4): The Ultimate Version
<br>

## A year is a <mark>**leap year**</mark> if
<br>

<font size = 8>

- it is divisible by $4$ but not by $100$,
- except that years divisible by $400$ are leap years.
</font>

---
# Short-circuit Evaluation (短路求值)

![w:950](figs/leap.png)

<!-- --- -->
<!-- # Sum

Given an integer $n \ge 0$, to compute $\sum\limits_{i = 1}^{n} i$.

$\sum\limits_{i=1}^{n} = \frac{n(n-1)}{2}$

![w:250](figs/sum.jpg) -->

---
# Min of a Set of Numbers
<br>
<br>

#### Given a set $A$ of integers, to compute their minimum.
<br>

$\mathit{min} = \min_{i} A_{i}$
<br>

$\min\{3, 5, 2, 7\} = \min(\min(\min(3, 5), 2), 7)$

---
# `For` Statement
<br>

![w:1200](figs/for-syntax.png)
<br>

![w:1200](figs/for-special.png)

<!-- ---
# <!--fit--> Increment/Decrement Operators (`++`, `--`)
<br>
<br>
<br>

<font color = yellow size = 50>

    i = 2;
    j = i * i++;
</font> -->

---
# <code><font color = yellow>#define NUM 5</font></code>
<br>
<br>

### Symbolic Constants (符号常量)
<br>

## <code><font color = yellow>int numbers[NUM] = {0};</font></code> has a <mark>*fixed*</mark> size.
<!-- <br>

## `NUM` is known at <mark>*compiler*</mark> time. -->

---
# Array Initializer
<br>

* <code><font color = yellow size = 8>int numbers[NUM] = {1};</font></code>
<br>

* <code><font color = yellow size = 8>int numbers[] = {0};</font></code>
<br>

* <code><font color = yellow size = 8>int numbers[NUM] = {[2] = 1};</font></code>

---
# Array Initializer (DON'T)
<br>

<code><font color = yellow size = 8>int numbers[NUM] = {};</font></code>
<br>

## Forbidden in C99 (Unfortunately!)
## Allowed by GCC by default (Unfortunately!!)
## Allowed in C23 (Fortunately or not???)

---
# Array Initializer (DON'T)
<br>

<code><font color = yellow size = 8>int numbers[NUM];</font></code>
<br>

## `numbers` may contain garbage values;
## always initialize it

---
# Array Initializer (DON'T)
<br>

<code><font color = yellow size = 8>int numbers[];</font></code>
<br>

## You <mark>must</mark> specify the size so that the compiler/runtime can allocate memory for it.

---
# Min of a Set of <mark>Input</mark> Numbers
<br>
<br>

#### <mark>**Input**</mark> a set $A$ of <mark>**$n \ge 1$**</mark> integers, to compute their minimum.
<br>

$\mathit{min} = \min_{i} A_{i}$

---
![bg w:600](figs/see-you.jpeg)