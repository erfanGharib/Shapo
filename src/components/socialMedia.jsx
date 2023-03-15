import { useState } from "react";
import { Link } from "react-router-dom";
import Ico from "./ico";
import icoInstagram from '../assets/icons/social-media/instagram.svg';
import icoGithub from '../assets/icons/social-media/github.svg';

const SocialMedia = () => {
    const items = [
        {
            link: 'https://github.com/erfanGharib',
            ico: icoGithub
        },
        {
            link: 'https://instagram.com/erfan.igh',
            ico: icoInstagram
        },
    ]
    return (
        <div className="flex gap-5 px-3 flex-wrap">
            <span>با ما در شبکه های اجتماعی</span>
            {items.map(({ link, ico }, index) =>
                <a
                    key={index}
                    href={link}
                    rel="noreferrer"
                    target="_blank"
                    className="transition hover:opacity-60"
                >
                    <Ico src={ico} />
                </a>
            )}
        </div>
    );
}
export default SocialMedia;