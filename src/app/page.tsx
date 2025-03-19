import ThemeToggle from '@/components/ThemeToggle';
import Navbar from '@/components/Navbar';

export default function Home() {
    return (
        <div className='min-h-screen dark:bg-gray-900 transition-colors duration-200'>
            <Navbar />
            {/* Hero Section */}
            <section className='h-screen flex items-center justify-center bg-hero-light dark:bg-hero-dark'>
                <div className='text-center'>
                    <h1 className='text-4xl font-bold mb-4 dark:text-white'>
                        홍길동
                    </h1>
                    <p className='text-xl text-gray-600 dark:text-gray-300'>
                        프론트엔드 개발자
                    </p>
                </div>
            </section>

            {/* About Section */}
            <section
                className='h-[800px] flex items-center bg-about-light dark:bg-about-dark'
                id='about'
            >
                <div className='container mx-auto px-4'>
                    <h2 className='text-3xl font-bold mb-8 dark:text-white'>
                        About Me
                    </h2>
                    <p className='text-gray-600 dark:text-gray-300'>
                        여기에 자기소개를 작성하세요.
                    </p>
                </div>
            </section>

            {/* Projects Section */}
            <section
                className='h-[800px] flex items-center bg-projects-light dark:bg-projects-dark'
                id='projects'
            >
                <div className='container mx-auto px-4'>
                    <h2 className='text-3xl font-bold mb-8 dark:text-white'>
                        Projects
                    </h2>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                        {/* Project Card */}
                        <div className='bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md'>
                            <h3 className='text-xl font-bold mb-2 dark:text-white'>
                                프로젝트 제목
                            </h3>
                            <p className='text-gray-600 dark:text-gray-300 mb-4'>
                                프로젝트 설명
                            </p>
                            <div className='flex gap-2'>
                                <span className='bg-gray-200 dark:bg-gray-600 px-3 py-1 rounded-full text-sm dark:text-gray-300'>
                                    React
                                </span>
                                <span className='bg-gray-200 dark:bg-gray-600 px-3 py-1 rounded-full text-sm dark:text-gray-300'>
                                    Next.js
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section
                className='h-[800px] flex items-center bg-contact-light dark:bg-contact-dark'
                id='contact'
            >
                <div className='container mx-auto px-4'>
                    <h2 className='text-3xl font-bold mb-8 dark:text-white'>
                        Contact
                    </h2>
                    <div className='flex flex-col items-center'>
                        <p className='text-gray-600 dark:text-gray-300 mb-4'>
                            Email: your.email@example.com
                        </p>
                        <div className='flex gap-4'>
                            <a
                                href='https://github.com/yourusername'
                                className='text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white'
                            >
                                GitHub
                            </a>
                            <a
                                href='https://linkedin.com/in/yourusername'
                                className='text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white'
                            >
                                LinkedIn
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            <ThemeToggle />
        </div>
    );
}
