import { Facebook, Linkedin, Twitter, Instagram } from "lucide-react";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-white pt-20 pb-10">
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 border-b border-gray-100 pb-16">

                {/* Column 1: Brand & About */}
                <div className="space-y-6">
                    <div className="flex items-center gap-2">
                        <div className="w-6 h-6 bg-[#ff5c35] transform rotate-45 flex items-center justify-center">
                            <span className="text-white text-[10px] -rotate-45 font-bold">S</span>
                        </div>
                        <span className="text-2xl font-bold tracking-tighter uppercase italic">structa</span>
                    </div>
                    <p className="text-gray-500 text-sm leading-relaxed max-w-[280px]">
                        With over a decade of experience, we specialize in residential and commercial construction, renovations, and project management.
                    </p>
                    <div className="flex gap-4">
                        <SocialIcon icon={<Facebook size={16} />} />
                        <SocialIcon icon={<Linkedin size={16} />} />
                        <SocialIcon icon={<Twitter size={16} />} />
                        <SocialIcon icon={<Instagram size={16} />} />
                    </div>
                </div>

                {/* Column 2: Quick Links */}
                <div>
                    <h4 className="font-bold text-sm uppercase tracking-widest mb-6 text-gray-800">Quick Links</h4>
                    <ul className="space-y-3 text-sm text-gray-500">
                        <li><FooterLink href="#">About us</FooterLink></li>
                        <li><FooterLink href="#">Our team</FooterLink></li>
                        <li><FooterLink href="#">Projects</FooterLink></li>
                        <li><FooterLink href="#">Blogs</FooterLink></li>
                        <li><FooterLink href="#">Contact</FooterLink></li>
                    </ul>
                </div>

                {/* Column 3: Services */}
                <div>
                    <h4 className="font-bold text-sm uppercase tracking-widest mb-6 text-gray-800">Services</h4>
                    <ul className="space-y-3 text-sm text-gray-500">
                        <li><FooterLink href="#">Construction</FooterLink></li>
                        <li><FooterLink href="#">Interior</FooterLink></li>
                        <li><FooterLink href="#">Architecture</FooterLink></li>
                        <li><FooterLink href="#">Renovation</FooterLink></li>
                    </ul>
                </div>

                {/* Column 4: Contact */}
                <div>
                    <h4 className="font-bold text-sm uppercase tracking-widest mb-6 text-gray-800">Contact</h4>
                    <ul className="space-y-4 text-sm text-gray-500">
                        <li>123 Main Street New York,<br /> NY 10001</li>
                        <li className="font-bold text-gray-800">structa@mail.com</li>
                        <li className="font-bold text-gray-800">+(409) 537-2410</li>
                    </ul>
                </div>
            </div>

            {/* Bottom Copyright */}
            <div className="text-center pt-8 text-xs text-gray-400 font-medium">
                © {currentYear} MirrorTheme. All rights reserved.
            </div>
        </footer>
    );
}

// Helper Components
function FooterLink({ children, href }) {
    return (
        <a href={href} className="hover:text-[#ff5c35] transition-colors duration-300">
            {children}
        </a>
    );
}

function SocialIcon({ icon }) {
    return (
        <div className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center text-gray-600 hover:bg-[#ff5c35] hover:text-white transition-all cursor-pointer">
            {icon}
        </div>
    );
}