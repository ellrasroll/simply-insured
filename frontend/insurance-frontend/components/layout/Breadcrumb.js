import Link from "next/link";

export default function Breadcrumb({ breadcrumbTitle, backgroundImage, description, ctaText, ctaLink, icon, iconDescription}) {
    return (
        <>
            {/* Page Header Start */}
            <section className="page-header">
                <div
                    className="page-header__bg"
                    style={{
                        backgroundImage: `url(${backgroundImage || 'assets/images/backgrounds/page-header-bg.jpg'})`,
                    }}
                >
                </div>
                <div className="container">
                <div className="page-header__inner">
    {/* Title */}
    <h2>{breadcrumbTitle}</h2>

    {/* Description */}
    {description && <p className="breadcrumb-description">{description}</p>}

    {/* Call-to-Action Button with Icon */}
    {ctaText && ctaLink && (
        <Link href={ctaLink} className="breadcrumb-cta-button">
            {ctaText}
            <img 
                src="/assets/images/icon/arrow-icon.svg" // Replace with the actual path to your arrow icon
                alt="Arrow Icon" 
                className="breadcrumb-cta-icon"
            />
        </Link>
    )}

    {/* Optional Icon with Description */}
    {icon && (
        <div className="breadcrumb-icon-wrapper">
            <img 
                src={icon} 
                alt="Breadcrumb Icon" 
                className="breadcrumb-icon" 
                style={{ marginRight: "8px" }}
            />
            <span className="icon-description">{iconDescription}</span>
        </div>
    )}
</div>
                    </div>
            </section>
            <div className="purple-banner">
            <img src="/assets/images/icon/summary-icon.png" alt="Green Tick" className="tick-icon" />

                    PROTECTION PROMISE - 100% Conditions Covered
                </div>
            {/* Page Header End */}
        </>
    );
}
