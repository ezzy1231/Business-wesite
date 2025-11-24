export default function Hero() {
    return (
        <section className="relative overflow-hidden text-center py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-transparent">
            <div className="relative z-10 max-w-4xl mx-auto">
                <div className="absolute -top-12 -left-12 w-6 h-6 bg-blue-400 rounded-full mix-blend-multiply filter blur-sm opacity-70 animate-float dark:bg-blue-500 dark:mix-blend-screen"></div>
                <div className="absolute top-0 -right-4 w-4 h-4 bg-purple-400 rounded-full mix-blend-multiply filter blur-sm opacity-70 animate-float animation-delay-2000 dark:bg-purple-500 dark:mix-blend-screen"></div>
                <div className="absolute -bottom-8 left-20 w-8 h-8 bg-pink-400 rounded-full mix-blend-multiply filter blur-sm opacity-70 animate-float animation-delay-4000 dark:bg-pink-500 dark:mix-blend-screen"></div>
                <div className="absolute bottom-1/2 -right-12 w-5 h-5 bg-yellow-400 rounded-full mix-blend-multiply filter blur-sm opacity-70 animate-pulse-slow dark:bg-yellow-500 dark:mix-blend-screen"></div>

                <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-gray-900 dark:text-white leading-tight tracking-tighter">
                    Driving Innovation, Delivering Excellence
                </h1>
                <p className="mt-4 text-lg md:text-xl text-gray-600 dark:text-gray-400">
                    We are a team of passionate strategists, designers, and engineers dedicated to solving complex challenges with elegant, data-driven solutions.
                </p>
            </div>
        </section>
    )
}
