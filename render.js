const Renderer = function (){
    renderPosts = function (posts) {
        $('#posts').empty()
        
        for (post of posts) {
            let postElement = $(`<div class="post" data-id="${post.id}">${post.text}</div>`)
            $('#posts').append(postElement)
            $('#posts').append(`<div class="comments" data-id="comments${post.id}">Comments:</div>`)
            for (comment of post.comments) {
                let commentId = comment.id
                let commentText = comment.text
                let commentElement = $(`<div class="comment" data-id="${commentId}">${commentText}</div>`) 
                $(`.comments[data-id="comments${post.id}"]`).append(commentElement)
            }
        }
       
    } 
      return {
        renderPosts
    }
}




// const posts = [
    //     {name: "Debbie", text: "You're the best!"},
    //     {name: "Aliza", text: "No, you're the best!"}
    // ]
    
    // const render = function () {
    //     $('#posts-display').empty()
    
    //     for (let post of posts) {
    //         const postElement = $(`<div>${post.name}: ${post.text}</div>`)
    //         $('#posts-display').append(postElement)
    //     }
    // }
    
    // $("button").click(function () {
    //     const n = ($("#inputname").val())
    //     const t = ($("#inputtext").val())
    //     posts.push({name: n, text: t}) 
    //     render()
    // })
    
    // render()