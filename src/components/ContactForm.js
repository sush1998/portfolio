import React, { useRef, useState } from 'react';
import emailjs from 'emailjs-com';

const ContactForm = () => {
  const form = useRef();
  const [submitted, setSubmitted] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_rze72ca',
      'template_1',
      form.current,
      'a0qQ65OOsh4ygD6LC',
    )
    .then(() => {
      setSubmitted(true);
      form.current.reset();
    }, (error) => {
      console.error(error.text);
    });
  };

  return (
    <section style={styles.container}>
      <h2>📬 Get in Touch</h2>
      <form ref={form} onSubmit={sendEmail} style={styles.form}>
        <input type="text" name="name" placeholder="Your name" required style={styles.input} />
        <input type="email" name="email" placeholder="Your email" required style={styles.input} />
        <textarea name="message" placeholder="Your message" required style={styles.textarea}></textarea>
        <input type="hidden" name="date" value={new Date().toLocaleString()} />
        <button type="submit" style={styles.button}>Send Message</button>

        {submitted && <p style={styles.success}>Message sent! ✅</p>}
      </form>
    </section>
  );
};

const styles = {
  container: {
    padding: '2rem',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
    maxWidth: '500px',
  },
  input: {
    padding: '0.8rem',
    borderRadius: '6px',
    border: '1px solid #ccc',
  },
  textarea: {
    height: '120px',
    padding: '0.8rem',
    borderRadius: '6px',
    border: '1px solid #ccc',
  },
  button: {
    backgroundColor: '#0077ff',
    color: '#fff',
    border: 'none',
    borderRadius: '6px',
    padding: '0.75rem',
    cursor: 'pointer',
  },
  success: {
    color: 'green',
  }
};

export default ContactForm;
