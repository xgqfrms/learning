
# algolia

> Because everyone should be able to build great search.

https://www.algolia.com/pricing

## getstarted

https://www.algolia.com/getstarted#/step1

> ACTORS.JSON

```json

  [
    {
      "name": "Monica Bellucci",
      "alternative_name": "Monica Anna Maria Bellucci",
      "rating": 3956,
      "image_path": "/z3sLuRKP7hQVr.jpg"
    },
    {
      "name": "Sean Connery",
      "alternative_name": "Sir Sean Connery",
      "rating": 746,
      "image_path": "/ce84udJZ9QRSR44jxwK2apM3DM8.jpg"
    },
    {
      "name": "Will Smith",
      "alternative_name": null,
      "rating": 492,
      "image_path": "/2iYXDlCvLyVO49louRyDDXagZ0G.jpg"
    },
    {...}
  ]

```

> An index is an entity within Algolia where you import the data you want to search (indexing) and perform queries against (search).

索引是您在Algolia中导入要搜索的数据（索引）并针对（搜索）执行查询的实体。

> Font Awesome 4.3.0

https://www.algolia.com/getstarted#/step2

https://www.algolia.com/assets/application-39d4baab13ee1ebb6b4c9f7884fd193e.css

```css

@-webkit-keyframes pulse{0%{transform:scale(0);opacity:0}8%{transform:scale(0);opacity:0}15%{transform:scale(0.1);opacity:1}30%{transform:scale(0.5);opacity:1}100%{opacity:0;transform:scale(1)}}
```


```codes
{{ hit }}

<li class="results">
  {{ hit.name }}
</li>

<li class="results">
  {{{ hit._highlightResult.name.value }}}
</li>

<li class="results">
  <img src="https://image.tmdb.org/t/p/w154/{{ hit.image_path }}" />
  <h3>{{{ hit._highlightResult.name.value }}}</h3>
  {{ hit.alternative_name }}
</li>

```

https://highlightjs.org/

https://www.algolia.com/getstarted#/final

![image](https://user-images.githubusercontent.com/18028768/31304081-89b62c8a-ab4c-11e7-855f-d975254149f5.png)




