/* *******************our galert at a glance********************** */
.design-gallery-section {
    background-color: var(--bg2-color);
}

.gallery-col {
    transition: all 0.5s ease-in-out;
}

.gallery-item {
    display: block;
    text-decoration: none;
    cursor: pointer;
    border-radius: 12px;
    overflow: hidden;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);
    position: relative;
    z-index: 1;
}

.gallery-image-wrapper {
    width: 100%;
    overflow: hidden;
    position: relative;
}

@media (min-width: 992px) {
    .gallery-image-wrapper {
        aspect-ratio: 4/3;
        height: 400px;
    }
}

@media (max-width: 991.98px) {
    .gallery-image-wrapper {
        height: auto;
        aspect-ratio: 1/1;
    }
}

.gallery-item img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
    transition: transform 0.3s ease-in-out;
}

.gallery-item:hover img {
    transform: scale(1.03);
}

/* --- TITLES/TEXT --- */
.gallery-item-title {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    padding: 1rem;
    color: var(--white);
    font-size: 18px;
    font-weight: 600;
    background: linear-gradient(to top, rgba(0, 0, 0, 0.7), transparent);
    text-align: center;
}

.gallery-item.is-active img {
    transform: scale(1.08);
}



/* *******************testimonials section code******************* */

.testimonials-section {
    background-color: var(--bg2-color);
    position: relative;
    overflow: hidden;
}

.testimonials-section:before {
    aspect-ratio: 8/1;
    content: "";
    position: absolute;
    inset: 0;
    background-image: url("../images/icon-three.webp");
    background-size: contain;
    background-repeat: no-repeat;
    background-position: left;
    animation: bounceY 4s ease-in-out infinite;
    z-index: 0;
    top: 4%;
    opacity: 0.3;
}

@media (max-width: 768px) {
    .testimonials-section:before {
        position: absolute;
        inset: 0;
        background-repeat: no-repeat;
        background-position: left;
        top: 7%;
    }
}

.mySwiper {
    padding-bottom: 40px;
}

.swiper-slide {
    height: auto;
}

.testimonial-card {
    background-color: var(--bg1-color);
    border-radius: var(--radius);
    padding: 2rem;
    height: 100%;
    position: relative;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);
    border: 1px solid var(--bg1-color);
}

.testimonial-card p {
    display: -webkit-box;
    -webkit-line-clamp: 5;
    -webkit-box-orient: vertical;
    overflow: hidden;
    font-size: var(--para-size);
    color: var(--para-color);
    line-height: 1.6;
}

.testimonial-card::after {
    content: "";
    position: absolute;
    bottom: -19px;
    left: 40px;
    width: 0;
    height: 0;
    border-left: 20px solid transparent;
    border-right: 20px solid transparent;
    border-top: 20px solid #ffffff;
    filter: drop-shadow(0 2px 2px rgba(0, 0, 0, 0.02));
}


/* Star Rating Display (Read-only / Testimonial View) */

.unique-star-rating {
    display: flex;
    align-items: center;
    gap: 4px;
}

.unique-starM {
    position: relative;
    font-size: 22px;
    color: var(--border-light);
    display: inline-block;
}

/* Default empty star */
.unique-starM::before {
    content: "★";
}

.unique-starM.full::before {
    color: #ff1906;
}

