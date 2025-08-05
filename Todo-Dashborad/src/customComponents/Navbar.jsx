const Navbar = () => {
    return (
        <div className='border-b border-gray-300 py-3'>
            <div className='max-w-[1300px]  w-full mx-auto flex items-center justify-between'>
                <div className='flex-1'>
                    <h1 className='text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent'>TaskMaster Pro</h1>
                </div>
                <div className="border border-gray-400 rounded-full flex-1 px-4 py-2 bg-white shadow-sm">
                    <input
                        type="text"
                        placeholder="Search tasks, projects or tags.."
                        className="outline-none w-full bg-transparent text-sm text-gray-700"
                    />
                </div>

                <div className='flex flex-1 items-center gap-0.5 justify-end'>
                    <div className='bg-gradient-to-t from-blue-300 to-purple-600 text-base text-white px-2 py-1 font-bold rounded-full flex items-center justify-center'>JD</div>
                    <p>Jhon Doe</p>
                </div>
            </div>
        </div>
    )
}

export default Navbar
