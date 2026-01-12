import Link from "next/link";

export default function ClosingStatement() {
  return (
    <section className="container text-center">
      <div className="max-w-3xl mx-auto">
        <p className="text-xl md:text-2xl text-foreground font-medium">
          Infrastructure is not purchased.
          <br />
          It is specified, engineered, and trusted.
        </p>
        <Link href="/contact" className="text-lg text-accent hover:underline mt-6 inline-block">
          Talk to an Engineer
        </Link>
      </div>
    </section>
  );
}
