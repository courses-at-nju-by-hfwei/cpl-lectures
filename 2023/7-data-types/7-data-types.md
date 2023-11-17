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
Nov. 17, 2023

---
# Review

### <font color = red>Recursive Functions (Recursion)</font>
![w:500](figs/recursion-stair.jpg)

---
# Overview
</br>
</br>

### <font color = red>Recursion</font> (<mark>mergesort.c</mark>)
<br>

### <font color = blue> (Basic) Data Types</font>

<!-- ![w:350](figs/c-traps-pitfalls.png) -->
<!-- ![w:700](figs/trap.jfif) -->

---
<br>
<br>
<br>
<br>

![w:1100](figs/c-traps-gpt-You.png)

---

![w:600](figs/c-traps-gpt.png)

---
![w:700](figs/lets-code.jpeg)

## <mark>mergesort.c</mark> (John von Neumann; 1945)

---
# Merge Sort (<mark>mergesort.c</mark>)

![w:500](figs/mergesort.png)

---
<!-- # Merge Sort (<mark>mergesort.c</mark>) -->

## DO YOU WANNA DANCE TONIGHT?

![w:850](figs/chen.png)

<!-- ![w:800](figs/mergesort-animation.gif) -->

---
# Data Types
<br>

The <mark>**type**</mark> of a variable determines

<br>

- the set of **values** it may take on and

- what **operations** can be performed on them.

---
<br>
<br>
<br>

## <mark>int &ensp;&ensp; char &ensp;&ensp; bool</mark>&ensp;&ensp;<font color = red>double</font>
<br>

## <mark>[ ]</mark>


---
# Integral Types (<mark>int-limits.c</mark>)

<br>

<!-- ### <mark>Of different sizes</mark> -->
- short (int)

- int

- long (int)

- long long (int)

<!-- - int8_t &ensp; &int16_t &ensp; int32_t  &ensp; int64_t &ensp; (<mark>inttype.h</mark>) -->

---
# Signed and Unsigned (<mark>unsigned.c</mark>)
<br>
<br>
<br>

### <mark>Be careful when <font color = red>MIXING</font> signed and unsigned types.</mark>
<br>

---
# Signed and Unsigned (<mark>unsigned.c</mark>)
<br>
<br>
<br>

### <mark>Do <font color = red>NOT</font> use unsigned types unless you know exactly what you are doing.</mark>

---
# typedef
<br>
<br>

### <mark><font color = blue>typedef</font> unsigned long long int <font color = red>size_t</font></mark>
<br>

### <mark><font color = blue>typedef</font> long <font color = red>time_t</font></mark>

### <mark><font color = blue>#define</font> <font color = red>_ _int64</font> long long</mark>

---
# char (<mark>char.c</mark>)
<br>
<br>

### Use `char` only for representing characters.
<br>

### Do <font color = red>NOT</font> assume `signed char` or `unsigned char`.

---
# Overflow (<mark>int-overflow.c</mark>)
<br>
<br>

- <mark>有符号整数</mark>运算中发生溢出, 程序的行为是<font color = red>**未定义的**</font>。
<br>

- <mark>无符号整数</mark>运算中没有溢出, 取而代之的是<font color = blue>**回绕 (wrap)**</font>现象。

---
# Implicit Conversion
### (<mark>implicit-conversion.c</mark>)
<br>

- 算术表达式、逻辑表达式 (<mark><font color = blue>先做整值提升; Section 7.4.3</font></mark>)

- 定义初始化、赋值 (<font color = red>类型转换</font>)

- 函数调用时 (<font color = red>类型转换</font>)

- 函数返回时 (<font color = red>类型转换</font>)

### <font color = red>Be careful about narrowing conversions!!!</font>

---
# Explicit Conversion
### (<mark>explicit-conversion.c</mark>)
<br>
<br>

#### <mark>(type) expression</mark>

---
# Floating-point Numbers
### (<mark>float-limits.c</mark>)
<br>

- float (F)

- double

- long double (L)

---
![w:300](figs/c-std-book.jpg)

### <mark>"Floating-point Arithmetic is Hard."</mark>
#### (Section 23.1 `float.h`)

---
### <mark>"Many applications <font color = red>don't</font> need floating-point arithmetic at all."</mark>

![w:260](figs/c-std-book.jpg)

### Use `math.h` (Section 23.3) whenever possible.

---
![w:1200](figs/IEEE_754_Single_Floating_Point_Format.svg.png)
$\approx 7 \qquad\qquad \approx 16$

![w:1200](figs/IEEE_754_Double_Floating_Point_Format.svg.png)

---
![w:1100](figs/fp.png)

---
<br>
<br>
<br>

## <mark>implicit-conversion.c</mark>
<br>

## <mark>sum-product.c &ensp; loop.c &ensp; compare.c**</mark>

---
![w:450](figs/csapp-yingyin.jpg)

---
![w:450](figs/cert-2016.png)

---
![bg w:600](figs/see-you.jpeg)