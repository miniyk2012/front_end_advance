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
    居中样式: text-align: center;
    行间距: line-height: 1.5em;
    <del>: 删除线
    <ins>: 下划线
    而不应该使用css的text-decoration


font-family: Verdana, 'Times New Roman', Times, serif;
安全的字体: https://web.mit.edu/jmorzins/www/fonts.html

font-style——设置字体风格（也就是正常显示还是斜着显示）
    normal - 文本正常显示
    italic - 文本斜体显示
    oblique - 文本倾斜显示
    通常情况下，italic 和 oblique 文本在 web 浏览器中看上去完全一样

font-weight: 字的粗细,不是大小哟 
font-weight: normal;
font-weight: bold;
/* 相对于父级元素 */
font-weight: lighter;
font-weight: bolder;
/* 字重的精细控制 */
font-weight: 100;
font-weight: 200;
font-weight: 300;
font-weight: 400;
font-weight: 500;
font-weight: 600;
font-weight: 700;
font-weight: 800;
font-weight: 900; 

Colors:
Hexadecimal colors: background-color: #0000ff;
RGB colors: color: rgb(165, 152, 177);
Predefined/Cross-browser color names: https://developer.mozilla.org/en-US/docs/Web/CSS/color_value
RGBA colors: color: rgba(165, 152, 177, 0.788);


background-image: url("Dachshund_brown_puppy.jpg"); 背景图片
background-size: contain;  北京图片的大小显示
border-radius: 10px; 圆角


Flexbox教程:
