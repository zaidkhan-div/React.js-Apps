import { Button } from "@/components/ui/button"
import {
    Card,
    CardAction,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

const Login = () => {
    return (
        <div className="w-full h-[100vh] flex items-center justify-center">
            <Card className="w-full max-w-sm border-2 border-blue-500">
                <CardHeader>
                    <CardTitle>Login to your account</CardTitle>
                    <CardDescription>
                        Enter your name below to login to your account
                    </CardDescription>
                    <CardAction>
                        <Button variant="link" className="cursor-pointer">Login Up</Button>
                    </CardAction>
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
                                    className='border-blue-500 border-2 text-blue-500'
                                />
                            </div>
                        </div>
                    </form>
                </CardContent>
                <CardFooter className="flex-col gap-2">
                    <Button type="submit" variant='outline' className="w-full cursor-pointer border-2 border-blue-500 text-blue-500">
                        Login
                    </Button>
                </CardFooter>
            </Card>
        </div>
    )
}
export default Login