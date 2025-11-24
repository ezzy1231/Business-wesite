export default function Footer() {
    return (
        <footer className="bg-gray-100 dark:bg-background-dark/50 border-t border-gray-200 dark:border-gray-800">
            <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    <div className="col-span-2 md:col-span-1 flex flex-col gap-4">
                        <a aria-label="Intelligent Solutions Home" className="flex items-center gap-2 text-gray-900 dark:text-white" href="#">
                            <div className="size-6 text-primary">
                                <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                                    <path clipRule="evenodd" d="M12.0799 24L4 19.2479L9.95537 8.75216L18.04 13.4961L18.0446 4H29.9554L29.96 13.4961L38.0446 8.75216L44 19.2479L35.92 24L44 28.7521L38.0446 39.2479L29.96 34.5039L29.9554 44H18.0446L18.04 34.5039L9.95537 39.2479L4 28.7521L12.0799 24Z" fill="currentColor" fillRule="evenodd"></path>
                                </svg>
                            </div>
                            <h3 className="text-md font-bold">Intelligent Solutions</h3>
                        </a>
                        <p className="text-sm text-gray-600 dark:text-gray-400">Innovating for a smarter future.</p>
                    </div>
                    <div className="flex flex-col gap-3">
                        <h4 className="font-bold text-sm text-gray-900 dark:text-white">Company</h4>
                        <a className="text-sm text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors" href="#about">About Us</a>
                        <a className="text-sm text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors" href="#">Careers</a>
                        <a className="text-sm text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors" href="#">Blog</a>
                    </div>
                    <div className="flex flex-col gap-3">
                        <h4 className="font-bold text-sm text-gray-900 dark:text-white">Services</h4>
                        <a className="text-sm text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors" href="#services">Consulting</a>
                        <a className="text-sm text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors" href="#services">Analytics</a>
                        <a className="text-sm text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors" href="#services">Development</a>
                    </div>
                    <div className="flex flex-col gap-3">
                        <h4 className="font-bold text-sm text-gray-900 dark:text-white">Legal</h4>
                        <a className="text-sm text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors" href="#">Privacy Policy</a>
                        <a className="text-sm text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors" href="#">Terms of Service</a>
                    </div>
                </div>
                <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-800 flex flex-col sm:flex-row justify-between items-center gap-4">
                    <p className="text-sm text-gray-500 dark:text-gray-400">© 2024 Intelligent Solutions. All rights reserved.</p>
                    <div className="flex gap-4">
                        <a aria-label="Follow us on X" className="text-gray-500 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors" href="#">
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 16 16">
                                <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865l8.875 11.633Z"></path>
                            </svg>
                        </a>
                        <a aria-label="Follow us on LinkedIn" className="text-gray-500 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors" href="#">
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 16 16">
                                <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.325 0-1.936.724-2.26 1.256h.016a2.517 2.517 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"></path>
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    )
}
