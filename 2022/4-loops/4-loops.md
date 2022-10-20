---
marp: true
theme: 2022cpl
class:
  - lead

backgroundColor: #FED8B1
paginate: true
size: 16:9
---
# <p id = "small-caps">4. &nbsp; Loops</p>

[Hengfeng Wei (魏恒峰)](https://hengxin.github.io/)
hfwei@nju.edu.cn

![w:200](figs/C.png)
Oct. 21, 2022

---
# Review
<br>

<font color = red>

### For Statement (More Examples)
<br>

### While (Do-While) Statement
<br>

### `break` Statement
</font>

---
# Overview
<br>
<br>

### <font color = red>Loops (More Examples)</font>
<br>

### <font color = blue>Multidimensional Arrays (多维数组)</font>

---
![w:700](figs/lets-code.jpeg)

## <mark>game-of-life.c &ensp; merge.c &ensp; <del>bubble-sort.c</del></mark>

---
# [Conway's Game of Life @ wiki](https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life)

#### John Horton Conway ($1937 \sim 2020$)

![w:450](figs/Conway.jpg)

#### [playgameoflife.com (Cellular Automata; 元胞自动机)](https://playgameoflife.com/)
---
# [Conway's Game of Life @ wiki](https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life)
<br>

* Any <font color = blue>**live**</font> cell with two or three live neighbours survives.
* All other <font color = blue>**live**</font> cells die in the next generation.
<br>

* Any <font color = red>**dead**</font> cell with three live neighbours becomes a live cell.
* All other <font color = red>**dead**</font> cells stay dead.

---
<!-- ![w:600](videos/video-logo.jpg) -->
<video control width = "950"> <source src="videos/Conway-Game-of-Life.mp4" type = "video/mp4"> </video>

## <mark>game-of-life.c</mark>

---
# Merge (<mark>merge.c</mark>)

![w:1200](figs/merge-arrays.png)

---
# Bubble Sort (<mark>bubble-sort.c</mark>)

![w:900](figs/bubble-sort.png)

---
# Bubble Sort (<mark>bubble-sort.c</mark>)

![w:900](figs/bubble-sort-wiki.gif)

---
![bg w:600](figs/see-you.jpeg)