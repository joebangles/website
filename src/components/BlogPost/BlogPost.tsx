import "./BlogPost.css"

function BlogPost() {

    return (
        <div className="post-container">
            <div className="post-header">
                <div className="post-title">
                    This is the title of this post
                </div>
                <div className="post-header-date">
                    2026-01-01
                </div>
            </div>
            <hr />
            <div>
                This is the content of the post, it's sort of long and really it's a preview of this article because the post is pretty long so we can only show the preview.
            </div>
        </div>
    )
}

export default BlogPost
