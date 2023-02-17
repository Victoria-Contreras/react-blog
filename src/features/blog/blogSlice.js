import { createSlice } from '@reduxjs/toolkit'

export const blogSlice = createSlice({
    name: 'blogs',
    initialState: {
        blogs: []
    },
    reducers: {
        setBlogs: (state, action) => {
            state.blogs = action.payload;
        },
        addBlog: (state, action) => {
            state.blogs = [...state.blogs, action.payload]
        },
        deleteBlogById: (state, action) => {
            state.blogs = state.blogs.filter(contact => contact.id !== action.payload)
        }
    }
})

export const { setBlogs, addBlog, deleteBlogById } = blogSlice.actions;

export default blogSlice.reducer