export default function FormGet2() {
    return (
        <>
            <form className="form-get_in px-16 px-xl-0">
                <div className="form-content-2">
                    <div className="tf-grid-layout sm-col-2">
                        <fieldset>
                            <label className="label-text text-body-3 text-white" htmlFor="first-name">
                                First name
                            </label>
                            <input type="text" id="first-name" placeholder="John" required />
                        </fieldset>
                        <fieldset>
                            <label className="label-text text-body-3 text-white" htmlFor="last-name">
                                Last name
                            </label>
                            <input type="text" id="last-name" placeholder="Doe" required />
                        </fieldset>
                    </div>
                    <div className="tf-grid-layout sm-col-2">
                        <fieldset>
                            <label className="label-text text-body-3 text-white" htmlFor="email">
                                Email
                            </label>
                            <input type="text" id="email" placeholder="john@example.com" required style={{fontSize: '16px'}} />
                        </fieldset>
                        <fieldset>
                            <label className="label-text text-body-3 text-white" htmlFor="phone">
                                Phone
                            </label>
                            <input type="number" id="phone" placeholder="(303) 555-0105" required />
                        </fieldset>
                    </div>
                    <fieldset className="d-grid">
                        <label className="label-text text-body-3 text-white" htmlFor="message">
                            Message
                        </label>
                        <textarea id="message" placeholder="Message"></textarea>
                    </fieldset>
                </div>
                <button type="submit" className="tf-btn text-body-3 style-2 animate-btn animate-dark style-high">
                    Send message
                </button>
            </form>
        </>
    );
}
