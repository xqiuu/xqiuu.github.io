import { contacts } from "../data/contact";

export function ContactSection() {
    return (
      <section className="contact" id="contact">
        {contacts.map((p) => (
          <a href={p.href}>
            <img className="contact-img" src={p.image} alt={p.alt} />
          </a>
        ))}
      </section>
    );  
}