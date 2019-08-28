const contactMe = () => {
    // Change background of Contact Me section to a shade of black - Don Juan
    (document.querySelector('.showcase')).style.backgroundColor = "#5b4e4b";
    
    // Create the title and description for Contact Me section
    const contactSection = document.createElement('div');
    contactSection.classList.add('contactMe');
 
    const sectionTitle = document.createElement('h1');
    sectionTitle.innerHTML = 'Contact Me';

    const sectionDescription = document.createElement('h2');
    sectionDescription.innerHTML = 'Have a question or comment? Let\'s get in touch!'

    // Create the contact form
    const contactForm = document.createElement('div');
    contactForm.classList.add('contact');

    // Form container
    const form = document.createElement('form');
    form.action = 'mail.php';
    form.method = 'POST';

    // Name input
    const name = document.createElement('p');
    name.classList.add('name');
    const nameLabel = document.createElement('label');
    nameLabel.htmlFor = 'nameInput'
    nameLabel.innerHTML = 'Name';
    const nameInput = document.createElement('input');
    nameInput.id = 'nameInput';
    nameInput.name = 'nameGET';
    nameInput.setAttribute('type', 'text');
    nameInput.setAttribute('placeholder', 'Name');
    name.append(nameLabel, nameInput);

    // User's email input
    const email = document.createElement('p');
    email.classList.add('email');
    const emailLabel = document.createElement('label');
    emailLabel.htmlFor = 'emailInput';
    emailLabel.innerHTML = 'Email';
    const emailInput = document.createElement('input');
    emailInput.id = 'emailInput';
    emailInput.name = 'emailGET';
    emailInput.setAttribute('type', 'text');
    emailInput.setAttribute('placeholder', 'Email');
    email.append(emailLabel, emailInput);

    // Message input
    const message = document.createElement('p');
    message.classList.add('message');
    const messageLabel = document.createElement('label');
    messageLabel.htmlFor = 'messageInput';
    messageLabel.innerHTML = 'Message';
    const messageInput = document.createElement('input');
    messageInput.id = 'messageInput';
    messageInput.name = 'messageGET';
    messageInput.setAttribute('type', 'text');
    messageInput.setAttribute('placeholder', 'Message');
    message.append(messageLabel, messageInput);

    // Send button
    const send = document.createElement('p');
    send.classList.add('send');
    const sendInput = document.createElement('input');
    sendInput.setAttribute('type', 'submit');
    sendInput.value = "Send";
    send.append(sendInput);

    // Append form elements to form container
    form.append(name, email, message, send);
    
    contactForm.appendChild(form);

    contactSection.append(sectionTitle, sectionDescription, contactForm);

    (document.querySelector('.showcase')).appendChild(contactSection);
}

export {contactMe};