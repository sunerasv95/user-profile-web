import Link from "next/link";

const AdditionalDetails = () => {
    return (
        <div className="p-5">
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-4">
                <h3 className="text-lg font-semibold text-black">Spouse Details</h3>
                <Link href="/profile/edit" className="mt-2 sm:mt-0 text-sm text-gray-500 hover:text-gray-700 flex items-center">
                    <svg className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                            d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                    </svg>
                    Edit profile
                </Link>
            </div>

            <div className="flex sm:flex-row items-start gap-4 sm:gap-6">
                <div className="w-[50%] pt-3">
                    <h4 className="text-bade font-semibold text-black mb-3">Personal Details</h4>
                    <div className="flex flex-col gap-1">
                        <div className="mb-2">
                            <label className="block text-gray-500 text-base">Title</label>
                            <p className="text-gray-700 leading-tight">
                                Mrs
                            </p>
                        </div>
                        <div className="mb-2">
                            <label className="block text-gray-500 text-base">Full Name</label>
                            <p className="text-gray-700 leading-tight">
                                Manola Smith
                            </p>
                        </div>
                        <div className="mb-2">
                            <label className="block text-gray-500 text-base">Date of Birth</label>
                            <p className="text-gray-700 leading-tight">
                                13th March 1990
                            </p>
                        </div>

                    </div>
                </div>
                <div className="w-[50%] pt-3">
                    <h4 className="text-bade font-semibold text-black mb-3">Contact Information</h4>
                    <div className="flex flex-col gap-1">
                        <div className="mb-2">
                            <label className="block text-gray-500 text-base">Email</label>
                            <p className="text-gray-700 leading-tight">
                                manola@app.com
                            </p>
                        </div>
                        <div className="mb-2">
                            <label className="block text-gray-500 text-base">Mobile</label>
                            <p className="text-gray-700 leading-tight">
                                +44 223 223445
                            </p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default AdditionalDetails;