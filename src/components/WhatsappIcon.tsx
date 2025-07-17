import type { SVGProps } from 'react';

export const WhatsappIcon = (props: React.ImgHTMLAttributes<HTMLImageElement>) => (
    <img
        src="/whatsappIco.png"
        alt="WhatsApp Icon"
        width={24}
        height={24}
        {...props}
    />
);
