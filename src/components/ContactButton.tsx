interface Props {
    bg: string;
    textSize: string;
}
const ContactButton = ({ bg, textSize }: Props) => {
    const myEmail: string = 'Jwysong116@gmail.com';
    const handleEmailClick = (): void => {
        const subject: string = 'Contact From Portfolio';
        const mailtoLink: string = `mailto:${myEmail}?subject=${subject}`;
        const emailWindow = window.open(mailtoLink, '_blank');

        if (
            !emailWindow ||
            emailWindow.closed ||
            typeof emailWindow.closed === 'undefined'
        ) {
            // Opening the email client failed
            alert(
                'Failed to open email client. Please check your device settings.'
            );
        }
    };

    return (
        <button
            className={`rounded-full px-8 py-4 ${bg} project-shadow hover:project-shadow-hover hover:bg-teal-400 cursor-pointer text-white ${textSize} font-medium tracking-wider`}
            onClick={handleEmailClick}
        >
            {myEmail}
        </button>
    );
};

export default ContactButton;
