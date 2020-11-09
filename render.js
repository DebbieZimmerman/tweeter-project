const Renderer = function (){
    renderPosts = function (posts) {
        $('#posts').empty()
        
        for (post of posts) {
            let postElement = $(`<div class="post post-text" data-id="${post.id}">${post.text}<i class="far fa-trash-alt delete"></i></div>`)
            $('#posts').append(postElement)
            $('#posts').append(`<div class="comments" data-id="comments${post.id}"></div>`)
            for (comment of post.comments) {
                let commentId = comment.id
                let commentText = comment.text
                let commentElement = $(`<div class="comment" data-id="${commentId}">${commentText}<i class="far fa-trash-alt delete-comment"></i></div>`) 
                $(`.comments[data-id="comments${post.id}"]`).append(commentElement)
            }
            $(`.comments[data-id="comments${post.id}"]`).append(`<input type="text" class="input-comment" placeholder="Have something to add?"><i class="fas fa-plus-circle add-comments"></i>`)
        }
       
    } 
      return {
        renderPosts
    }
}