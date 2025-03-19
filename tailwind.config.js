/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    darkMode: 'class',
    theme: {
        extend: {
            colors: {
                // 커스텀 색상을 추가하고 싶다면 여기에 작성
                primary: {
                    light: '#60a5fa',
                    DEFAULT: '#3b82f6',
                    dark: '#2563eb',
                },
                hero: {
                    light: '#E6F3FF',
                    dark: '#1A365D',
                },
                about: {
                    light: '#F0FDF4',
                    dark: '#14532D',
                },
                projects: {
                    light: '#FDF2F8',
                    dark: '#831843',
                },
                contact: {
                    light: '#EEF2FF',
                    dark: '#1E3A8A',
                },
            },
            fontFamily: {
                // 커스텀 폰트를 추가하고 싶다면 여기에 작성
                sans: ['Pretendard', 'sans-serif'],
            },
            spacing: {
                // 커스텀 간격을 추가하고 싶다면 여기에 작성
                // 예: '128': '32rem',
            },
            animation: {
                // 커스텀 애니메이션을 추가하고 싶다면 여기에 작성
                // 예: 'fade-in': 'fadeIn 0.5s ease-in',
            },
            keyframes: {
                // 커스텀 키프레임을 추가하고 싶다면 여기에 작성
                // 예: fadeIn: {
                //   '0%': { opacity: '0' },
                //   '100%': { opacity: '1' },
                // },
            },
        },
    },
    plugins: [],
};
