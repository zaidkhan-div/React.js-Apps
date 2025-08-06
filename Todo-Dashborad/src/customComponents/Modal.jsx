import React from 'react'
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

const Modal = () => {

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
                    <div className="grid gap-4">
                        <div className="grid gap-3">
                            <Label htmlFor="name-1">Name</Label>
                            <Input id="name-1" name="name" />
                        </div>
                        <div className="grid gap-3">
                            <Label htmlFor="username-1">Username</Label>
                            <Input id="username-1" name="username" />
                        </div>
                    </div>
                    <DialogFooter>
                        <DialogClose asChild>
                            <Button variant="outline">Cancel</Button>
                        </DialogClose>
                        <Button type="submit" className="bg-gradient-to-r from-blue-400 to-purple-500" >Add Todo</Button>
                    </DialogFooter>
                </DialogContent>
            </form>
        </Dialog>
    )
}

export default Modal