.unique-starM.half::before {
    content: "★";
    background: linear-gradient(90deg, #ff1906 50%, #c5c5c5 50%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}

/* reivew page star******* */
.review-wrapper{
    background: var(--bg2-color);
}
.review-card__form-section{
    /* background-attachment: var(--bg1-color); */
    padding: 20px;
    background: linear-gradient(145deg, #ffffff 50%, #eae0e0 50% );


}


.unique-star-ratingR {
    display: flex;
    align-items: center;
    gap: 4px;
}

.unique-starR {
    position: relative;
    font-size: 30px;
    color: var(--border-light);
    display: inline-block;
}

/* Default empty star */
.unique-starR::before {
    content: "★";
}

/* Full star */
.unique-starR.full::before {
    color: #ff1906;
    /* orange */
}

/* Half star: use gradient mask */
.unique-starR.half::before {
    content: "★";
    background: linear-gradient(90deg, #ff1906 50%, #c5c5c5 50%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}


/* ******************************faq section code ***************************** */

.faq-container {
    background-color: var(--bg1-color);
    /* position: relative;
    overflow: hidden; */
}

/* .left-section {
    padding: 10px;
    min-height: 1px !important;
    transition: min-height 0.3s ease;
} */

/* .faq-container:before {
    aspect-ratio: 4/1;
    content: "";
    position: absolute;
    inset: 0;
    background-image: url("https://media.istockphoto.com/id/1271371970/vector/god-of-thunder-hammer-mjolnir-vector-design-inspiration-or-illustration-template.jpg?s=612x612&w=0&k=20&c=PATkYyyuapzj8d4VOvldBT8ePQmIe8iYJa2Ok1eWNic=");
    background-size: contain;
    background-repeat: no-repeat;
    background-position: left;
    animation: bounceY 4s ease-in-out infinite;
    z-index: 0;
    top: -10%;
    opacity: 0.3;
} */

.faq-img-sec img {
    width: 100%;
    aspect-ratio: 4/3;
}


.faq-title {
    font-size: var(--title-size);
    font-weight: 600;
    color: var(--heading-color);
    margin-bottom: 10px;
    line-height: 1.2;
}

.right-section {
    flex: 1;
    padding: 40px;
}

.faq-item {
    position: relative;
    margin-bottom: 10px;
    /* border-radius: 5px; */
    /* border-right: 100px solid var(--primary-color); */
    box-shadow: 0 1px 0 rgba(0, 0, 0, 0.05);
}

.faq-item:last-child {
    border-bottom: none;
}

.faq-question {
    background: var(--bg1-color);
    /* background-color: transparent; */
    border: none;
    padding: 18px 40px 18px 10px;
    font-size: var(--heading-size);
    font-weight: 500;
    color: var(--header-color);
    cursor: pointer;
    width: 100%;
    text-align: left;
    position: relative;
    transition: all 0.3s ease;
    box-shadow: 5px 5px 27px rgba(0, 0, 0, 0.1);
}

.faq-question::after {
    content: "\f107";
    font-family: "Font Awesome 6 Free";
    font-weight: 900;
    position: absolute;
    right: 3%;
    top: 50%;
    transform: translateY(-50%) rotate(-90deg);
    transition: transform 0.3s ease;
    font-size: 16px;
    color: var(--dark-text);
}

.faq-answer {
    max-height: 0;
    overflow: hidden;
    transition: 0.3s ease;
    padding: 0;
    color: var(--para-color);
    font-size: var(--para-size);
    line-height: 1.6;
}

/* Active states */

.faq-item.active .faq-question::after {
    transform: translateY(-50%) rotate(0deg);
    background-color: var(--hover-color2);
    padding: 5px 10px;
}

.faq-item.active .faq-answer {
    max-height: 200px;
    padding: 5px 10px 5px 10px;
    background-color: var(--bg2-color);
}

@media (max-width: 768px) {
    .faq-wrapper {
        flex-direction: column;
    }

    .left-section {
        flex: none;
        padding: 30px 20px;
    }

    .right-section {
        padding: 30px 20px;
    }

    .faq-title {
        font-size: 28px;
    }
}



/* *******************************blog section code***************************** */
.blog-section {
    background-color: var(--bg1-color)
}

.blog-card {
    background-color: var(--bg1-color);
    border-radius: var(--radius);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
}

.blog-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.08);
}

.card-img-wrapper {
    position: relative;
}


.card-img-wrapper .card-img-top {
    width: 100%;
    height: auto;
    aspect-ratio: 4/3;
    object-fit: cover;
}

.date-badge {
    position: absolute;
    bottom: 15px;
    left: 15px;
    background-color: var(--primary-color);
    color: var(--white);
    border-radius: var(--radius);
    padding: 8px 10px;
    text-align: center;
    font-weight: 600;
    font-size: 14px;
    line-height: 1.1;
}

.date-badge span {
    font-size: 18px;
    display: block;
}

.blog-card-body {
    padding: 25px;
    flex-grow: 1;
    display: flex;
    flex-direction: column;
}

.card-title-wrapper {
    margin-bottom: 0.75rem;
}

.card-title-wrapper .card-title {
    font-size: var(--heading-size);
    font-weight: 600;
    color: var(--heading-color);
    line-height: 1.3;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    margin-bottom: 1px;
    -webkit-box-orient: vertical;
    text-decoration: none;
}

.card-title:hover {
    color: var(--hover-color);
}

.card-text-wrapper {
    flex-grow: 1;
    margin-bottom: 1rem;
}

.card-text-wrapper .card-text {
    color: var(--para-color);
    font-size: var(--para-size);
    line-height: 1.4;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
}


/* *******************seo content section code********************* */
.section-highlight {
    background: var(--bg2-color);
}

.seosection {
    background: var(--gradient1-color);
}

.feature-copy {
    position: relative;
    font-size: 20px;
    line-height: 1.6;
    padding: 20px;
    overflow: hidden;
    background-color: rgba(207, 231, 233, 0.9);
}

.feature-copy .seo-content61 {
    max-height: 456px;
    overflow: hidden;
    transition: max-height 0.5s ease;
    z-index: 2;
}

.seo-content61 h1,
.seo-content61 h2,
.seo-content61 h3,
.seo-content61 h4,
.seo-content61 h5,
.seo-content61 h6,
.seo-content61 p,
.seo-content61 li,
.seo-content61 ul {
    color: var(--para-color);
}

.scrollcard {
    aspect-ratio: 1/1;
    width: 100%;
    height: auto;
}

/* Hidden checkbox */

.read-more-toggle {
    display: none;
}

.read-more-toggle:checked~.seo-content61 {
    overflow-y: auto;
    scrollbar-width: thin;
    /* for Firefox */
    scrollbar-color: var(--primary-color) transparent;
    /* for Firefox */
    scroll-behavior: smooth;
    /* smooth scroll effect */
}

/* For Chrome, Edge, Safari */

.read-more-toggle:checked~.seo-content61::-webkit-scrollbar {
    width: 6px;
    /* scrollbar thickness */
}

.read-more-toggle:checked~.seo-content61::-webkit-scrollbar-track {
    background: transparent;
    /* track background */
}

.read-more-toggle:checked~.seo-content61::-webkit-scrollbar-thumb {
    background: var(--primary-color);
    /* scrollbar color */
    border-radius: 10px;
    /* rounded edges */
}

.read-more-toggle:checked~.seo-content61::-webkit-scrollbar-thumb:hover {
    background: var(--secondary-color);
    /* color on hover */
}

/* Read more button */

.read-more-btn {
    display: block;
    text-align: left;
    /* button floats right side */
    margin-top: 10px;
    color: var(--light-color);
    font-size: var(--heading-size);
    cursor: pointer;
    transition: color 0.3s;
}

/* Toggle text dynamically */

.read-more-btn::after {
    content: "Show More...";
    color: var(--secondary-color);
    font-size: var(--para-size);
}

.read-more-btn:hover::after {
    color: var(--dark-text);
    font-weight: 700;
}

.read-more-btn:hover::before {
    color: var(--primary-color);
}

.read-more-toggle:checked~.read-more-btn::after {
    content: "Show Less...";
    color: var(--light-color);
    font-size: var(--para-size);
}

.hero-composition-wrapper {
    position: relative;
    width: 100%;
    background: var(--gradient1-color);

}

.product-card-hoodie {
    aspect-ratio: 1/1;
    border-radius: 12px;
    padding: 0;
    overflow: hidden;
    position: absolute;
    top: -60px;
    left: 10%;
    max-width: 450px;
    max-height: 315px;
    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.05);
    z-index: 2;
}

.product-card-tshirt {
    aspect-ratio: 1/1;
    border-radius: 12px;
    padding: 0;
    overflow: hidden;
    position: absolute;
    bottom: -55px;
    right: 10%;
    max-width: 450px;
    max-height: 315px;
    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.08);
    z-index: 3;
}

.product-img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    /* Mix-blend-mode helps placeholder images blend better if they have white bg */
    mix-blend-mode: multiply;
}

