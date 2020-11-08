const Renderer = function (){
    renderPosts = function (posts) {
        $('#posts').empty()
        
        for (post of posts) {
            let postElement = $(`<div class="post post-text" data-id="${post.id}">${post.text}<button class="delete">x</button></div>`)
            $('#posts').append(postElement)
            $('#posts').append(`<div class="comments" data-id="comments${post.id}">Comments: <input type="text" class="input-comment" placeholder="comment"><button class="add-comment">submit</button></div>`)
            for (comment of post.comments) {
                let commentId = comment.id
                let commentText = comment.text
                let commentElement = $(`<div class="comment" data-id="${commentId}">${commentText}<button class="delete-comment">x</button></div>`) 
                $(`.comments[data-id="comments${post.id}"]`).append(commentElement)
            }
        }
       
    } 
      return {
        renderPosts
    }
}