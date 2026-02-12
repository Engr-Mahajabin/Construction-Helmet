export default function GoogleMap() {
    const address = "123+Main+Street,+New+York,+NY+10001";
    const mapUrl = `https://www.google.com/maps/embed/v1/place?key=YOUR_GOOGLE_MAPS_API_KEY&q=${address}`;

    return (
        <div className="w-full h-[450px] grayscale hover:grayscale-0 transition-all duration-700">
            <iframe
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
                src={`https://www.google.com/maps?q=${address}&output=embed`}
            ></iframe>
        </div>
    );
}