.cta-btn-custom {
    position: absolute;
    top: 120px;
    right: 10%;
}

@media (max-width: 991.98px) {
    .hero-composition-wrapper {
        min-height: auto;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 30px;
        padding: 40px 0;
    }
}

/******************* insta section code******************* */
.insta-section {
    background-color: var(--bg2-color);
}

.swiper {
    width: 100%;
}

.insta-card {
    position: relative;
    display: block;
    overflow: hidden;
    border-radius: 12px;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.05);
    aspect-ratio: 1/1;
}

.insta-img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
    transition: transform 0.5s ease;
}

.insta-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(168, 225, 231, 0.6);
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0;
    transition: all 0.3s ease-in-out;
    z-index: 2;
}

.insta-overlay svg {
    font-size: 2.5rem;
    color: #fff;
    transform: translateY(20px);
    transition: transform 0.3s ease;
}

.insta-card:hover .insta-overlay {
    opacity: 1;
}

.insta-card:hover .insta-overlay svg {
    transform: translateY(0);
}

.insta-card:hover .insta-img {
    transform: scale(1.1);
    /* Subtle zoom effect */
}

/************ our parner sectin code/******************** */
.partners-section {
    background-color: var(--bg2-color);
}

/* --- Swiper Marquee Styling --- */
.swiper-container-wrapper {
    width: 100%;
    padding: 20px 0;
    position: relative;
}

