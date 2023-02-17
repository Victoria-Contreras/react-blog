
import { React, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setBlogs, addBlog, deleteBlogById } from '../features/blog/blogSlice';
import Post from './Post'

const BlogPosts = () => {
    const blogs = useSelector((state) => state.blogs.blogs);
    const dispatch = useDispatch();

    const fetchBlogsToState = async () => {
        await fetch('/blog/all-posts')
            .then(response => response.json())
            .then(data => dispatch(setBlogs(data)));
    }

    const removePostById = async (id) => {
        await fetch('blog/delete-post', {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ id }),
        })
            .then((response) => response.json())
            .then((data) => {
                console.log('Success:', data);
                dispatch(deleteBlogById(id))
            })
    }

    useEffect(() => {
        fetchBlogsToState();
    }, [])

    return ( 
    <div>
        {
            blogs.map(blog => 
            <Post post={blog} key={blog.id} removePostById={removePostById} fetchBlogsToState={fetchBlogsToState} />
            )
        }   
    </div>
    );
}
 
export default BlogPosts;