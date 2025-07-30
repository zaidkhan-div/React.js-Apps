import { useState } from "react";
import { useGetPostsQuery, useNewPostMutation, useDeletePostMutation } from "../Features/ApiSlice";

// json-server 
const ApiCalling = () => {
    const { data, isLoading, isSuccess, isError, error, } = useGetPostsQuery('');
    const [newPost] = useNewPostMutation();
    const [delePost] = useDeletePostMutation();

    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");
    const [deleteItem, setDeleteItem] = useState("");

    if (isLoading) return console.log("Loading...");
    if (isSuccess) {
        console.log(data, "Data");
    }

    const dataId = data.length;
    const handleSubmit = (e) => {
        e.preventDefault();
        const addPost = {
            id: dataId + 1,
            title: title,
            body: body
        }
        newPost(addPost);
        setTitle("");
        setBody("");
    }

    const handleDelete = (e) => {
        e.preventDefault();
        delePost(deleteItem)
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
            </div>
            <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>
    )
}

export default ApiCalling
