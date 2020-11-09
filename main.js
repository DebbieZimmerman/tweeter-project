const tweeter = Tweeter()
const renderer = Renderer()

renderer.renderPosts(tweeter.getPosts())

const addingPost = function () {
    $('.post').append(`<input-type="button" class="delete">`)
}


$('#container').on('click', '#post', function () {
    text = $(input).val()
    tweeter.addPost(text)
    $(input).val('')
    renderer.renderPosts(tweeter.getPosts())

})

$('#posts').on('click', '.delete', function() {
    let postId = $(this).closest('.post').attr('data-id')
    tweeter.removePost(postId)
    renderer.renderPosts(tweeter.getPosts())
})

$('#posts').on('click', '.delete-comment', function () {
    let c = $(this).closest('.comment').attr('data-id')
    let p = $(this).closest('.comments').attr('data-id')
    p = p.slice(8)
    tweeter.removeComment(p, c)
    renderer.renderPosts(tweeter.getPosts())
})

$('#posts').on('click', '.add-comments', function () {
    text = $(this).closest('.comments').find('.input-comment').val()
    let p = $(this).closest('.comments').attr('data-id')
    p = p.slice(8)
    tweeter.addComment(text, p)
    renderer.renderPosts(tweeter.getPosts())
})
