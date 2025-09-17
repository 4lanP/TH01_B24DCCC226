import React, { useState } from 'react';

function P({content}){
    const [like, setLike] = useState(0);
    const [dislike, setDislike] = useState(0);
    return (
        <div style={{border: '1px solid #000', padding: '10px', margin: '10px 0'}}>
            <p>{content}</p>
            <button onClick={() => setLike(like + 1)}>Like {like}</button>
            <button onClick={() => setDislike(dislike + 1)}>Dislike {dislike}</button>
        </div>
    )
}
function Post() {
    return(
        <div>
            <h4>Bài viết</h4>
            <P content="Học React có khó không?" />
            <P content="Props và State là gì?" />
            <P content="Lập trình web có vui không?" />
        </div>
    )
}
export default Post;
