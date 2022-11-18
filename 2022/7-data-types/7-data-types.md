---
marp: true
theme: 2022cpl
class:
  - lead

backgroundColor: #FED8B1
paginate: true
size: 16:9
---
# <p id = "small-caps">7. &nbsp; Recursion; Data Types</p>

[Hengfeng Wei (魏恒峰)](https://hengxin.github.io/)
hfwei@nju.edu.cn

![w:200](figs/C.png)
Nov. 11, 2022

---
# Review

### <font color = red>Recursive Functions (Recursion)</font>
![w:520](figs/recursion-stair.jpg)

### A function that calls itself.

---
# Overview
</br>

### <font color = red>Recursion</font> (<mark>mergesort.c</mark>)
<br>

### <font color = blue>Data Types</font>

---
![w:700](figs/lets-code.jpeg)

## <mark>mergesort.c</mark>

---
# Merge Sort (<mark>mergesort.c</mark>)

![w:550](figs/mergesort.png)

---
<!-- # Merge Sort (<mark>mergesort.c</mark>) -->

![w:850](figs/chen.png)

## DO YOU WANNA DANCE TONIGHT?

<!-- ![w:800](figs/mergesort-animation.gif) -->

---
# Data Types

The <mark>**type**</mark> of a variable determines

- the set of **values** it may take on and

- what **operations** can be performed on them.

---
<br>
<br>

## <mark>int &ensp;&ensp; <font color = red>double</font> &ensp;&ensp; char &ensp;&ensp; bool</mark>
<br>

## <mark>[ ]</mark>

---
![w:700](figs/trap.jfif)

---
# Integral Types (<mark>int-limits.c</mark>)
<br>

- short (int)
- int
- long (int)
- long long (int)

<mark>signed</mark> *vs.* <mark>unsigned</mark>

---
# Overflow (<mark>int-overflow.c</mark>)
<br>

- 有符号整数运算中发生溢出, 程序的行为是<font color = red>**未定义的**</font>。
<br>

- 无符号整数运算中发生溢出, 则发生<font color = blue>**回绕**</font>现象。

---
# Signed and Unsigned (<mark>unsigned.c</mark>)
<br>
<br>

### <mark>Be careful when mixing signed and unsigned types.</mark>
<br>

---
# Signed and Unsigned (<mark>unsigned.c</mark>)
<br>
<br>

### <mark>Do <font color = red>NOT</font> use unsigned types unless you know exactly what you are doing.</mark>

---
# typedef
<br>
<br>

### <mark><font color = blue>typedef</font> unsigned long long int <font color = red>size_t</font></mark>
<br>

### <mark><font color = blue>typedef</font> long <font color = red>clock_t</font></mark>

---
# char (<mark>char.c</mark>)
<br>

### Use `char` only for representing characters.
<br>

### Do <font color = red>NOT</font> assume `signed char` or `unsigned char`.

---
# Implicit Conversion
### (<mark>implicit-conversion.c</mark>)
<br>

- 算术表达式、逻辑表达式 (<mark><font color = blue>类型提升; Section 7.4.1</font></mark>)

- 定义初始化、赋值 (<font color = red>类型转换</font>)

- 函数调用时 (<font color = red>类型转换</font>)

- 函数返回时 (<font color = red>类型转换</font>)
<br>

### <font color = red>Be careful about narrowing conversion!!!</font>

---
# Explicit Conversion
### (<mark>explicit-conversion.c</mark>)

---
# Floating-point Numbers
### (<mark>float-limits.c</mark>)
<br>

- float (F)

- double

- long double (L)

---
![w:350](figs/c-std-book.jpg)

### <mark>"Floating-point Arithmetic is Hard."</mark>
#### (Section 23.1 `float.h`)

---
### <mark>"Many applications <font color = red>don't</font> need floating-point arithmetic at all."</mark>

![w:300](figs/c-std-book.jpg)

### Use `math.h` (Section 23.3) whenever possible.

---
![w:1100](figs/fp.png)
<mark>**sum-product.c &ensp; loop.c &ensp; compare.c**</mark>

---
![w:450](figs/csapp.jpeg)

---
![w:450](figs/cert-c.jpeg)

---
![bg w:600](figs/see-you.jpeg)