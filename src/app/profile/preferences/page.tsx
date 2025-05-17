'use client'

import HeadingWithOptionalButton from "@/app/components/navigation/heading-with-opt-button";

export default function PreferencesPage() {

    const preferences = {
        tvShows: ['Breaking Bad', 'Stranger Things', 'The Office'],
        musicGenres: ['Jazz', 'Rock', 'Indie'],
        hobbies: ['Hiking', 'Painting', 'Gaming'],
    }

    const renderTags = (items: string[]) => (
        <div className="flex flex-wrap gap-2">
            {items.map((item, i) => (
                <span key={i} className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full">
                    {item}
                </span>
            ))}
        </div>
    )

    const { tvShows, musicGenres, hobbies } = preferences;

    return (
        <div className="p-5">
            {/* <div className="flex justify-between items-center mb-6">
                <h3 className="text-xl font-semibold text-black">Personal Preferences</h3>
                <Link href="/profile/edit" className="mt-2 sm:mt-0 text-sm text-gray-500 hover:text-gray-700 flex items-center">
                    <svg className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                            d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                    </svg>
                    Edit Preferences
                </Link>
            </div> */}

            <HeadingWithOptionalButton
                title="Personal Preferences"
                editHref="/profile/preferences/edit"
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white shadow rounded-lg p-6">
                    <h4 className="text-bade font-semibold text-black mb-3">Preferred TV Shows</h4>
                    {tvShows.length ? renderTags(tvShows) : <p className="text-sm text-gray-500">No data</p>}
                </div>

                <div className="bg-white shadow rounded-lg p-6">
                    <h4 className="text-bade font-semibold text-black mb-3">Favourite Music Genres</h4>
                    {musicGenres.length ? renderTags(musicGenres) : <p className="text-sm text-gray-500">No data</p>}
                </div>

                <div className="bg-white shadow rounded-lg p-6 md:col-span-2">
                    <h4 className="text-bade font-semibold text-black mb-3">Hobbies & Activities</h4>
                    {hobbies.length ? renderTags(hobbies) : <p className="text-sm text-gray-500">No data</p>}
                </div>
            </div>
        </div>
    )
}