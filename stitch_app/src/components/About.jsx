export default function About() {
    const leaders = [
        {
            name: "Jane Doe",
            role: "Chief Executive Officer",
            image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDnKAu9LhzvmA4YNK77SGbx9_fN6gBEbusV2Cf2tp8N1_vIA5XBa89e1RLZQJnK-AJWS3umQZGpY1nKyFoHoXcYlr1mqnlt6TxPL0aRyZpkv9molz3PlfL4cmwowG8pmgQx1ZqRbvWPlrME1lUFaSmTBdgOpU7gWBWA-iIl5tUeJfSqZq41i0Zoq4P0HNK2yF4c593XaeV0FK991qJ61vI_Nh28DHlPZQuNHbAidzocmXVNF6fmYXgXC-ZzZyymBt6YvKzQjiK_EeqG"
        },
        {
            name: "John Smith",
            role: "Chief Technology Officer",
            image: "https://lh3.googleusercontent.com/aida-public/AB6AXuD-7hbV__HS9R2ABH1Fikokiag1ZLDkS25hvsAHZdCUAO7VDXJPI9t5Nj003z07qMIs9YK0YhPWPKm9uSNK_425LVMNG9uqZxe27tkU5wUuSoiCDPgxrbqxMsseNHgqUeefYnrJuwFsXUy-wbGoriOHEZqkBZFbw94Y8PC8umVg-dCficJBVslRIsJIUnw6bauaVhY0VrBQB1stDNU8mkaO3VauH1n-eQqHvkCyQzjq-r1XsrB6ld3wvWo_PiQzEgp30G8WOL8SSGSU"
        },
        {
            name: "Emily White",
            role: "Chief Operating Officer",
            image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBxU0vPHlvdaMApfY8F8UNjiNttbMuGBfVCajFRF7urOIi2KdS-9pHfyu0FLgX1o6Gl1JqXz7JDI0TWlXSLnhfsZnEZ4oE-NWl93qavKfaeykp7pbks2SqwpnQvaPPMLEwOO3lxGD9FyGs2r3LqVnZS5lP5AG-7yzjmgMLgJwwsV4aL5bEuct7omH1mJXIMh9jgoin7ExiFRxV3G2ymPPnM7wHCznq9RBbfdRpraBUeuoX3KSsEJXHG5owwMn6GBiZcLAWdk0gcPr1c"
        }
    ]

    return (
        <section id="about" className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-transparent">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-12 lg:gap-20 mb-24">
                <div className="order-2 md:order-1">
                    <h2 className="text-3xl font-bold text-gray-900 dark:text-white tracking-tight">Our Mission</h2>
                    <p className="mt-4 text-gray-600 dark:text-gray-400 leading-relaxed">
                        Our mission is to empower businesses with transformative technology and strategic insights. We believe in building long-term partnerships, understanding our clients' unique needs, and delivering solutions that not only meet but exceed expectations, fostering sustainable growth and a competitive edge in their respective industries.
                    </p>
                    <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-8">
                        <div>
                            <h3 className="text-xl font-bold text-gray-900 dark:text-white">Innovation</h3>
                            <p className="mt-2 text-gray-600 dark:text-gray-400">We constantly explore new technologies and methodologies.</p>
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-gray-900 dark:text-white">Integrity</h3>
                            <p className="mt-2 text-gray-600 dark:text-gray-400">Transparency and honesty are the foundations of our work.</p>
                        </div>
                    </div>
                </div>
                <div className="order-1 md:order-2">
                    <img alt="A team collaborating on a project in a modern office space" className="w-full h-auto object-cover rounded-xl shadow-lg" loading="lazy" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDcIa5bVnbRkrMNUjPXjOH5ykP35PeMLWp7kSJR2V6WdSd31EDAFeAwTYYEVlaxN1uixXxjFEbWCmi-NoGkSQbn1CThOVKQlF8AmCilkEltZ3gbeCNniiv-Vf7BdAlFlQ-lIF3L4eGc0el7fHc7zJwSL3cFZT8CFeDO1SbedTnZXIsesaB__zFkds0DICBQ-ZfrYraC8XH9T5mPaCNEY6Ebn_LwpVXbGIm2rhKLq7ljthylPk_sZzAosyXS_nbIFb-KuHMBnjw5ulpl" />
                </div>
            </div>

            <div className="max-w-5xl mx-auto text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white tracking-tight">Meet the Leadership</h2>
                <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600 dark:text-gray-400">Our leaders bring decades of experience and a shared passion for innovation.</p>
            </div>
            <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
                {leaders.map((leader, index) => (
                    <div key={index} className="text-center group">
                        <img alt={`Portrait of ${leader.name}, ${leader.role}`} className="w-32 h-32 rounded-full mx-auto object-cover grayscale group-hover:grayscale-0 transition-all duration-300" loading="lazy" src={leader.image} />
                        <h3 className="mt-4 text-lg font-bold text-gray-900 dark:text-white">{leader.name}</h3>
                        <p className="text-primary font-medium">{leader.role}</p>
                    </div>
                ))}
            </div>

            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-12 lg:gap-20">
                <div>
                    <img alt="Office interior showing the company's culture and workspace" className="w-full h-auto object-cover rounded-xl shadow-lg" loading="lazy" src="https://lh3.googleusercontent.com/aida-public/AB6AXuClwI-BRVPU-IO_Q96_ZVyy6FzMXBG8yph8po0nrZkGXLsPLTwsdfpEKD7VcKNw2_oLqwY3-f_XAStLx-GdnUr-Hs_c13txfmYxYy7bjrXYA7KTdhNzYUF8Gv8b7O_xCrJntrHuadW_1NcXs9R7bdRf7-k5m2REDNp6EzmSejkhPfOd-tJmrFyB3E5pAkdoXw0b0O7nbM5uFTkkyPYXTFZsVPro_FqBtsn1RJsxbIWgaL8_61jTNi7AxDXv1G2Djt5HEIq0x7KKufqT" />
                </div>
                <div className="flex flex-col gap-4">
                    <h2 className="text-3xl font-bold text-gray-900 dark:text-white tracking-tight">Our Culture</h2>
                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                        We foster a collaborative and inclusive environment where every voice is heard and valued. Our culture is built on continuous learning, mutual respect, and a drive to make a positive impact. We empower our team to take initiative, think creatively, and grow both personally and professionally.
                    </p>
                    <a className="inline-flex items-center gap-2 text-primary font-bold group mt-2 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:ring-offset-2 focus:ring-offset-background-light dark:focus:ring-offset-background-dark rounded-md w-fit" href="#">
                        Join Our Team
                        <span aria-hidden="true" className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                    </a>
                </div>
            </div>
        </section>
    )
}
