---
marp: true
theme: 2022cpl
class:
  - lead

backgroundColor: #FED8B1
paginate: true
size: 16:9
---
# <p id = "small-caps">6. Data Types</p>

[Hengfeng Wei (魏恒峰)](https://hengxin.github.io/)
hfwei@nju.edu.cn

![w:200](figs/C.png)
Oct. 31, 2024

---
# Review

# <font color = red>Functions</font>

### Function Definition
### Function Declaration
### Arrays as Parameters
### <mark>Pass by Value</mark>
---
# Overview
</br>
</br>
</br>

# <font color = blue> (Basic) Data Types</font>

---
![bg w:750](figs/trap.jfif)

---
# Two Major Reasons

<br>
<br>
<br>

## <mark>Architectures May Vary</mark>

<br>
<br>

## <mark>Finite vs. Infinite</mark>

---
![bg w:1100](figs/theory-practice.jpg)

---
![bg w:800](figs/lets-code.jpeg)

---
# Object

<br>
<br>

![w:1250](figs/object.png)

<br>
<br>

## <mark><font color = red>Object Types</font>&ensp;&ensp;Function Types</mark>

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

## <mark>int &ensp;&ensp; char &ensp;&ensp; bool&ensp; (_Bool)</mark>&ensp;&ensp;<font color = red>double</font>
<br>

## <font color = green>[ ]</font>

---
# Integral Types (<mark>size.c</mark>)

<br>

- <mark>(unsigned)</mark> short (int)

- <mark>unsigned</mark> int

- <mark>unsigned</mark> long (int)

- <mark>unsigned</mark> long long (int)

![w:1000](figs/sizeof.png)

---
# Integral Types

<br>

- <mark>(unsigned)</mark> short (int)

- <mark>unsigned</mark> int

- <mark>unsigned</mark> long (int)

- <mark>unsigned</mark> long long (int)

![w:1150](figs/precision-width.png)

---
# Integral Types (<mark>int-limits.c</mark>)

<br>

- <mark>(unsigned)</mark> short (int)

- <mark>unsigned</mark> int

- <mark>unsigned</mark> long (int)

- <mark>unsigned</mark> long long (int)

---
# Integral Types (<mark>exact-width.c</mark>)

<br>

## int8_t &ensp; int16_t &ensp; int32_t  &ensp; int64_t &ensp;

![w:1000](figs/exact-width.png)

## <mark>stdint.h</mark>

---
# Signed and Unsigned (<mark>unsigned.c</mark>)
<br>
<br>
<br>

### <mark>Be careful when <font color = red>MIXING</font> signed and unsigned types.</mark>
<br>

<!--
---
# Signed and Unsigned (<mark>sizet.c</mark>)
<br>
<br>
<br>

![w:1200](figs/int01-sizet.png)
-->

---
# typedef
<br>
<br>

### <mark><font color = blue>typedef</font> unsigned __int64 <font color = red>size_t</font></mark>

<br>

### <mark><font color = blue>#define</font> <font color = red>_ _int64</font> long long</mark>

<br>

### <mark><font color = blue>typedef</font> long long <font color = red>time_t</font></mark>


---
# char (<mark>char.c</mark>)
<br>
<br>

### Use `char` only for representing characters.
<br>

### Do <font color = red>NOT</font> assume `signed char` or `unsigned char`.

---
# Overflow
## (<mark>unsigned-wrap.c &ensp; for-unsigned.c &ensp; unsigned-wrap-fix.c</mark>)
<br>
<br>

<mark>无符号整数</mark>运算中没有溢出, 取而代之的是<font color = font>**回绕 (wrap)**</font>现象

---
# Overflow
## (<mark>signed-overflow-fix.c</mark>)
<br>
<br>

<mark>有符号整数</mark>运算中发生溢出, 程序的行为是<font color = red>**未定义的**</font>

---
# Implicit Conversion
### (<mark>implicit-conversion.c</mark>)
<br>

- 算术表达式、逻辑表达式 (<mark><font color = blue>先做整值提升 </font></mark>)

- 定义初始化、赋值 (<font color = red>类型转换</font>)

- 函数调用时 (<font color = red>类型转换</font>)

- 函数返回时 (<font color = red>类型转换</font>)

### <font color = red>Be careful about narrowing conversions!!!</font>

---
# Implicit Conversion
<br>

## [Integer promotions (integer-promotion.c)](https://en.cppreference.com/w/c/language/conversion)

<br>

## [Integer conversion rank (Section 7.4.3)](https://en.cppreference.com/w/c/language/conversion)

<br>

## [Usual arithmetic conversions (Section 7.4.1)](https://en.cppreference.com/w/c/language/conversion)

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
![bg w:1000](figs/math-h.png)

---
# IEEE 754

![w:1200](figs/IEEE_754_Single_Floating_Point_Format.svg.png)
$24 \; (\approx 6) \qquad\qquad 53 \; (\approx 16)$

![w:1200](figs/IEEE_754_Double_Floating_Point_Format.svg.png)

---
![bg w:1100](figs/fp-model.png)

---
![w:1100](figs/fp.png)

---
<br>
<br>
<br>

# [What is a subnormal floating point number? @ stackoverflow](https://stackoverflow.com/questions/8341395/what-is-a-subnormal-floating-point-number)

---
<br>
<br>
<br>

## <mark>implicit-conversion.c</mark>
<br>

## <mark>sum-product.c &ensp; loop.c &ensp; compare.c</mark>

---
![w:450](figs/csapp-yingyin.jpg)

---
![w:460](figs/cert-2016.png) &ensp;&ensp; ![w:450](figs/effective-c.jpg)

---
![bg w:600](figs/see-you.jpeg)