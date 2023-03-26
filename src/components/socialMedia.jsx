import Ico from "./ico";
import { ReactComponent as IcoInstagram} from '../assets/icons/social-media/instagram.svg';
import { ReactComponent as IcoGithub} from '../assets/icons/social-media/github.svg';

const SocialMedia = ({ className }) => {
    const items = [
        {
            link: 'https://github.com/erfanGharib',
            ico: <IcoGithub />
        },
        {
            link: 'https://instagram.com/erfan.igh',
            ico: <IcoInstagram />
        },
    ]
    return (
        <div className={`flex gap-5 items-center ${className}`}>
            <span>با ما در شبکه های اجتماعی</span>
            {items.map(({ link, ico }, index) =>
                <a
                    key={index}
                    href={link}
                    rel="noreferrer"
                    target="_blank"
                    className="transition hover:opacity-60"
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