$(function() {
    $.get("http://www.liulongbin.top:3006/api/News",
            function(res) {
                if (res.status !== 200) return alert('获取新闻列表失败!')
                for (let i = 0; i < res.data.length; i += 1) {
                    res.data[i].tags = res.data[i].tags.split(',')
                }
                template.defaults.imports.setTime = function(dtstr) {
                    var date = new Date(dtstr)
                    let year = date.getFullYear()
                    let month = date.getMonth() + 1
                    month = month < 10 ? '0' + month : month
                    let day = date.getDate()
                    day = day < 10 ? '0' + day : day
                    let hour = date.getHours()
                    hour = hour < 10 ? '0' + hour : hour
                    let minutes = date.getMinutes()
                    minutes = minutes < 10 ? '0' + minutes : minutes
                    let seconds = date.getSeconds()
                    seconds = seconds < 10 ? '0' + seconds : seconds
                    arr = ['日', '一', '二', '三', '四', '五', '六']
                    return `${year}-${month}-${day} ${hour}:${minutes}:${seconds}`
                }
                var htmlstr = template('hi', res)
                $('#news-14').html(htmlstr)
            }
        )
        // 格式化时间函数

})