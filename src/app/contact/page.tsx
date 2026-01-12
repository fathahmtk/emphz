
import ContactForm from "./contact-form";
import QuoteBasket from "./quote-basket";

export default function ContactPage() {
  return (
    <div className="container py-16 lg:py-24">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">Contact Us</h1>
        <p className="mt-4 max-w-2xl mx-auto text-muted-foreground md:text-lg">
          Our team supports both standard and custom requirements. Please fill out the form below.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        <div className="md:col-span-2">
          <ContactForm />
        </div>
        <div className="md:col-span-1">
          <QuoteBasket />
        </div>
      </div>
    </div>
  );
}

