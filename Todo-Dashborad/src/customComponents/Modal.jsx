import React, { useState } from 'react'
import { Plus } from "lucide-react";
import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { toast } from 'sonner';
import { useAddTodoMutation } from '../features/ApiSlice';
import { useSelector } from 'react-redux';


const Modal = () => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [priority, setPriority] = useState("high");
    const [dueDate, setDueDate] = useState("");
    const [estimatedHours, setEstimatedHours] = useState(0);

    const [addTOdo, { isSuccess, isError, isLoading }] = useAddTodoMutation();
    const todos = useSelector((state) => state.todo.todos);
    let randomId = todos.length + 1;

    const handleSubmit = async (e) => {
        // try {
        //     let obj = {
        //         id: randomId.toString(),
        //         title: title,
        //         description: description,
        //         priority: priority,
        //         dueDate: dueDate,
        //         estimatedHours: estimatedHours,
        //     }
        //     await addTOdo(obj);
        //     toast.success("Form submit!")
        // } catch (error) {
        //     toast(error.message);
        // } finally {
        //     setTitle("")
        //     setDescription("")
        //     setPriority("")
        //     setDueDate("")
        //     setEstimatedHours("")
        // }
        console.log(title, description, priority, dueDate, estimatedHours);
    }

    return (
        <Dialog>
            <form>
                <DialogTrigger asChild>
                    <Button
                        className="bg-gradient-to-r from-blue-400 to-purple-500 fixed bottom-6 right-[calc((100vw-1300px)/2)] 
                       rounded-full h-14 w-14 cursor-pointer shadow-lg z-50"
                        variant="default">
                        <Plus className="h-8 w-8 text-white" />
                    </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px]">
                    <DialogHeader>
                        <DialogTitle className="text-blue-500">Add Todo</DialogTitle>
                        <DialogDescription>
                            Quickly add a new task to stay organized and productive.
                        </DialogDescription>
                    </DialogHeader>
                    <div className="flex flex-col gap-5 w-full">
                        <div className="flex flex-col gap-3">
                            <Label htmlFor="title">Title</Label>
                            <Input
                                id="title"
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                                name="title"
                                placeholder="Title"
                            />
                        </div>
                        <div className="flex flex-col gap-3">
                            <Label htmlFor="description">Description</Label>
                            <Input
                                id="description"
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                                name="description"
                                placeholder="Description"
                            />
                        </div>
                        <div className="flex flex-col gap-3">
                            <Label htmlFor="priority">Priority</Label>
                            <Select
                                onChange={(e) => setPriority(e.target.value)}
                            >
                                <SelectTrigger className="w-[100%]">
                                    <SelectValue placeholder="Select a Priority" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectGroup>
                                        <SelectItem value="apple">High</SelectItem>
                                        <SelectItem value="banana">Medium</SelectItem>
                                        <SelectItem value="blueberry">Low</SelectItem>
                                    </SelectGroup>
                                </SelectContent>
                            </Select>
                        </div>
                        <div className="flex flex-col gap-3">
                            <Label htmlFor="dueDate">Due Date</Label>
                            <Input
                                type="date"
                                id="dueDate"
                                value={dueDate}
                                onChange={(e) => setDueDate(e.target.value)}
                                name="dueDate"
                            />
                        </div>
                        <div className="flex flex-col gap-3">
                            <Label htmlFor="estimatedHours">Estimated Hours</Label>
                            <Input
                                type="number"
                                id="estimatedHours"
                                value={estimatedHours}
                                onChange={(e) => setEstimatedHours(e.target.value)}
                                name="estimatedHours"
                            />
                        </div>
                    </div>
                    <DialogFooter>
                        <DialogClose asChild>
                            <Button variant="outline">Cancel</Button>
                        </DialogClose>
                        <Button onClick={handleSubmit} className="bg-gradient-to-r from-blue-400 to-purple-500 cursor-pointer" >Add Todo</Button>
                    </DialogFooter>
                </DialogContent>
            </form>
        </Dialog>
    )
}

export default Modal