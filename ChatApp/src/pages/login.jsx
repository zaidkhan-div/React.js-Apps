import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useState } from "react"
import { toast } from "react-toastify"
import { addUserToCurrentUser } from "@/features/ChatSlice"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"

const Login = () => {
    const [inputValue, setInputValue] = useState("")
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleChange = () => {
        if (!inputValue.trim()) {
            toast.error('Enter your name.');
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
        <div className="w-full h-[100vh] flex items-center justify-center">
            <Card className="w-full max-w-sm border-2 border-blue-500">
                <CardHeader>
                    <CardTitle>Login to your account</CardTitle>
                    <CardDescription>
                        Enter your name below to login to your account
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <form>
                        <div className="flex flex-col gap-6">
                            <div className="grid gap-2">
                                <Label htmlFor="name" className='text-blue-500'>Name</Label>
                                <Input
                                    id="name"
                                    type="text"
                                    placeholder="Enter your name"
                                    required
                                    value={inputValue}
                                    onChange={(e) => setInputValue(e.target.value)}
                                    className='border-blue-500 border-2 text-blue-500'
                                />
                            </div>
                        </div>
                    </form>
                </CardContent>
                <CardFooter className="flex-col gap-2">
                    <Button type="submit" variant='outline' className="w-full cursor-pointer border-2 border-blue-500 text-blue-500"
                        onClick={handleChange}
                    >
                        Login
                    </Button>
                </CardFooter>
            </Card>
        </div>
    )
}
export default Login