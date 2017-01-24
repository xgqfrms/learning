

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



[1] http://developer.android.com/reference/android/R.attr.html
[2] http://developer.android.com/design/style/typography.html 
[3] https://plus.google.com/+AndroidDevelopers/posts/3rL9cTLyuQy
[4] https://android.googlesource.com/platform/frameworks/base/+/refs/heads/master/core/res/res/values/themes.xml
[5] https://android.googlesource.com/platform/frameworks/base/+/refs/heads/master/core/res/res/values/styles.xml﻿


十六进制颜色（Hex color）

https://material.io/guidelines/style/color.html#color-color-palette



https://storage.googleapis.com/material-design/publish/material_v_10/assets/0Bzhp5Z4wHba3XzREV0lBeEZfWVE/Palette%20Perfect%20How%20Material%20Design%20Makes%20Color%20Easy.mp4




<TextView
    android:text="2017 Hapy New Year!"
    android:layout_width="wrap_content"
    android:layout_height="wrap_content"
    android:layout_margin="20dp"
    android:padding="12dp"
    android:background="#0f0"
    android:textColor="#f0f"
    android:textSize="36sp"
    />



<!--android:background="@android:color/darker_gray"-->
<LinearLayout
    android:layout_width="match_parent"
    android:layout_height="match_parent"
    android:orientation="vertical">
    <TextView
    android:text="2017 Hapy New Year!"
    android:layout_width="320dp"
    android:layout_height="480dp"
    android:layout_margin="20dp"
    android:padding="12dp"
    android:background="#0f0"
    android:textColor="#f0f"
    android:textSize="36sp"
    />
    <TextView
    android:text="2017 Hapy New Year!"
    android:layout_width="wrap_content"
    android:layout_height="wrap_content"
    android:layout_margin="20dp"
    android:padding="12dp"
    android:background="@android:color/darker_gray"
    android:textColor="#ff0000"
    android:textSize="36sp"
    />
</LinearLayout>













