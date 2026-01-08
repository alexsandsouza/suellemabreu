import './WhatsAppButton.css';

/* We'll just use simple text/svg for now to avoid dependency issues if lucide isn't installed */

export default function WhatsAppButton() {
    return (
        <a
            href="https://wa.me/5592000000000" /* Placeholder number */
            className="whatsapp-float"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Fale conosco no WhatsApp"
        >
            <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" alt="WhatsApp" width="30" height="30" />
        </a>
    );
}
