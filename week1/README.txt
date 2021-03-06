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
    container:
        row（默认值）：主轴为水平方向
        column：主轴为垂直方向
        justify-content属性定义了项目在主轴上的对齐方式
        align-items属性定义项目在交叉轴上如何对齐
    子元素:
        order: 顺序

Grid教程: http://www.ruanyifeng.com/blog/2019/03/grid-layout-tutorial.html
Flex 布局是轴线布局，只能指定"项目"针对轴线的位置，可以看作是一维布局。Grid 布局则是将容器划分成"行"和"列"，产生单元格，然后指定"项目所在"的单元格，可以看作是二维布局.

结论: grid和flex需要互相配合使用
[译] 选择 Grid 还是 Flex: https://juejin.im/post/5c7ce781e51d4514913c5bc4
grid与flex的战役: https://hackernoon.com/the-ultimate-css-battle-grid-vs-flexbox-d40da0449faf
grid是否可以取代flex: https://css-tricks.com/css-grid-replace-flexbox/

    grid-auto-columns属性和grid-auto-rows属性用来设置: test10.html, test11.html
    浏览器自动创建的多余网格的列宽和行高。它们的写法与grid-template-columns和grid-template-rows完全相同。
    如果不指定这两个属性，浏览器完全根据单元格内容的大小，决定新增网格的列宽和行高。
    常用来显示无限多的评论列表.


responsive layout:
设计原则:
    最小屏幕是基础布局
    然后随着viewport增大, 开始使用media query

grid中justify-content, justify-items的区别
justify-content: 设置在container上, 只有当column未充满容器时有用(比如用1fr时就没有空余空间, 则该属性无效果), 用来决定column在容器中的布局
justify-items: 决定grid的内容在某一列内部的布局, 设置在container上
justify-self: 覆盖justify-items, 用在单独的item上

https://stackoverflow.com/questions/48535585/the-difference-between-justify-self-justify-items-and-justify-content-in-css-gr

优达学城的design systems:
官网: https://veritas.udacity.design
介绍性文字: https://www.designsystems.io/2019/06/03/udacitys-design-system-with-jennie-yip/

