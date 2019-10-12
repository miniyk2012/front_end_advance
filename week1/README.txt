Block elements:
    <p>, <ul>, <ol>, <h1>, <article>, <section>, <blockquote>
  
Inline elements:
    <a>, <em>, <strong>, <span>

Attribute selectors:
    [attr], [attr=val], [attr~=val] 请看test4.html

CSS Specificity: test6.html
    a {
        color: blue !important;
    }
    !important > inline style > id > class > tag

box model: test7.html


outside display: test9.html
    display: inline: 只占据内容所需区域,无width和height
    display: inline-block: 类似inline, 但可以有width和height
    display: block: 总是占据整行
    display: none: 不显示, 不占据width和height

Z-index: test10.html