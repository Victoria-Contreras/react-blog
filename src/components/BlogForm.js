import { React, useState } from 'react';


const BlogForm = () => {
    const [category, setCategory] = useState('')
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')

    const submitForm = async (event) => {
        event.preventDefault(); 

        await fetch('/blog/new-post', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                category: category,
                title: title,
                content: content
            }),
        })
            .then((response) => response.json())
            .then((data) => {
                console.log('Success:', data);
                
                setCategory('')
                setTitle('')
                setContent('')
            })
            .catch((error) =>
                console.log("Unable to add post", error)
            )
    }

    return ( 
        <form id="new-post" className="blog-form" onSubmit={(submitForm)}>
            <label>Title</label><br />
            <input onChange={(event) => setTitle(event.target.value)} type="text" id="title" name="title" /><br/>
            <label>Category</label><br />
            <input onChange={(event) => setCategory(event.target.value)} type="text" id="category" name="category" /><br/>
            <label>Content</label><br />
            <textarea onChange={(event) => setContent(event.target.value)} type="text" rows="15" id="content" name="content" /><br />
            <button type="submit" className="blog-submit">Submit</button>
        </form>
     );
}
 
export default BlogForm;