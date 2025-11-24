export default function Services() {
    const services = [
        {
            title: "Strategy Consulting",
            description: "We help you craft winning strategies by analyzing market trends, identifying opportunities, and defining a clear roadmap for sustainable growth.",
            image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCK_ksTcW79lyrFLWCPYbgGC5iuj52Otg4AYhbIfOjNbwuwL7psuFaqp6SJLevXR-XVm5qVq4QNzQQR4lifHqFZvbM2JEC4dyPAElBgm3Fis6Lb8tXWVWkdOuY-o9c3Her0cJD5WCbvbaE9RRPwZUPerUSHRQBmGa9zt2guVgWwoTfHcqJwFpwB83pOfaPUU6WwC4rxZBiTen0nGIoqvVBD6BlMsW54IQXufx8QJWDAC1soT-6BQH74qypavst2hT-4s9lT2sAPBMHh"
        },
        {
            title: "Data Analytics",
            description: "Leverage the power of your data. Our experts transform raw information into actionable insights that drive smarter, data-informed decisions.",
            image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAJGRDe1R9WSVlmUeNOETWG087Y_Ivw8jEFLjiRlJHURoDFVs7BgSZT82qFoKuwWymFIh4ocI-nJ_UND0pb9CvxtwtpaB1BGF37dqZMzRz6QH-diJ8ccZ6ZCAdEuZXwsEM9iUbj9x9Ny_nemPinuPy-N1ohAF1RpEigGAeYtw_Egu5kLor-J81KuVTRDEeRUhxQgYGwGAWTcxv-p4AQmKmxZZhbSE33xy8B8v7onvKtGcTl1vt4xb4HKqz6BZVjgfVMIvZdaAmoapVk"
        },
        {
            title: "Software Development",
            description: "From web applications to mobile solutions, we build robust, scalable, and secure software tailored to your specific business requirements.",
            image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDa3nBYsQbZ35fvztyvnznWs9EDoxP68HQsiuuSJWfJXo-L7ze6UjZha1Bq4pclNvNeyppaumT1ghHZUCQJaYbLzoUMewRZZkX6Byu2WoeV3FFtV9Dz6ugWal9MSC0IpHeZbPKAUJN1e3oQW9oipdwADKNPNtqWop7T8AN-OyiexpRsaXpB0LzNqyxw6PLUwwtcUa-PVtv1Jw8PSBFv1k_TaPE1gERaT2UhT5KfAvMvPRIAKtr2cM5-cvms6W6JQHbadhnktCZw3SH_"
        },
        {
            title: "Cloud Solutions",
            description: "Optimize your infrastructure with our cloud services. We offer migration, management, and security solutions for a flexible and efficient IT environment.",
            image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCQzVIEZKLerZjCPD3_2fs4Mtle1OHH3SO2TX_6O7okAILbFo3jmsL9ROy_D0pUpiK6NkkKG6V-9T4feb1AAkS0Wfhix0B_Hiokn-myKvmXz9xNA8YNTIzDJmr16YZv6mmrdp50xbktSG5wFqxygQGZ4Ru6Bp61AcJ-FQ9yNvu8Y_nZeO1qNndDIBCmpZZgZfa297JG55HOpZpCH8Q20pJND-pLXcJwaDKduhQ0BjpHAKgyoMV920J5fMDxtaiDKCX8O3mrZTOSJzit"
        },
        {
            title: "Cybersecurity",
            description: "Protect your digital assets with our comprehensive cybersecurity services, including threat assessment, monitoring, and incident response.",
            image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAh6atFKEhvhFV5jwwg0M5Gqx0uChfbSRoW-sT2T8E9-e3bX6Trd9MDkKMq4uGqQ7gPNGqoCNQ8ab_5o2UZKCPi5xwlUbJMfpYKsNwpU9ay8bKxazuatxAFUMbvQTwhcalJZkCk3wqk058YaAYVV2BqHrSczfWEA56_zCo85CuOlOI6zONHUmllKAgkFDg5ly5d7tYLSDfGc4AJ2f37vhaFlyGXUeAOfYhi7wFoBgCCBosuOWwrwEHnIXTgx7bEpEnOjfQ7MTaSPTsA"
        },
        {
            title: "AI & Machine Learning",
            description: "Integrate artificial intelligence into your operations to automate processes, enhance customer experiences, and unlock new capabilities.",
            image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCzEx1DkCwGV08_DFGzlQnG9w-isDE9d1FBYTPUGUmXzHrXXtvy1hfIlgAWaTafsbnEr3pEQk07MDSEDX235x506_gGyBZqHA3VeDtspqFI3HYfuwQeqNydjowr2IYoSP-d36Oinya4c2P2iimHOGOh6TKlRygARFlztEy1pCjZ6YTXxZpBwrWKjbJWQmAhJVeFOYp7I5VczBt1q8bcPt7Eh7Hh_xjhIyJKa3aM_GjxZRt9GCao6TB5neJQ31kunWB4aSWjOzgh99s5"
        }
    ]

    return (
        <section id="services" className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-transparent">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-black text-gray-900 dark:text-white leading-tight tracking-tight">Our Comprehensive Services</h2>
                    <p className="mt-4 text-gray-600 dark:text-gray-400 text-lg md:text-xl max-w-2xl mx-auto">
                        From strategic consulting to custom software development, we provide tailored solutions to drive your business forward.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <div key={index} className="flex flex-col rounded-xl border border-gray-200 dark:border-gray-800/80 bg-white dark:bg-background-dark p-6 transition-all duration-300 ease-in-out hover:shadow-xl dark:hover:shadow-primary/10 hover:-translate-y-2 group">
                            <div className="relative mb-4 overflow-hidden rounded-lg h-48">
                                <img alt={service.title} className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" src={service.image} loading="lazy" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{service.title}</h3>
                            <p className="text-gray-600 dark:text-gray-400 mb-4 flex-grow">
                                {service.description}
                            </p>
                            <a className="font-semibold text-primary inline-flex items-center group-hover:underline" href="#">
                                Learn More <span className="material-symbols-outlined ml-1 transition-transform duration-300 group-hover:translate-x-1">arrow_forward</span>
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
