'use client'

import Link from 'next/link'

export default function ProfileLayout({ children }: { children: React.ReactNode }) {
    const profileMenu = [
        { href: '/profile', label: 'Basic Details' },
        { href: '/profile/additional', label: 'Additional Details' },
        { href: '/profile/preferences', label: 'Personal Preferences' },
        { href: '/profile/spouse', label: 'Spouse Details' },
    ]

    const profileMenuItems = profileMenu.map((item) => (
        <Link href={item.href} key={item.href}>
            <span className="block px-4 py-2 text-gray-700 hover:bg-gray-200 rounded-md font-medium cursor-pointer">
                {item.label}
            </span>
        </Link>
    ))

    return (
        <div className="min-h-screen bg-gray-100">
            <header className="bg-white shadow">
                <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8 flex justify-between items-center">
                    <div className="bg-gray-300 text-gray-700 rounded-md px-4 py-2 font-bold">LOGO</div>

                    <button className="lg:hidden focus:outline-none">
                        <svg className="h-6 w-6 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>

                    <div className="hidden lg:block">
                        {/* mobile nav should be here*/}
                    </div>
                </div>
            </header>

            <main className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-6">
                <aside className="md:col-span-1 bg-white shadow rounded-md p-4 max-h-fit">
                    <h2 className="text-xl font-semibold text-black mb-4 px-4 py-2">My Profile</h2>
                    <nav className="space-y-2">
                        {profileMenuItems}
                    </nav>
                </aside>

                <div className="md:col-span-3 bg-white shadow rounded-md sm:p-6">
                    {children}
                </div>
            </main>
        </div>
    )
}