/* CRITICAL: This makes the animation continuous linear flow 
           instead of "slide-stop-slide"
        */
.swiper-wrapper {
    transition-timing-function: linear !important;
}

/* Logo Card Styling */
.partner-card {
    background: #fff;
    border: 1px solid #eee;
    border-radius: 8px;
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 15px;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.03);
    /* Ensure images don't overflow */
    overflow: hidden;
    /* Disable selection for smoother dragging */
    user-select: none;
}

.partner-logo {
    max-width: 100%;
    max-height: 100%;
    object-fit: contain;
}

.slider-gap {
    margin-top: 30px;
}

/**************** ABOUT SERVICE SECTION CODE************ */
.services-section {
    background-color: var(--bg2-color);
}

.service-item {
    padding: 10px;
    transition: transform 0.3s ease;
    background-color: var(--bg1-color);
}

.service-item:hover {
    transform: translateY(-5px);
}

.icon-boxabout img {
    width: 90px;
    height: 90px;
    background-color: var(--bg1-color);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto 25px auto;
    color: var(--secondary-color);
    font-size: 2.2rem;
    /* Icon size */
    transition: background-color 0.5s ease;
}

.service-item:hover {
    box-shadow: 0 8px 28px rgba(215, 117, 36, 0.15);

}

/* *********************category page section code************************** */
.lab-section {
    background-color: var(--bg2-color);
}

.content-section {
    width: 100%;
}

.left-content-wrapper {
    float: right;
    max-width: 400px;
    width: 100%;
    margin-left: 1.5rem;
    margin-bottom: 1rem;
    /* border: 1px solid var(--secondary-color); */
}

.image-container {
    aspect-ratio: 1/1;
    position: relative;
    width: 100%;
    padding-bottom: 100%;
    overflow: hidden;
    border-radius: 0;
    margin-bottom: 20px;
}

.image-container img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.product-description p,
.product-description li,
.product-description ul {
    line-height: 1.6;
    text-align: justify;
    margin-bottom: 6px;
}

.button-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
}


/* ************************BLOG DETIL PAGE SECTION************************************ */
.blog-section105 {
    background-color: var(--bg2-color);
}

.main-content105 {
    background-color: var(--bg1-color);
    padding: 2rem;
    border: 1px solid var(--border-color);
}

.blog-title-wrapper105 {
    display: flex;
    align-items: flex-start;
    gap: 0.75rem;
    margin-bottom: 10px;
}

