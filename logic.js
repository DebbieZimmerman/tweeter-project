
const Tweeter = function () {
    const posts = [
        {
            text: "First post!",
            id: "p1",
            comments: [
                { id: "c1", text: "First comment on first post!" },
                { id: "c2", text: "Second comment on first post!!" },
                { id: "c3", text: "Third comment on first post!!!" }
            ]
        },
        {
            text: "Aw man, I wanted to be first",
            id: "p2",
            comments: [
                { id: "c4", text: "Don't wory second poster, you'll be first one day." },
                { id: "c5", text: "Yeah, believe in yourself!" },
                { id: "c6", text: "Haha second place what a joke." }
            ]
        }
    ]

    let postCount = function () {
        let count = 0
        for (let i of posts) {
            count ++
        }
        return count
    }

    let postIdCounter = postCount()

    const commentCount = function () {
        let count = 0
        for (let i of posts) {
            for (let x of i.comments) {
                count ++
            }
         } return count 

    }
    let commentIdCount = commentCount()

    const getPosts = function () {
        return posts
    }

    const addPost = function (textAdd) {
        postIdCounter ++
        let idText = 'p' + (postIdCounter)
        posts.push({text: textAdd , id: idText , comments: []})
    }

    const removePost = function (place) {
        let count = 0
        for (post of posts) {
            if (place == post.id) {
                posts.splice(count , 1)
            } else {
                count ++
            }
        } 
    }

    const addComment = function (textAdd, place) {
        commentIdCount ++
        commentId= "c" + commentIdCount
        for (post of posts) {
            if (place == post.id) {
                post.comments.push({id: commentId , text: textAdd})
            }
        }
       }

    const removeComment = function(p, c) {
        for (post of posts) {
            if (p == post.id) {
                count = 0
                for (comment of post.comments) {
                    if (c == comment.id) {
                        post.comments.splice(count, 1)
                    } else {
                        count ++
                    }
                }
            }
        }        
    }

    return { postIdCounter, 
            commentIdCount, 
            getPosts,
            addPost, 
            removePost, 
            addComment,
            removeComment}

}
