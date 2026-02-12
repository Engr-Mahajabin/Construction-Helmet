export default function ContactForm() {
    return (
        <div className="bg-white p-8 md:p-12 shadow-2xl rounded-sm border border-gray-100">
            <h3 className="text-2xl font-bold mb-8 uppercase tracking-tight">Send Us Message</h3>
            <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <input
                        type="text" placeholder="Name"
                        className="w-full border-b border-gray-300 py-3 focus:border-yellow-600 outline-none transition-colors"
                    />
                    <input
                        type="text" placeholder="Phone"
                        className="w-full border-b border-gray-300 py-3 focus:border-yellow-600 outline-none transition-colors"
                    />
                </div>
                <input
                    type="email" placeholder="Email"
                    className="w-full border-b border-gray-300 py-3 focus:border-yellow-600 outline-none transition-colors"
                />
                <select className="w-full border-b border-gray-300 py-3 focus:border-yellow-600 outline-none bg-transparent text-gray-500">
                    <option>—Please choose an option—</option>
                    <option>Construction</option>
                    <option>Interior Design</option>
                </select>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <input
                        type="text" placeholder="Budget"
                        className="w-full border-b border-gray-300 py-3 focus:border-yellow-600 outline-none transition-colors"
                    />
                    <input
                        type="text" placeholder="Size (SQFT)"
                        className="w-full border-b border-gray-300 py-3 focus:border-yellow-600 outline-none transition-colors"
                    />
                </div>
                <textarea
                    placeholder="Message" rows="4"
                    className="w-full border-b border-gray-300 py-3 focus:border-yellow-600 outline-none transition-colors resize-none"
                ></textarea>

                <button className="bg-yellow-600 text-white px-8 py-4 font-bold uppercase flex items-center gap-2 hover:bg-slate-900 transition-all group">
                    Send Message
                    <span className="group-hover:translate-x-1 transition-transform">↗</span>
                </button>
            </form>
        </div>
    );
}