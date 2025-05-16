import Link from 'next/link'

const BasicDetailsEdit = () => {
    return (
        <div className='px-5 py-3'>
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-4">
                <Link href="/profile/edit" className="mt-2 sm:mt-0 text-sm text-gray-500 hover:text-gray-700 flex items-center">
                    <svg className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                            d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                    </svg>
                    Go Back
                </Link>
                <h3 className="text-lg font-semibold text-black">Edit Basic Details</h3>
            </div>
            <div className="flex sm:flex-row items-start gap-4 sm:gap-6">
                <div className="w-[50%] pt-3">
                    <div className="rounded-full bg-gray-300 h-32 w-32 flex items-center justify-center">
                        <svg className="h-10 w-10 text-gray-500" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                        </svg>
                    </div>
                </div>
                <div className="w-[50%] pt-3">
                    <div className="flex flex-col gap-1">
                        <div className="mb-2">
                            <label className="block text-gray-500 text-base">Title</label>
                            <p className="text-gray-700 leading-tight">
                                Mr
                            </p>
                        </div>
                        <div className="mb-2">
                            <label className="block text-gray-500 text-base">Full Name</label>
                            <p className="text-gray-700 leading-tight">
                                John Smith
                            </p>
                        </div>
                        <div className="mb-2">
                            <label className="block text-gray-500 text-base">Email</label>
                            <p className="text-gray-700 leading-tight">
                                john@app.com
                            </p>
                        </div>

                    </div>
                </div>
            </div>

        </div>
    )
}

export default BasicDetailsEdit;