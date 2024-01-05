import { LitElement, html, css } from 'lit';

class ContactComponent extends LitElement {

    static styles = css`
        :host {
            display: block;
            max-width: 600px;
            margin: 20px auto;
            padding: 20px;
            border: 1px solid #ddd;
            border-radius: 8px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
            background-color: #fff;
            text-align: center;
        }

        label {
            display: block;
            margin-top: 10px;
        }

        input {
            width: 100%;
            padding: 8px;
            box-sizing: border-box;
            margin-top: 5px;
            margin-bottom: 15px;
        }

        textarea {
            width: 100%;
          height: 50vh;
            padding: 8px;
            box-sizing: border-box;
            margin-top: 5px;
            margin-bottom: 15px;
        }

        button {
            background-color: var(--primary-accent-color);
            color: var(--secondary-text-color);
            padding: 10px;
            border-radius: 5px;
            border: none;
            cursor: pointer;
            width: 50%;
        }
    `;

    render() {
        return html`
      <form @submit=${this.handleSubmit}>
        <label for="name">Name:</label>
        <input type="text" id="name" name="name" required><br>

        <label for="email">Email:</label>
        <input type="email" id="email" name="email" required><br>

        <label for="message">Message:</label>
        <textarea id="message" name="message" required></textarea><br>

        <button type="submit">Submit</button>
      </form>
    `;
    }

    handleSubmit(event) {
        event.preventDefault();

        const formData = new FormData(event.target);
        const name = formData.get('name');
        const email = formData.get('email');
        const message = formData.get('message');

        // Use SmtpJS to send the email
        Email.send({
            SecureToken: "b0315920-6b2d-4789-bfac-f414ea0b3ac3",
            To: 'chazzvdh@gmail.com',
            From: email,
            Subject: `${name} probeerde je te bereiken via je website`,
            Body: `Name: ${name}<br>Email: ${email}<br>Message: ${message}`
        }).then(
            message => alert('Email sent successfully!')
        );
    }
}

customElements.define('contact-form-element', ContactComponent);
