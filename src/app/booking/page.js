export const metadata = {
  title: 'Upscale Mobile Bartending | Booking',
  description: 'Book your event with our mobile bartending service. Explore our packages.',
};

export default function BookingPage() {
  return (
    <section>
      <h1>Booking Packages</h1>
      <a href="tel:+1[YourPhoneNumber]" className="call-button">Call Us Now</a>
      <div className="packages">
        <div className="package">
          <h3>Basic Package</h3>
          <p>Includes setup and one bartender.</p>
          <p>Price Range: $500 - $700</p>
        </div>
        <div className="package">
          <h3>Premium Package</h3>
          <p>Includes setup, two bartenders, and a custom cocktail menu.</p>
          <p>Price Range: $1000 - $1300</p>
        </div>
        <div className="package">
          <h3>Elite Package</h3>
          <p>All-inclusive service with premium ingredients.</p>
          <p>Price Range: $1500 - $2000</p>
        </div>
      </div>
    </section>
  );
}