.blog-title105 {
    font-size: 2.25rem;
    font-weight: 900;
    color: var(--heading-color);
}

.blog-image105 {
    width: 100%;
    aspect-ratio: 16 / 9;
    object-fit: cover;
    border-radius: var(--radius);
    margin-bottom: 2rem;
}

.post-dateX {
    font-size: var(--para-size);
    color: var(--secondary-color);

}

.sidebar105 .widget105 {
    background-color: var(--bg1-color);
    padding: 1.5rem;
    border: 1px solid var(--bg2-color);
}

.widget-title105 {
    font-size: var(--heading-size);
    font-weight: 600;
    color: var(--primary-color);
    padding-bottom: 0.75rem;
    margin-bottom: 10px;
    border-bottom: 1px solid var(--primary-color);
}

.related-blogs-list105 {
    list-style: none;
    padding: 0;
    margin: 0;
}

.related-post-item105 {
    display: flex;
    gap: 1rem;
}

.related-post-item105:not(:last-child) {
    margin-bottom: 1rem;
}

.related-post-item105 img {
    aspect-ratio: 4 / 3;
    width: 100%;
    height: auto;
    border-radius: var(--radius)
}

.related-post-item105 .post-title105 {
    font-weight: 500;
    line-height: 1.4;
    font-size: 18px;

}

.related-post-item105 .post-title105 a {
    text-decoration: none;
    color: var(--heading-color);
    transition: color 0.3s ease;
}

.related-post-item105 .post-title105 a:hover {
    color: var(--hover-color1);
}


.category-item-link {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px 20px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius);
    text-decoration: none;
    color: var(--primary-color);
    font-weight: 400;
    font-size: var(--heading-size);
    transition: all 0.3s ease;
    background-color: var(--bg2-color);
}

.category-item-link:hover {

    background-color: var(--secondary-color);
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
    color: var(--light-color);
}

 .blog-meta-wrapper5 {
            width: 100%;
            background: #fff;
        }

        /* --- Left Side: Category & Date --- */
        .blog-cate5 {
            padding-left: 0;
            list-style: none;
            display: flex;
            align-items: center;
            flex-wrap: wrap;
            gap: 20px; /* Space between Category pill and Date text */
            margin: 0;
        }

        .blog-cate5 li {
            font-size: 15px;
            color: var(--heading-color);
            display: flex;
            align-items: center;
        }

        /* 1. Category Badge (Lead Generation) */
        .blog-cate5 li.category5 a {
            text-decoration: none;
            border-radius: 50px; /* Pill shape */
            color: var(--white); /* Red Text */
            font-weight: 500;
            padding: 8px 20px;
            background-color: var(--primary-color); /* Light Pink Background */
            transition: background 0.3s;
            display: inline-block;
            line-height: 1;
        }
        
        /* 2. Date Section */
        .blog-cate5 li.date5 {
            color: var(--heading-color);
            font-weight: 400;
        }

        .blog-cate5 li.date5 b {
           
            margin-right: 4px;
            margin-left: 4px;
           
        }
        
        /* The Calendar Icon */
        .blog-cate5 li svg.bi-calendar-check {
            color: var(--primary-color); /* Red Icon */
            width: 18px;
            height: 18px;
            margin-right: 8px;
            margin-top: -2px;
        }

        /* --- Right Side: Share Section --- */
        .share-section5 {
            display: inline-flex;
            align-items: center;
            gap: 10px;
            color: var(--heading-color);
            font-weight: 500;
            font-size: 16px;
        }

        .share-section5 span {
            margin-right: 5px;
        }
        .share-section5 a {
            width: 32px;
            height: 32px;
            display: flex;
            align-items: center;
            justify-content: center;
            color: white;
            border-radius: 50%; 
            text-decoration: none;
            transition: transform 0.2s;
        }

        .share-section5 a:hover {
            transform: translateY(-2px);
        }

        /* Mobile responsiveness */
        @media (max-width: 768px) {
            .d-flex.justify-content-between {
                justify-content: flex-start !important;
                gap: 15px !important;
            }
        }


