import React, { useState } from 'react'
import LeftSidebar from '../customComponents/LeftSidebar'
import Content from '../customComponents/Content'
import RightSidebar from '../customComponents/RightSidebar'
import Navbar from '../customComponents/Navbar'

const TodoPage = () => {

    const [showLeftSidebar, setShowLeftSidebar] = useState(false);
    const [showRightSidebar, setShowRightSidebar] = useState(false);
    const [activeFilter, setActiveFilter] = useState("All Tasks");

    return (
        <>
            <Navbar
                onLeftToggle={() => {
                    setShowLeftSidebar(true);
                }}
                onRightToggle={() => {
                    setShowRightSidebar(true);
                }} />

            <div className='h-[92vh] max-w-[1300px] w-full mx-auto flex justify-center items-start '>
                <div className={`h-full transition-all ${showLeftSidebar ? 'block' : 'hidden'} md:block flex-1 z-50 `}>
                    <LeftSidebar
                        activeFilter={activeFilter}
                        setActiveFilter={setActiveFilter}
                        isVisible={showLeftSidebar}
                        onClose={() => setShowLeftSidebar(false)}
                    />
                </div>
                <div className={`h-full ${showLeftSidebar || showRightSidebar == true ? "hidden" : "block"} bg-[#f1f1fb] removeScroll overflow-y-auto  flex-2`}>
                    <Content
                        activeFilter={activeFilter}
                    />
                </div>
                <div className={`h-full ${showRightSidebar ? 'block' : 'hidden'} md:block flex-1 z-50`}>
                    <RightSidebar isVisible={showRightSidebar}
                        activeFilter={activeFilter}
                        onClose={() => setShowRightSidebar(false)}
                    />
                </div>
            </div>
        </>
    )
}

export default TodoPage
