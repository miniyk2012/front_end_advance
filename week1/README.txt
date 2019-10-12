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
    有重叠部分的元素间在z轴上的显示顺序
    z-index: val; val大的盖住val小的

Absolute vs Relative Units(单位): test11.html
    绝对单位 与屏幕大小无关:
        px
        in
        mm
        cm
    相对单位 与屏幕大小有关:
        %
        em: A unit equivalent to the current font size - if 12px font, 2em would be 24px
        vw: units of viewport width (the browser’s rendering space)
        vh:
页面排版: test12.html

