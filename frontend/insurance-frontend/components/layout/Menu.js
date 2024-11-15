import Link from "next/link";

export default function Menu() {
    return (
        <>
            <ul className="main-menu__list">
                <li className="dropdown">
                    <Link href="/life-insurance">Life Insurance</Link>
                    <ul>
                        <li><Link href="/life-insurance/medical-conditions">Medical Conditions</Link></li>
                        <li><Link href="/life-insurance/occupations-sports">Occupations & Sports</Link></li>
                        <li><Link href="/life-insurance/types-of-cover">Types of Cover</Link></li>
                        <li><Link href="/life-insurance/other-services">Other Services</Link></li>
                    </ul>
                </li>

                <li className="dropdown">
                    <Link href="/income-protection">Income Protection</Link>
                    <ul>
                        <li><Link href="/income-protection/medical-conditions">Medical Conditions</Link></li>
                        <li><Link href="/income-protection/occupations-sports">Occupations & Sports</Link></li>
                        <li><Link href="/income-protection/types-of-cover">Types of Cover</Link></li>
                        <li><Link href="/income-protection/other-services">Other Services</Link></li>
                    </ul>
                </li>

                <li className="dropdown">
                    <Link href="/health-insurance">Health Insurance</Link>
                    <ul>
                        <li><Link href="/health-insurance/medical-conditions">Medical Conditions</Link></li>
                        <li><Link href="/health-insurance/occupations-sports">Occupations & Sports</Link></li>
                        <li><Link href="/health-insurance/types-of-cover">Types of Cover</Link></li>
                        <li><Link href="/health-insurance/other-services">Other Services</Link></li>
                    </ul>
                </li>

                <li className="dropdown">
                    <Link href="/travel-insurance">Travel Insurance</Link>
                    <ul>
                        <li><Link href="/travel-insurance/medical-conditions">Medical Conditions</Link></li>
                        <li><Link href="/travel-insurance/activities-sports">Activities & Sports</Link></li>
                        <li><Link href="/travel-insurance/types-of-cover">Types of Cover</Link></li>
                        <li><Link href="/travel-insurance/other-services">Other Services</Link></li>
                    </ul>
                </li>
                <li className="dropdown">
                    <Link href="/home-insurance">Home Insurance</Link>

                </li>
                <li className="dropdown">
                    <Link href="/news/about">About</Link>
                    <ul>
                    <li><Link href="/news/about">About Us</Link></li>
                        <li><Link href="/blog">Guides</Link></li>

                    </ul>
                </li>
            </ul>
        </>
    )
}
