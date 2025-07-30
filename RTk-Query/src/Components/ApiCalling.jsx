import { useState } from "react";
import { useGetPostsQuery, useNewPostMutation } from "../Features/ApiSlice";

// json-server 
const ApiCalling = () => {
    const { data, isLoading, isSuccess, isError, error, } = useGetPostsQuery('');
    const { newPost } = useNewPostMutation();

    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");
    if (isLoading) return console.log("Loading...");

    if (isSuccess) {
        console.log(data, "Data");
    }

    console.log(title, body);

    const handleSubmit = (e) => {
        e.preventdefault();
        const addPost = {
            id: Math.random(),
            title: title,
            body: body
        }
        newPost(addPost);
    }

    return (
        <div style={{ width: "100%", border: "1px solid red", overflow: "hidden" }}>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} />
                <input type="text" placeholder="Body" value={body} onChange={(e) => setBody(e.target.value)} />
                <button type="submit">Add</button>
            </form>
            <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>
    )
}

export default ApiCalling