@media (max-width: 767.98px) {
    .main-content105 {
        padding: 1.5rem;
    }
}

            /*************************** privacy policy content********************** */

.privacy-container {
    background-color: var(--bg2-color);
}


.privacy-container a {
    font-size: var(--para-size);
    color: var(--primary-color);
}

.privacy-box{
    padding: 20px;
    background: var(--bg1-color);
}

   /* *****************************siteMap Section code**************************** */
.sitemap-section {
    
    background: var(--bg2-color);

}
.sitemapbox{
    padding: 20px;
    background: var(--bg1-color);
}
.sitemap-section .sitempheading {
    font-size: var(--heading2-size);
    font-weight: 600;
    margin-bottom: 20px;
    border-bottom: 3px solid var(--secondary-color);
    display: inline-block;
    padding-bottom: 5px;
    color: var(--header-color);
}

.sitemapcon {
    list-style: none;
    padding-left: 0;
    margin: 0;
    font-size: var(--para-size);
}

.sitemapcon>li {
    position: relative;
    margin: 10px 0;
    padding-left: 20px;
}

.sitemapcon>li::before {
    content: "";
    position: absolute;
    top: 0;
    left: 8px;
    bottom: 0;
    border-left: 2px solid var(--primary-color);
}

.sitemapcon>li::after {
    content: "";
    position: absolute;
    top: 12px;
    left: 8px;
    width: 10px;
    border-top: 2px solid var(--primary-color);
}

.sitemapcon a {
    text-decoration: none;
    color: var(--para-color);
    font-size: var(--para-size);
    transition: color 0.2s;
}

.sitemapcon a:hover {
    color: var(--hover-color1);
    font-weight: 600;
}

.sitemapsubcat {
    list-style: none;
    margin: 5px 0 5px 20px;
    padding-left: 15px;
    border-left: 2px solid var(--primary-color);
}

.sitemapsubcat li {
    position: relative;
    margin: 10px 0;
    padding-left: 15px;
}

.sitemapsubcat li::before {
    content: "";
    position: absolute;
    top: 12px;
    left: -15px;
    width: 15px;
    border-top: 2px solid var(--primary-color);
}

@media (max-width: 767px) {
    .sitemap-section {
        padding: 20px 10px;
    }
    .sitemap-section .you_may {
        font-size: 16px;
    }
    .sitemapcon {
        font-size: 13px;
    }
}


/* ****************market area section code ************** */

.market-area {
    background: var(--bg2-color)
}

.Marektheading {
    text-align: center;
    margin-bottom: 30px;
}

.Marektheading {
    font-size: var(--title-size);
    font-weight: 600;
    color: var(--heading-color);
}

.market-area h2 {
    font-size: var(--heading2-size);
    font-weight: 600;
    margin: 30px 0 15px;
    color: var(--heading-color);
    border-left: 5px solid var(--primary-color);
    padding-left: 10px;
}

.marketcard {
    display: block;
    text-align: center;
    padding: 12px 10px;
    border-radius: var(--radius);
    background: var(--bg1-color);
    box-shadow: 0 4px 10px rgba(59, 59, 59, 0.1);
    font-size: 16px;
    color: var(--heading-color);
    text-decoration: none;
    transition: all 0.3s ease;
}

.marketcard:hover {
    color: var(--white);
    transform: translateY(-3px);
    background-color: var(--primary-color);
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}


/* **************************CONTACT US PAGE SECTION************************* */

.contact-info-section {
  background-color: var(--bg2-color);
}

.info-card {
  background-color: var(--bg1-color);
  padding: 1.5rem 1.5rem;
  border-radius: var(--radius);
  box-shadow: 0 4px 25px rgba(0, 0, 0, 0.07);
  text-align: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.info-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.1);
}

.info-card hr {
  width: 370px;
  margin: 1rem auto;
  border-width: 2px;
  color: var(--secondary-color);
  opacity: 1;
}

.info-card .icon svg {
  color: var(--primary-color);
}

