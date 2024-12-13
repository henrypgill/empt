/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    corePlugins: {
        preflight: false,
    },
    theme: {
        extend: {
            colors: {
                'ant-border-color': 'rgba(5, 5, 5, 0.06)',
            },
        },
    },
    plugins: [],
};
