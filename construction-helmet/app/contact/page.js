import ContactForm from "@/components/contact/ContactForm";
import ContactInfo from "@/components/contact/ContactInfo";
import GoogleMap from "@/components/contact/GoogleMap";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";

export default function ContactPage() {
  return (
    <div className="max-w-[1280px] mx-auto">
      <Navbar />
      <section className="bg-white py-20 px-6 text-center">
        <h1 className="text-6xl md:text-8xl font-black text-slate-900 uppercase tracking-tighter leading-none">
          Need Help? Just <br /> Message Us
        </h1>
        <p className="mt-6 text-yellow-600 font-bold uppercase tracking-widest text-sm">
          contact with us
        </p>
      </section>
      <div className="w-full h-[500px] relative">
        <img
          src="/img/contact/contact-bg.png"
          alt="Construction Banner"
          className="w-full h-full object-cover"
        />
      </div>
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
          <ContactInfo />
          <div className="lg:-mt-40 z-10">
            {" "}
            <ContactForm />
          </div>
        </div>
      </section>
      <div className="w-full h-96 grayscale contrast-125 bg-gray-200 mt-10 mb-10">
        <GoogleMap />
      </div>
      <Footer />
    </div>
  );
}
