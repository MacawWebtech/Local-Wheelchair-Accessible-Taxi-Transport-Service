# Kindride customization and integration guide

## 1. Installation
Serve `dist` using a static web server; the package places its contents at the Kindride root. No application build is required. Use HTTPS for clipboard sharing and future API operations.

## 2. File structure
HTML pages live at the public root. Shared styles and scripts are in assets/css and assets/js. Fonts and images are bundled locally. Page-specific styles are separate. Source-check findings are in verification.json; coverage against the requested architecture is in documentation/prompt-audit.md.

## 3. Page structure
Eleven pages are built; five remain pending. The master-prompt audit lists exact status. Menus use six primary links; Blog is reached from the footer. Book Now and Gallery still lead to homepage sections until their dedicated pages are built. Do not create links to missing files.

## 4. Colors
Change --primary in style.css. Black and white are the other two colors. Semantic surface/text/border/status aliases share this palette. Check text and control contrast in both modes; communicate errors and statuses with wording, not color alone.

## 5. Typography
Inter is for headings/controls; Atkinson Hyperlegible is for body text. Root body size is 18px. There is no text-size toggle. Shared heading tokens control page and card scales. Preserve reflow under browser zoom.

## 6. Images
Replace JPGs in assets/images/backgrounds using their exact filenames: home-1-background.jpg, home-2-background.jpg, about-background.jpg, services-background.jpg, service-details-background.jpg, blog-background.jpg, blog-details-background.jpg contact-background.jpg and booking-background.jpg. Use unique landscape photos for the final business. Backgrounds use cover and may crop; keep subjects centered. In-content equipment photos retain natural proportions. Update dimensions and meaningful alt text if replacing them. Remove old credits only when replacing the corresponding licensed images. WebP may be introduced by updating the matching paths and image markup.

## 7. Dark mode
preferences.js detects system preference and restores the selected theme. main.js handles the toggle. All surfaces use variables; never invert photos or rely on overlays to implement dark mode.

## 8. RTL
The RTL button stores reading direction. CSS uses logical inline properties for margins, borders, and alignment. Mirror layout without changing the content's meaning. Verify native controls and all pages independently in RTL and dark mode.

## 9. Booking integration
The homepage request form validates and renders a summary; it sends nothing. The dedicated five-step page is booking.html; it has per-step validation, back/edit navigation, return-time checks and an unconfirmed summary. The server is not connected. integrations.js reserves bookingEndpoint and availabilityEndpoint. A backend must validate route/device capacity, create references, return actual statuses and handle calendar availability atomically. Never treat browser storage as an authoritative booking ledger.

## 10. Map integration
Contact includes a data-integration=google-maps container and a mapsApiKey configuration slot. The current map is explanatory text and a link to a public city search, not a business location or live service map. Restrict a real Google key, load the maps library only when configured, and use verified coverage/addresses. Provide equivalent text information.

## 11. Payments
Stripe and PayPal configuration slots exist but no payment interface or gateway is connected. Do not collect card data directly. Create transactions on a backend, use provider-hosted checkout, and verify payment webhooks before changing booking/payment status.

## 12. Forms and newsletter
Contact defaults to an unconnected prepared enquiry. Set contactEndpoint only to a verified Formspree-compatible or equivalent endpoint accepting multipart data and JSON responses. The script has required/email/phone validation, busy state, success response and error state. Netlify Forms requires deployment on Netlify and its specific form attributes/build processing. Newsletter endpoints for Mailchimp/ConvertKit are reserved; newsletter UI belongs to the later maintenance page. Keep API secrets on a server. Configure and test spam protection, retention, consent and error handling before launch.

## 13. Dashboard
The dashboard is pending. Build around upcoming/completed/cancelled rides, tracking, payments, receipts, saved addresses, accessibility preferences, notifications and account settings. Use real identity/session protection for live data. Tracking and notification endpoints in integrations.js are placeholders only. Do not populate fake live driver/ETA statuses.

## 14. Credits
Bootstrap 5.3.3 (MIT), Lucide icon paths (ISC), Inter/Atkinson fonts (SIL OFL). Equipment photos: John Robert McPherson, CC BY-SA 4.0; Mr.choppers, CC BY-SA 3.0. Exact source/license links remain in each footer. Modified photos retain their license requirements. Business names, contacts, service area and passenger quotations are fictional content, not verified operational claims.

## 15. Changelog
6 October 2026: audited master prompt; added Contact; filled existing-page content gaps; added Blog pagination/article controls; added metadata/crawl files; documented integrations and remaining work. Earlier revisions established homepages, About, Services, Service Details, Blog and Blog Details, sticky menu, hover fixes, image paths, alignment and motion.

