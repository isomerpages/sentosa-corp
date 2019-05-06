---
layout: leftnav-page-content
title: Guide - Markdown
permalink: /guide/md/
breadcrumb: Guide-MD
collection_name: guide
---
### Headers
`` # Level 1 Header ``
# Level 1 Header
`` ## Level 2 ``
## Level 2
### Level 3
#### Level 4
##### Level 5
###### Level 6
####### Level 7 does not exist

---
### Styling Texts

**You can bold text**

```
 **with 2 asterisks on each side of the text** 
 ```

*You can italicize them*

```
 *with a single asterisk on each side of the text* 
 ```

~~You can strikethrough text as well~~

```
 ~~with 2 tilde on each side of the text~~ 
 ```

> You can quote as well
>
> It works for multiple lines too, but include a blank line

```
> You can quote as well
>
> It works for multiple lines too, but include a blank line
```

- List Item 1
- List Item 2
    - Sub List Item 1

```
Unordered lists can be made with - or *
You can create sublists by indenting 

- List Item 1
* List Item 2
    - Sub List Item 1

```

1. Ordered Item 1
    1. Sub Ordered Item 1
2. Ordered Item 2
    - Sub List Item 1

```
The same goes for ordered lists, and you can mix it with unordered lists too!

1. Ordered Item 1
    1. Sub Ordered Item 1
2. Ordered Item 2
    - Sub List Item 1
```

Milk
: It is from cows.

```
Definition
: You can define it like this
```

---

### Links & Images

You add links like [this](google.com)

![Image](/images/sentosa-banner.jpg)


```
You add links like [this](google.com)

![Image](/images/sentosa-banner.jpg)
```
---

### Tables

| Left aligned column | Centered column | Right aligned column |
|---------------------|:-----------------:|----------------------:|
|**You can bold text**|*You can italicize them*|~~You can strikethrough text as well~~ |

```
| Left aligned column | Centered column | Right aligned column |
|---------------------|:-----------------:|----------------------:|
|**You can bold text**|*You can italicize them*|~~You can strikethrough text as well~~ |

It is recommended to use https://www.tablesgenerator.com/markdown_tables to make a table!
```