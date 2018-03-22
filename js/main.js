//writeCode函数功能：把代码写在左边的页面中
function writeCode(prefix,code,fn){ //prefix代表之前的代码，code代表要加进去的代码
    let domCode = document.querySelector('#code')  
    domCode.innerHTML = prefix || ''   //首先把之前的代码写到#code里
    let n = 0
    let id = setInterval(() => {
        n += 1
        domCode.innerHTML = Prism.highlight(prefix + code.substring(0, n), Prism.languages.css)
        styleTag.innerHTML = prefix + code.substring(0, n)
        domCode.scrollTop = domCode.scrollHeight //保证页面内容一直在最底部
        if (n >= code.length) {
            window.clearInterval(id)
            fn&&fn.call()
        }
    }, 10)
}
//这个函数是创建右边的纸张
function createPaper(fn){
    var paper = document.createElement('div')
    paper.id = 'paper'
    var content = document.createElement('pre') //这里面要写Markdown,所以用<pre>
    content.className = 'content'
    paper.appendChild(content)
    document.body.appendChild(paper)
    fn&&fn.call()
}
//这个函数是在右边的纸上写markdown
function writeMarkdown(md,fn){
    let domPaper = document.querySelector('#paper>.content')
    let n = 0
    let id = setInterval(() => {
        n += 1
        domPaper.innerHTML = md.substring(0, n)
        domPaper.scrollTop = domPaper.scrollHeight //保证页面内容一直在最底部
        if (n >= md.length) {
            window.clearInterval(id)
            fn&&fn.call()
        }
    }, 10)

}
//这个函数是把markdown转化成html
function convertMarkdownToHtml(fn){
    var div = document.createElement('div')  
    div.className = 'html markdown-body'
    div.innerHTML = marked(md)
    let markdownContainer = document.querySelector('#paper > .content')
    markdownContainer.replaceWith(div)
    fn && fn.call()
  }
var css1 = `/*面试官您好，我叫王婷
*我将以动画的形式来介绍我自己

*只用文字介绍太单调了
*我就用代码来介绍吧

*首先准备一些样式
*/
*{transition:all 1s}
html{
    background:#f2f2f2;
    font-size:16px;
}
#code{
    box-shadow: 0px 0px 10px 1px rgba(0,0,0,0.75);
    padding:16px;
    margin:5px;
}
/*我需要一点代码高亮*/
.token.comment{
    color: slategray;
}
.token.property{
    color: #905;
}
.token.selector{
    color: #690;
}
/*再旋转一下*/
#code{
    animation: rotate(360deg)
}
/*不玩了，我来介绍一下我自己吧*/
/*首先我需要一张白纸*/
#code{
    position:fixed;
    left:0;
    width:50%;
    height:100%;
}
#paper{
    position:fixed;
    right:0;
    width:50%;
    height:100%;
    display:flex;
    justify-content:center;
    align-items:center;
    padding:16px;
}
#paper > .content{
    box-shadow: 0px 0px 21px 2px rgba(0,0,0,0.75);
    background:white;
    width:100%;
    height:100%;
}
`
var css2 = `
/* 接下来用一个优秀的库 marked.js
* 把 Markdown 变成 HTML
*/
`
var md = `
# 自我介绍
我叫 XXX
XXX 学校毕业
自学前端半年
希望应聘前端开发岗位

# 技能介绍
熟悉 JavaScript CSS

# 项目介绍
1. XXX 轮播
2. XXX 简历
3. XXX 画板

# 联系方式
- QQ xxxxxxxx
- Email xxxxxxxx
- 手机 xxxxxxx
`
let css3 = `
/*
 * 这就是我的会动的简历
 * 谢谢观看
 */
`
writeCode('',css1,()=>{
    createPaper(()=>{
        writeMarkdown(md,()=>{
            writeCode(css1,css2,()=>{
                convertMarkdownToHtml(()=>{
                   writeCode(css1+css2,css3,()=>{})
                })
            })
        })

    })
}) //踩的坑：不要把调用函数写在赋值前面！！！！