## 16. Support and launch checklist
Replace fictional contact/business/vehicle information, unique photos and permissions; build remaining pages; configure verified integrations; update origin-specific metadata and crawl settings. Browser QA must cover four viewport ranges, keyboard/focus, zoom, reduced motion, dark/light, RTL and their combinations. Verify links, forms, hover borders, equal-height groups, image dimensions, overflow and whitespace. Use the user's requested UI-fixing framework for the final completion audit after all pages exist. No performance or accessibility certification is claimed by the current source report.

Booking revision: five-step request planning, explicit unconnected availability/payments/notifications, no persistent passenger data, and Book Now links routed to booking.html. Fleet is the next page pending review.

Fleet revision: gallery.html uses three different equipment views, category filters, and a native photo dialog. Replace assets/images/backgrounds/gallery-background.jpg for the hero. Vehicle photos/capacities are illustrative or unconfirmed; do not claim live fleet availability. Booking help and its pre-ride checklist now occupy separate full-width sections with shared reduced-motion-aware reveals. Pricing is built.

Pricing revision: pricing.html uses a journey quote table, inclusions, additional-charge explanations and FAQs. No invented fixed prices are shown. Replace assets/images/backgrounds/pricing-background.jpg for its header. Pricing now replaces Book Now in the primary menu; the separate booking CTA remains.

Login revision: login.html has email/password validation, remember-me preference input and password visibility control. No credentials are sent or stored; there is no authentication backend. Forgot-password explains recovery is unavailable. Register links to the separate register.html page. Replace assets/images/backgrounds/login-background.jpg for its header. Login is linked from each footer.

Register revision: register.html includes name, email, phone, password confirmation and terms acceptance. Validation is local only; credentials and personal details are not sent or stored, and no account is created. Password fields are cleared after a valid check. Header image: assets/images/backgrounds/register-background.jpg. Customer Dashboard is next after review.

Dashboard: dashboard.html provides overview, filtered ride empty states, tracking integration area, history, payments, local profile validation, notifications, settings and logout status. No real account data, map, payments, or authentication is connected. Profile entries are not sent or stored. Dashboard uses a compact photographic heading; replace assets/images/backgrounds/dashboard-background.jpg. Menu is centered; mobile brand/Menu stack below 480px with 24px vertical gaps.

404 revision: 404.html has Home and booking recovery actions and helpful service/fleet/contact routes. Replace assets/images/backgrounds/404-background.jpg. Shared motion respects reduced motion. Login is inside mobile navigation only below 768px; desktop Login remains separate. Active menu links are bold and underlined; service details selects Services. Footer Explore links use two columns and compact headings. Configure the host to return the 404 page for missing routes; the direct page is provided for review.

Coming Soon: coming-soon.html has an honest launch message, local email/consent validation and contact links. No launch date, mailing subscription or business social account is invented. Configure verified social URLs in integrations.js before adding social links. Header: assets/images/backgrounds/coming-soon-background.jpg. All 16 page types are present; use the Tranzora Digital 5-Step UI framework before the final visual test, as requested. Live integrations and visual QA remain pending.

Login navigation revision: valid email and nonempty password open dashboard.html without storing or transmitting credentials. This does not authenticate a user. Dashboard sections receive reduced-motion-aware reveals and soft hover transitions. Tablet footer pairs Explore and Contact under a compact brand row.


## About page portrait paths

In “THE DETAILS PEOPLE VALUE”, replace these local silhouette files with your portraits (or change each image src in about.html to a JPG/PNG/WebP path):

- assets/images/people/james-miller.png
- assets/images/people/sarah-bennett.png
- assets/images/people/daniel-wilson.png

Square portraits work best. Display size is 64×64px on every viewport. Keep decorative alt empty when the adjacent caption already identifies the person. Uploaded replacements may use different names; update captions and paths together.

## Frontend project scope

This project is an HTML/CSS/JavaScript frontend design. Form validation, booking summaries, filters, carousel controls and login-to-dashboard navigation run locally. Backend authentication, actual booking, payment and live tracking are outside this project’s scope. Business examples are illustrative content, not verified business facts.

Latest spacing revision: stacked mobile cards use natural row heights; desktop rows retain equal height. The dashboard heading panel is centered with equal 30px exterior insets; its sidebar follows the measured sticky header height. Real browser viewport checks remain pending because the required browser capability is unavailable.

Home Page 1 passenger stories now use the same three portrait paths as About. Replacing a file updates both pages; change the src in index.html to a separate file if a different Home portrait is wanted.
