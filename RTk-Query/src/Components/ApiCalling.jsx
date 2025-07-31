import { useEffect, useState } from "react";
import { useGetSinglePostQuery, useGetPostsQuery, useNewPostMutation, useDeletePostMutation, useEditPostMutation } from "../Features/ApiSlice";


// json-server 
const ApiCalling = () => {
    // const [title, setTitle] = useState("");
    // const [body, setBody] = useState("");
    // const [deleteItem, setDeleteItem] = useState("");
    // const [singlePost, setSinglePost] = useState("")
    // const [postId, setPostId] = useState("");
    // const [ediTitle, setEditTitle] = useState("");
    // const [editBody, setEditBody] = useState("");
    // New and Better Approach

    const [newPost, setNewPost] = useState({
        title: "",
        body: ""
    });
    const [editPostData, setEditPostData] = useState({
        id: "",
        title: "",
        body: ""
    });
    const [deleteItem, setDeleteItem] = useState("");
    const [postId, setPostId] = useState("");
    const [editId, setEditId] = useState("");
    const [singlePost, setSinglePost] = useState("");


    const { data, isLoading, isSuccess, isError, error, } = useGetPostsQuery();
    const { getPost } = useGetSinglePostQuery(postId);
    const [addPost] = useNewPostMutation();
    const [delePost, deleteResult] = useDeletePostMutation();
    const [editPost, { isLoading: isEditLoading, isSuccess: isEditSucess }] = useEditPostMutation();



    if (isLoading) return console.log("Loading...");
    if (isSuccess) {
        console.log(data, "Data");
    }

    const handleSubmit = (e) => {
        const dataId = data.length + 1;
        e.preventDefault();
        if (newPost.title.trim() && newPost.body.trim()) {
            const obj = {
                id: dataId.toString(),
                title: newPost.title,
                body: newPost.body
            }
            addPost(obj);
            setNewPost({ title: "", body: "" })
        } else {
            alert("Fill the Form")
        }

    }

    const handleDelete = async (e) => {
        e.preventDefault();
        if (deleteResult.isError) throw new Error("The id is not found!")
        await delePost(deleteItem);
        setDeleteItem("");
    }

    const handleSinglePost = (e) => {
        e.preventDefault();
        setPostId(singlePost);
        setSinglePost("");
    }

    const handleEdit = (e) => {
        e.preventDefault();
        const id = editPostData.id;
        const editObj = {
            title: editPostData.title,
            body: editPostData.body,
        }
        editPost({ body: editObj, id });
        setEditPostData({ id: "", title: "", body: "" });
    }



    return (
        <div style={{ width: "100%", border: "1px solid red", overflow: "hidden" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                <form onSubmit={handleSubmit}>
                    <input type="text" placeholder="Title" value={newPost.title} onChange={(e) => setNewPost({ ...newPost, title: e.target.value })} />
                    <input type="text" placeholder="Body" value={newPost.body} onChange={(e) => setNewPost({ ...newPost, body: e.target.value })} />
                    <button type="submit">Add</button>
                </form>
                <form onSubmit={handleEdit}>
                    <input type="text" placeholder="Edit Id" value={editPostData.id} onChange={(e) => setEditPostData({ ...editPostData, id: e.target.value })} />
                    <input type="text" placeholder="Edit Title" value={editPostData.title} onChange={(e) => setEditPostData({ ...editPostData, title: e.target.value })} />
                    <input type="text" placeholder="Edit Body" value={editPostData.body} onChange={(e) => setEditPostData({ ...editPostData, body: e.target.value })} />
                    <button type="submit">edit</button>
                    {isEditSucess ? <p style={{ color: "red", fontSize: "14px" }}>Edited Successfully!</p> : ""}
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
                <pre>{getPost ? JSON.stringify(getPost, null, 2) : "Get single post"}</pre>
            </div>
            <div style={{ border: "1px solid blue" }}>
                <h3>Data</h3>
                <pre>{JSON.stringify(data, null, 2)}</pre>
            </div>
        </div>
    )
}

export default ApiCalling
