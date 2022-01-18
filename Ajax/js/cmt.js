function getCmt() {
    $.ajax({
        type: "GET",
        url: "http://www.liulongbin.top:3006/api/cmtlist",
        success: function(res) {
            if (res.status !== 200) return alert('获取用户评论失败!')
            let row = []
            $.each(res.data, function(i, item) {
                row.push(`<li class="list-group-item">
                    <span class="badge" style="background-color: cornflowerblue;">评论时间:${item.time}</span>
                    <span class="badge">评论人:${item.username}</span> ${item.content}</li>`)
            });
            $('#comment-list').empty().append(row.join(''))
        }
    });
}
getCmt()
$(function() {
    $('#formaddcmt').on('submit', function(e) {
        e.preventDefault()
        let data = $(this).serialize()
        $.post("http://www.liulongbin.top:3006/api/addcmt", data,
            function(res) {
                if (res.status !== 201) return alert('评论发表失败!')
                getCmt()
                $('#formaddcmt')[0].reset()
            }
        );
    })

})