import React from 'react'
import LeftSidebar from '../customComponents/LeftSidebar'
import Content from '../customComponents/Content'
import RightSidebar from '../customComponents/RightSidebar'

const TodoPage = () => {
    return (
        <div className='h-screen max-w-[1300px] w-full mx-auto flex justify-center items-start '>
            <div className="h-full flex-1">
                <LeftSidebar />
            </div>
            <div className="h-full overflow-y-auto flex-2">
                <Content />
            </div>
            <div className="h-full flex-1">
                <RightSidebar />
            </div>
        </div>
    )
}

export default TodoPage
