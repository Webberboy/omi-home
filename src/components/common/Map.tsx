export default function Map() {
    return (
        <>
            <div className="wg-map">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d44666.57825381719!2d-73.9936144190183!3d40.26846357536933!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2s!4v1755592769738!5m2!1sen!2s"
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
            </div>
        </>
    );
}
