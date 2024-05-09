import Github from "../assets/icons/social-media/github";
import Instagram from "../assets/icons/social-media/instagram";
import Ico from "./ico";

const SocialMedia = ({ className }) => {
    const items = [
        {
            link: 'https://github.com/erfanGharib',
            ico: <Github />
        },
        {
            link: 'https://instagram.com/erfan.igh',
            ico: <Instagram />
        },
    ]
    return (
        <div className={`flex items-center ${className}`}>
            <span>با ما در شبکه های اجتماعی</span>
            {items.map(({ link, ico }, index) =>
                <a
                    key={index}
                    href={link}
                    rel="noreferrer"
                    target="_blank"
                    className="transition hover:opacity-60 mr-5"
                >
                    <Ico>
                        {ico}
                    </Ico>
                </a>
            )}
        </div>
    );
}
export default SocialMedia;