.info-card p {
  color: var(--para-color);
  font-size: var(--para-size);
  line-height: 1.6;
  margin-bottom: 0.3rem;
}

.info-card p a {
  text-decoration: none;
  color: var(--para-color);
}

.info-card p a:hover {
  color: var(--hover-color1);
  font-weight: 500;
}

.contact-section {
  background-color: var(--bg1-color);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.07);
}

/* --- Map Styling --- */

.leftsection-Map {
  box-shadow: 0 7px 20px rgba(0, 0, 0, 0.3);
}

.map-container {
  height: 100%;
  min-height: 400px;
}

.map-container iframe {
  width: 100%;
  height: 100%;
  border: 0;
}

/* --- Form Styling --- */

.leftsection-contact {
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
  padding: 30px 30px;
}


.faq-section62{
            background-color: var(--bg1-color);
            padding: 6px 0px 56px 0px;
        }
        
        /* --- Bootstrap Nav Tabs Styling --- */
        .faq-nav-tabs {
            border-bottom: none;
            justify-content: center;
        }
        .nav-link{
            margin-bottom: 5px;
        }
        .faq-nav-tabs .nav-link {
            border: none;
            color: var(--white);
            background-color: var(--primary-color);
            border-radius: var(--radius);
            padding: 0.5rem 1.5rem;
            font-weight: 500;
            margin: 0.5rem;
            transition: all 0.2s ease-in-out;
        }
        .faq-nav-tabs .nav-link:hover{
            background: var(--hover-color1);
        }
        .faq-nav-tabs .nav-link.active {
            color: var(--white);
            background-color: var(--hover-color1);
        }
        
        
        .custom-accordion-item {
           
            
            border-radius: 0.75rem;
            box-shadow: 0 2px 8px rgba(0, 0, 0, 0.20);
            margin-bottom: 1rem;
            padding: 1.25rem 1.5rem;
        }
        .custom-accordion-question {
            font-weight: 500;
            color: var(--heading-color);
            cursor: pointer;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
        .custom-accordion-answer {
            max-height: 0;
            overflow: hidden;
            color: var(--para-color);
            transition: max-height 0.3s ease-in-out, padding-top 0.3s ease-in-out;
        }
        
        /* Active State (Toggled by JavaScript) */
        .custom-accordion-item.active .custom-accordion-question {
            font-weight: 600;
            color: var(--primary-color);
        }
        .custom-accordion-item.active .custom-accordion-answer {
            max-height: 200px;
            padding-top: 0.75rem;
            font-size: var(--para-size);

        }
        
        /* Plus/Minus Icon */
        .icon-toggle {
           width: 1.75rem;
    height: 1.75rem;
    background-color:var(--primary-color);  
    color: var(--white);           
    font-weight: bold;
    font-size: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: var(--radius); 
    cursor: pointer;
        }
        .custom-accordion-item.active .icon-toggle {
              background-color: var(--hover-color1); 
    background-image: none; 
              }

              .custom-accordion-item.active .icon-toggle::after {
    content: "−";  /* minus sign */
}

/* Default state: show plus */
.icon-toggle::after {
    content: "+";  /* plus sign */
}


.faq-redesign-section {
  background-color: var(--bg1-color);
}

.faq-nav-vertical .nav-link {
  font-size: var(--heading-size);

  font-weight: 500;

  color: var(--heading-color);

  padding: 1rem;

  border: none;

  border-top: 1px solid var(--primary-color);

  border-radius: 0;

  position: relative;

  background: var(--bg2-color);

  transition: none;
}

.faq-nav-vertical .nav-link:first-child {
  border-top: none;
}

/* Style for the active nav link */

.faq-nav-vertical .nav-link.active {
  color: var(--primary-color);

  background-color: var(--bg1-color);

  border-left: 2px solid var(--primary-color);

  font-weight: 600;

  padding-left: 2.25rem;
}

.faq-nav-vertical .nav-link.active {
  border-top-color: transparent;
}

.faq-tab-content {
  background-color: var(--bg2-color);
}
