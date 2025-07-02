import { Button, Label, TextInput } from "flowbite-react";
import { useDispatch, useSelector } from "react-redux";
import { addUserToCurrentUser } from './../features/ChatAlice'
import { useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const dispatch = useDispatch();
    const [inputValue, setInputValue] = useState('')
    const navigate = useNavigate();

    const handleChange = () => {
        if (!inputValue.trim()) {
            toast.error('Enter your name');
            return;
        }
        try {
            dispatch(addUserToCurrentUser(inputValue))
            console.log(inputValue, " User Name");
            navigate('/')
            toast.success(`Welcome ${inputValue}`)
        } catch (error) {
            toast.error(error.message)
        }
        finally {
            setInputValue('')
        }

    }

    return (
        <div className="flex items-center justify-center min-h-screen">
            <form className="flex w-[500px] h-[200px] flex-col gap-4 border-2 border-indigo-500 rounded-3xl p-5">
                <div>
                    <div className="mb-2 block">
                        <Label htmlFor="email1" color>Your Name</Label>
                    </div>
                    <TextInput id="text" type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)} placeholder="Enter your name" className="bg-transparent" />
                </div>
                <Button outline color='default' className="cursor-pointer focus:outline-none" onClick={handleChange}>Submit</Button>
            </form>
        </div>
    )
}

export default Login