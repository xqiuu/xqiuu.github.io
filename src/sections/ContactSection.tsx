import { contacts } from "../data/contact";

export function ContactSection() {
    return (
      <section className="contact" id="contact">
        <div><h3>contact</h3></div>
        {contacts.map((p) => (
          <a href={p.href}>
            <img className="contact-img" src={p.image} alt={p.alt} />
          </a>
        ))}
      </section>
    );  
}