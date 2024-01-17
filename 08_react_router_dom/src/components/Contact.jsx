const Contact = () => {
    return (
        <div className="container mx-auto mt-10  h-[70vh]">
            <h1 className="text-3xl font-bold mb-6">Contact Us</h1>
            <form>
                <div className="mb-4">
                    <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">
                        Name
                    </label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        className="w-full px-3 py-2 border rounded-md"
                        placeholder="Your name"
                    />
                </div>

                <div className="mb-4">
                    <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
                        Email
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        className="w-full px-3 py-2 border rounded-md"
                        placeholder="Your email"
                    />
                </div>

                <div className="mb-4">
                    <label htmlFor="message" className="block text-gray-700 text-sm font-bold mb-2">
                        Message
                    </label>
                    <textarea
                        id="message"
                        name="message"
                        rows="4"
                        className="w-full px-3 py-2 border rounded-md"
                        placeholder="Your message"
                    ></textarea>
                </div>

                <button
                    type="submit"
                    className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
                >
                    Send Message
                </button>
            </form>
        </div>
    );
};

export default Contact;
