import { useState } from "react";
import { useGetSinglePostQuery, useGetPostsQuery, useNewPostMutation, useDeletePostMutation } from "../Features/ApiSlice";


// json-server 
const ApiCalling = () => {
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");
    const [deleteItem, setDeleteItem] = useState(null);
    const [singlePost, setSinglePost] = useState(null)
    const [postId, setPostId] = useState(null);

    const { data, isLoading, isSuccess, isError, error, } = useGetPostsQuery('');
    const { getPost } = useGetSinglePostQuery(postId);
    const [newPost] = useNewPostMutation();
    const [delePost] = useDeletePostMutation();

    console.log(data);


    if (isLoading) return console.log("Loading...");
    if (isSuccess) {
        console.log(data, "Data");
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const dataId = data.length + 1;
        if (title && body.trim()) {
            const addPost = {
                id: dataId.toString(),
                title: title,
                body: body
            }
            newPost(addPost);
            setTitle("");
            setBody("");
        }else{
            alert("Fill the Form")
        }

    }

    const handleDelete = (e) => {
        e.preventDefault();
        delePost(deleteItem);
        setDeleteItem("");
    }

    const handleSinglePost = (e) => {
        e.preventDefault();
        setPostId(singlePost);
        setSinglePost("");
    }
    return (
        <div style={{ width: "100%", border: "1px solid red", overflow: "hidden" }}>
            <div>
                <form onSubmit={handleSubmit}>
                    <input type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} />
                    <input type="text" placeholder="Body" value={body} onChange={(e) => setBody(e.target.value)} />
                    <button type="submit">Add</button>
                </form>
                <form onSubmit={handleDelete}>
                    <input type="text" value={deleteItem} onChange={(e) => setDeleteItem(e.target.value)} placeholder="DeletePost" />
                    <button style={{ background: "red", paddingInline: "15px", paddingTop: "3px", paddingBottom: "3px", border: "none", pointer: "cursor" }}>Delete</button>
                </form>
                <form onSubmit={handleSinglePost}>
                    <input type="text" value={singlePost} onChange={(e) => setSinglePost(e.target.value)} placeholder="SinglePost" />
                    <button style={{ background: "green", color: "white", paddingInline: "15px", paddingTop: "3px", paddingBottom: "3px", border: "none", pointer: "cursor" }}>Get single post</button>
                </form>
            </div>
            <div style={{ border: "1px solid green" }}>
                <h3>SinlePost</h3>
                <pre>{getPost ? getPost && JSON.stringify(getPost, null, 2) : "Get single post"}</pre>
            </div>
            <div style={{ border: "1px solid blue" }}>
                <h3>Data</h3>
                <pre>{JSON.stringify(data, null, 2)}</pre>
            </div>
        </div>
    )
}

export default ApiCalling
