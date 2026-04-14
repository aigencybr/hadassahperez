import { ArrowRight } from "lucide-react";
import Link from "next/link";

export function ButaoMCE({ text, link }: { text: string, link: string }) {
    return <Link
        href={link}
        className="btn-grad inline-flex items-center text-[15px] md:text-[20px] gap-2 rounded-full px-[36px] py-[12px] md:px-[40px] md:py-[16px]  tracking-wide text-white"
        style={{
            fontFamily: "var(--font-montserrat)",
            letterSpacing: "0.04em",
            background: "linear-gradient(135deg, #688339 0%, #2f3d18 100%)",
            boxShadow: "0 4px 20px rgba(60,75,35,0.35)",
        }}
        aria-label={text}
    >
        {text}
        <ArrowRight size={16} strokeWidth={2.5} />
    </Link>
}