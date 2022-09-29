---
marp: true
theme: 2022cpl
class:
  - lead
#   - invert

backgroundColor: #FED8B1
paginate: true
size: 16:9
---
# <p id = "small-caps">1. &nbsp; Variables, Types, I/O</p>

[Hengfeng Wei (魏恒峰)](https://hengxin.github.io/)
hfwei@nju.edu.cn

![w:200](figs/C.png)
Sep. 30, 2022

---
# Overview

<br>

**<font color = "green">Program</font> = <font color = "purple">Input</font> + <font color = "blue"  size = "8">Data </font> + <font color = "red" size = "8">Operations</font> + <font color = "purple">Output</font>**

![w:900](figs/io-process.png)

---
# Overview

### <font color = "blue">Variables (变量) &emsp; Data Types (数据类型)</font>

<br>

### <font color = "red">Operators (运算符) &emsp; Expressions (表达式)
### Assignment Statements (赋值语句)</font>

<br>

### <font color = "purple">I/O (Input/Output; 输入输出)</font>

---
![w:700](figs/lets-code.jpeg)

## <mark>circle.c &ensp; sphere.c &ensp; mol.c &ensp; admin.c</mark>

---
# Circle

<font size = "8">Given a **radius** (say $10$) of a circle,
to compute its **circumference** and **area**.</font>

<br>

$L = 2\pi r$ &emsp; $S = \pi r^2$

<br>

- 每个结果各占一行
- 小数点后保留两位

---
# Declaration/Definition (声明/定义)
<code><font color = "yellow" size = "7">int radius = 10;</font></code>

<br>

* <mark>Declare/Define</mark> a *variable* called `radius`.
* The <mark>type</mark> of `radius` is `int` (integer).
* `radius` is <mark>initialized</mark> to $10$.
* You can <mark>assign</mark> other integers to `radius`.
* `radis` refers to a <mark>location</mark> (`&radius`) in memory.

---
# Identifiers (标识符)

<code><font color = "yellow" size = "7">int radius = 10;</font></code>

<br>

`radius` is an *identifier*.

**Warning:** Do *not* start with <code><font color = "yellow">_</font></code>, which are reserved by C.

<br>

#### Always use <mark>meaningful</mark> identifiers in a <mark>uniform</mark> style!!!

---
# <!-- fit --> Operators, Expressions, Assignment Statements

<br>
<br>
<br>

<code><font color = "yellow" size = "8">circumference = 2 * PI * radius;</font></code>

---
# Sphere

<font size = "7">Given a <mark>radius</mark> (say $100$) of a sphere,
to compute its <mark>surface area</mark> and <mark>volume</mark>.</font>

$A = 4 \pi r^2\quad V = \frac{4}{3} \pi r^3$

- 每个结果占 $1$ 行
- 小数点后保留 $4$ 位
- 每个结果至少占 $15$ 字符, 左对齐
  - `_______________ : surface_area`
  - `_______________ : volume`

---
# mol
<font size = "7">$6$ 克氧气的物质的量是多少?</font>

<br>

$Q = 6 / 32 \times 6.02 \times 10^{23}$

<br>

两种格式输出, 结果均使用<mark>科学计数法</mark>表示

- 第一行结果, 小数点后保留 $3$ 位
- 第二行结果, 保留 $5$ 位有效数字

---
# A (Naive) Administration System

<div class="columns">

<div>
<br>
<br>

- Name (EN)

- Gender (F/M)

- Birthday (mm-dd-yyyy)

- Weekday (Xyz.)
</div>

<div>
<br>

- C
- Music
- Medicine
<br>
- Mean (.d)
- Standard Deviation (.dd)
- Ranking ($\%$)
</div>

</div>

---
![bg left w:500](figs/Luo.jpeg)

<br>

### For 罗大佑 only:
<br>

- 每组信息占一行
- 各项信息使用 `\t` 间隔
- 各项信息遵循特定格式要求

---
# <code><font color = yellow>char</font></code> and <code><font color = yellow><ctype.h></font></code>

![w:650](figs/ASCII.png)

A `char` is actually an `int`.

---
# <code><font color = yellow>C string</font></code>
<code><font color = yellow size = 8>char first_name[] = "Tayu";</code></font>

A C string is a null-terminated (`\0`) sequence of characters.

String literal: 'T', 'a', 'y', 'u', '\0'

<br>

* char first_name[5] = "Tayu";
* char first_name[10] = "Tayu";
* <del>char first_name[2] = "Tayu";</del>

---
# <!--fit--> <code><font color = yellow><font color = red>%</font>[flags][width][.[precision]]<font color = red>specifier</font></font></code>

<br>

- <code><font color = yellow size = 7>%d</font></code>: decimal `int`
- <code><font color = yellow size = 7>%f</font></code>: `double`
- <code><font color = yellow size = 7>%e %E</font></code>: `double` ($-d.ddd \;\text{e} \pm dd$)
- <code><font color = yellow size = 7>%c</font></code>: `char`
- <code><font color = yellow size = 7>%s</font></code>: `C string`
- <code><font color = yellow size = 7>%%</font></code>: `%`

---
![bg left w:450](figs/ub.jpg)

<br>

<font size = 8>
It is <ins>up to you</ins> to ensure that the type of the actual argument <ins>matches</ins> the type expected by conversion specifiers.</font>

[Undefined Behavior (UB)](https://en.cppreference.com/w/c/language/behavior)

---
# <!--fit--> <code><font color = yellow>%[<font color = red>flags</font>][width][.[precision]]specifier</font></code>

<br>
<br>
<br>

- $-$: left-justified (otherwise, right-justified)
- $+$: always begin with a plus or minus sign

---
# <!--fit--> <code><font color = yellow>%[flags][<font color = red>width</font>][.[precision]]specifier</font></code>

<br>
<br>

- minimum field width
- padded with spaces if it has fewer characters

---
# <!--fit--> <code><font color = yellow>%[flags][width][<font color = red>.[precision]</font>]specifier</font></code>

<br>
<br>

* `%d`, `%i`: <mark>minimum number</mark> of digits
  - expanded with leading zeros when needed
* `%f`, `%e`, `%E`: <mark>number</mark> of digits after `.`
  - default is 6
* `%s`: <mark>maximum number</mark> of characters

---
### [https://en.cppreference.com/w/c/io/fprintf](https://en.cppreference.com/w/c/io/fprintf)

![w:350](figs/c-lib.webp)
### Chapter 12: `<stdio.h>`, P257--262

---
![bg w:600](figs/Luo.jpeg)

---
<!-- # <code><font color = yellow><font color = red>%</font>[$\ast$][width]<font color = red>specifier</font></font></code> -->
# <code><font color = yellow><font color = red>%</font>[width]<font color = red>specifier</font></font></code>
<br>

- <code><font color = yellow size = 7>%d</font></code>: skip white-spaces; match a decimal `int`
- <code><font color = yellow size = 7>%lf</font></code>: skip white-spaces; match a `double`
- <code><font color = yellow size = 7>%c</font></code>: match a `char` (do not skip white-spaces)
- <code><font color = yellow size = 7>%s</font></code>: match a sequence of non-white-spaces
- <code><font color = yellow size = 7>%%</font></code>: mathch a `%`

<!-- --- -->
<!-- # <code><font color = yellow>%[<font color = red>$\ast$</font>][width]specifier</font></code> -->

---
<!-- # <code><font color = yellow>%[$\ast$][<font color = red>width</font>]specifier</font></code> -->

# <code><font color = yellow>%[<font color = red>width</font>]specifier</font></code>

<br>
<br>

- <mark>maximum</mark> field width to scan

---
### [https://en.cppreference.com/w/c/io/fscanf](https://en.cppreference.com/w/c/io/fscanf)

![w:350](figs/c-lib.webp)
### Chapter 12: `<stdio.h>`, P263--P268

---
<br>

### [A beginners' guide away from `scanf`](http://sekrit.de/webdocs/c/beginners-guide-away-from-scanf.html)

<br>

# <!--fit--> <font color = red>Do NOT use `scanf`.</font>

<br>

### [Why does everyone say not to use `scanf`? What should I use instead?](https://c-faq.com/stdio/scanfprobs.html)

---
![bg w:600](figs/see-you.jpeg)