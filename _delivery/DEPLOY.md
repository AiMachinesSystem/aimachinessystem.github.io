# Terror Prints Studio — deployment

This is a static app for an HTTPS origin root. Its router uses hash routes; its manifest and service worker use root scope. Build the integrated application before deployment. Keep index.html at the archive root.

The delivery ZIP contains the built static files and these three public-safe notes under _delivery/. It contains no sources, dependencies, local evidence or account details. A SHA-256 file and per-file listing sit beside the ZIP; verify them before upload. Those delivery notes will also be readable if the complete ZIP is published.

## Prepared Cloudflare Pages route

Cloudflare Direct Upload accepts prebuilt assets: the dashboard accepts a folder or ZIP, while Wrangler accepts an asset folder. Use a dedicated Direct Upload project and upload the built app or this ZIP. The same project cannot later switch to Git integration. Account/project creation, upload, custom domains and publication are actions for the authorized root executor. [Official Direct Upload documentation](https://developers.cloudflare.com/pages/get-started/direct-upload/).

Keep HTML, sw.js and unhashed app.js/app.css revalidatable on the host; never configure a long immutable cache for these filenames. Test the actual HTTPS response headers, content types and SW scope after deployment. A prepared ZIP is not proof that hosting is active.

## Prepared Sites route

The local project has not been registered, synchronized or published to Sites. This ZIP is a generic static payload, not a verified Sites source archive. A future authorized root executor must use the installed Sites workflow, obtain a real project ID, prepare its supported source package with static directory dist, and perform/verify the native deployment. No account IDs or hosting configurations are invented here.

## PWA and update check

Service workers need HTTPS, with loopback permitted for development. First load downloads the shell; reopen/reload online until a worker controls the page, then test offline reopening and generation of a built-in model. A new worker waits while older app tabs are open; close those tabs to adopt a complete new version. This avoids mixing geometry, HTML and JS from different builds. Installation UI depends on the browser. [MDN service worker lifecycle and caching](https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API/Using_Service_Workers).

After publication, verify manifest, icon dimensions, offline generation/export, A-to-B update behavior, mobile layout and actual downloads at the deployed URL. Local tests do not certify the host.

## Optional buyer access

This app currently offers local editing, not verified purchase entitlement. A future buyer area needs server-side identity and order/entitlement verification, then authorized asset delivery. A frontend PIN or hidden route cannot protect a downloadable static bundle. Entitlement/session/private API responses must stay outside the static SW allowlist; logout and revocation need their own server and cache policy.

Physical printing, slicer settings and purchase-access qualification remain separate checks.
