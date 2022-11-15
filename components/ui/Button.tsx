import {ComponentPropsWithoutRef} from "react";
import {Url, UrlObject} from "url";
import Link from "next/link";

export interface ButtonProps extends ComponentPropsWithoutRef<'button'>{
    href?: UrlObject | string
}

export const Button = (props: ButtonProps) => {
    const {href, ...rest} = props;
    return (
        <>
            {href
                ? <Link href={href}><button className="px-3 py-2 border rounded-full shadow hover:shadow-lg" {...rest} /></Link>
                : <button className="px-2 py-3 border rounded-full shadow hover:shadow-lg" {...rest} />
            }
        </>
    );
}

export default Button;
