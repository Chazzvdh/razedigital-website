import { LitElement, html, css } from 'lit';

class ContactComponent extends LitElement {

    static styles = css`
    /* Add your styles here */
  `;

    render() {
        return html`
      <h2>Contact Us</h2>
  
      <form @submit="${this.sendEmail}">
        <label for="name">Name:</label>
        <input type="text" id="name" name="name" required>

        <label for="email">Email:</label>
        <input type="email" id="email" name="email" required>

        <label for="message">Message:</label>
        <textarea id="message" name="message" required></textarea>

        <button type="submit">Submit</button>
      </form>
    `;
    }

    sendEmail(event) {
        event.preventDefault();

        const formData = new FormData(event.target);

        const payload = {
            to: "chazz@ziggo.nl", // Replace with your email address
            subject: "New Contact Form Submission",
            text: `Name: ${formData.get("name")}\nEmail: ${formData.get("email")}\nMessage: ${formData.get("message")}`
        };

        fetch("https://api.mailersend.com/v1/email", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Api-Key": "your-mailersend-api-key" // Replace with your MailerSend API key
            },
            body: JSON.stringify(payload)
        })
            .then(response => response.json())
            .then(data => {
                console.log("Email sent successfully", data);
                // You can add further handling or redirection after successful submission
            })
            .catch(error => {
                console.error("Error sending email", error);
                // You can add error handling here
            });
    }
}

customElements.define('contact-form-element', ContactComponent);
