const date = new Date();
let currentYear = date.getFullYear();

function Footer() {
    return (
        <footer>{currentYear}</footer>
    )
};

export default Footer;