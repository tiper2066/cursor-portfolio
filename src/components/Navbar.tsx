export default function Navbar() {
    return (
        <nav className='fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm'>
            <div className='container mx-auto px-4'>
                <div className='flex items-center justify-end h-16 gap-8'>
                    <a
                        href='#about'
                        className='text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-colors'
                    >
                        About
                    </a>
                    <a
                        href='#projects'
                        className='text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-colors'
                    >
                        Projects
                    </a>
                    <a
                        href='#contact'
                        className='text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-colors'
                    >
                        Contact
                    </a>
                </div>
            </div>
        </nav>
    );
}
