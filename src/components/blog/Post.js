import moment from 'moment';
const Post = ({ post, removePostById }) => {
    return ( 
        <div className="post">
            <h2>{post.title}</h2>
            <p>{moment(post.createdAt).format("MMMM D, YYYY")}</p>
            <p>{post.category}</p>
            <p>{post.content}</p>
            <button className="remove-post" id={post.id} onClick={() => removePostById(post.id)}> Remove </button>
        </div>
     );
}
 
export default Post;