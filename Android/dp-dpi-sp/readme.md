

dp

密度独立像素（Density Independent Pixels）

https://classroom.udacity.com/courses/ud837/lessons/4027328704/concepts/42075886740923#


http://material.google.youdaxue.com/layout/metrics-keylines.html#metrics-keylines-touch-target-size


密度独立像素的含义是什么？ 你可能熟悉像素，即屏幕上发光的小区域。屏幕实际上由无数个像素组成。

那么什么是“密度独立"像素呢？
质量更好的屏幕通常在相同的面积内会具有更多的像素。
固定面积内的像素数量称为屏幕的像素密度。

如果你好奇的话，48dp 大概等于 9mm。

target > 48dp



sp



缩放无关像素（Scale Independent Pixels）


https://classroom.udacity.com/courses/ud837/lessons/4027328704/concepts/42427786840923#




https://material.io/guidelines/style/typography.html#typography-typeface

https://plus.google.com/+AndroidDevelopers/posts/gQuBtnuk6iG


硬编码（Hard coding）
wrap_content




<TextView
    android:layout_width="wrap_content"
    android:layout_height="wrap_content"
    android:padding="8dp"
    android:textSize="24sp"
    android:text="Hello"/>

https://plus.google.com/+AndroidDevelopers/posts/gQuBtnuk6iG

<TextView
    android:textAppearance="?android:textAppearanceSmall" />
<TextView
    android:textAppearance="?android:textAppearanceMedium" />
<TextView
    android:textAppearance="?android:textAppearanceLarge" />



As of API 19 (KitKat):
• ?android:textAppearanceSmall is currently 14sp
• ?android:textAppearanceMedium is currently 18sp
• ?android:textAppearanceLarge is currently 22sp


