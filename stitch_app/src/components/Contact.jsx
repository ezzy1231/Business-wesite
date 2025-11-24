export default function Contact() {
    return (
        <section id="contact" className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-transparent">
            <div className="text-center mb-12 md:mb-16">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 dark:text-white tracking-tighter">Get in Touch</h2>
                <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600 dark:text-gray-400">We're here to help and answer any question you might have. We look forward to hearing from you.</p>
            </div>
            <div className="max-w-7xl mx-auto grid lg:grid-cols-5 gap-12 lg:gap-16">
                <div className="lg:col-span-2 space-y-8">
                    <div className="flex items-start gap-4">
                        <div className="flex-shrink-0 size-12 rounded-full bg-primary/10 dark:bg-primary/20 text-primary flex items-center justify-center">
                            <span className="material-symbols-outlined">location_on</span>
                        </div>
                        <div>
                            <h3 className="text-lg font-bold text-gray-900 dark:text-white">Our Office</h3>
                            <p className="text-gray-600 dark:text-gray-400">123 Innovation Drive, Suite 456<br />Tech City, TX 78901</p>
                        </div>
                    </div>
                    <div className="flex items-start gap-4">
                        <div className="flex-shrink-0 size-12 rounded-full bg-primary/10 dark:bg-primary/20 text-primary flex items-center justify-center">
                            <span className="material-symbols-outlined">mail</span>
                        </div>
                        <div>
                            <h3 className="text-lg font-bold text-gray-900 dark:text-white">Email Us</h3>
                            <a className="text-primary hover:underline" href="mailto:contact@intellisolutions.com">contact@intellisolutions.com</a>
                        </div>
                    </div>
                    <div className="flex items-start gap-4">
                        <div className="flex-shrink-0 size-12 rounded-full bg-primary/10 dark:bg-primary/20 text-primary flex items-center justify-center">
                            <span className="material-symbols-outlined">call</span>
                        </div>
                        <div>
                            <h3 className="text-lg font-bold text-gray-900 dark:text-white">Call Us</h3>
                            <a className="text-primary hover:underline" href="tel:+1234567890">(123) 456-7890</a>
                        </div>
                    </div>
                </div>
                <div className="lg:col-span-3">
                    <div className="p-8 bg-white dark:bg-background-dark border border-gray-200 dark:border-gray-800 rounded-xl shadow-sm dark:shadow-2xl dark:shadow-primary/[0.05]">
                        <form action="#" className="space-y-6" method="POST">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1" htmlFor="first-name">First Name</label>
                                    <input autoComplete="given-name" className="block w-full rounded-md border-gray-300 dark:border-gray-700 dark:bg-gray-800/50 shadow-sm focus:border-primary focus:ring-primary dark:focus:border-primary sm:text-sm transition-colors duration-200 p-2 border" id="first-name" name="first-name" required type="text" />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1" htmlFor="last-name">Last Name</label>
                                    <input autoComplete="family-name" className="block w-full rounded-md border-gray-300 dark:border-gray-700 dark:bg-gray-800/50 shadow-sm focus:border-primary focus:ring-primary dark:focus:border-primary sm:text-sm transition-colors duration-200 p-2 border" id="last-name" name="last-name" required type="text" />
                                </div>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1" htmlFor="email">Email</label>
                                <input autoComplete="email" className="block w-full rounded-md border-gray-300 dark:border-gray-700 dark:bg-gray-800/50 shadow-sm focus:border-primary focus:ring-primary dark:focus:border-primary sm:text-sm transition-colors duration-200 p-2 border" id="email" name="email" required type="email" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1" htmlFor="message">Message</label>
                                <textarea className="block w-full rounded-md border-gray-300 dark:border-gray-700 dark:bg-gray-800/50 shadow-sm focus:border-primary focus:ring-primary dark:focus:border-primary sm:text-sm transition-colors duration-200 p-2 border" id="message" name="message" required rows="4"></textarea>
                            </div>
                            <div className="flex items-start">
                                <div className="flex h-6 items-center">
                                    <input className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary dark:bg-gray-800 dark:border-gray-700 transition" id="terms" name="terms" required type="checkbox" />
                                </div>
                                <div className="ml-3 text-sm leading-6">
                                    <label className="font-medium text-gray-700 dark:text-gray-300" htmlFor="terms">I agree to the <a className="text-primary hover:underline" href="#">Privacy Policy</a></label>
                                </div>
                            </div>
                            <div>
                                <button className="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-bold text-white bg-primary hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary focus:ring-offset-background-light dark:focus:ring-offset-background-dark transition-colors duration-200" type="submit">
                                    Send Message
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}
