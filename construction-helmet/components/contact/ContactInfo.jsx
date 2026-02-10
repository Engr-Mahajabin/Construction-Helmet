export default function ContactInfo() {
    return (
        <div className="space-y-8">
            <p className="text-sm font-semibold text-gray-500 uppercase tracking-widest">
                contact information
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight">
                CONTACT US TODAY AND LET’S BRING YOUR VISION TO LIFE
            </h2>

            <div className="space-y-6 pt-4">
                <div>
                    <h4 className="text-sm font-bold text-gray-400 uppercase">hotline</h4>
                    <p className="text-xl font-medium">+ (480) 537-2410</p>
                </div>
                <div>
                    <h4 className="text-sm font-bold text-gray-400 uppercase">email</h4>
                    <p className="text-xl font-medium text-slate-800">structa@mail.com</p>
                </div>
                <div>
                    <h4 className="text-sm font-bold text-gray-400 uppercase">location</h4>
                    <p className="text-xl font-medium text-slate-800">123 Main Street New York, NY 10001</p>
                </div>
            </div>
        </div>
    );
}