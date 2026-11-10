# Advanced Sports Performance — standalone website

Cleaned from the November 9, 2026 Sintra project export.

- ASP pages only: Home, About, Services, Facility, Products, Blog, Events, Contact.
- The About-page Brigid's Flame link points to its independent website.
- Local ASP images and the Brigid's cross-promotion logo are included under `public/images`, avoiding Sintra image hosting.
- Booking links still point to SimplyBook.me.
- **Contact form requires attention:** It opens the visitor's email app with a prefilled message. It does not silently submit a lead. Replace with a proper independent form service before launch if you need web-form submissions.
- The Brevo newsletter iframe remains third-party; test it.
- Keep ASP's current Sintra site and domain unchanged until the Vercel preview is fully tested.
- In Vercel choose Next.js framework, root directory `/`, build command `npm run build` and output `out` if auto-detection needs help.

Upload the *contents* of this ZIP to the root of the `advanced-sports-performance` GitHub repository, not the ZIP itself.
