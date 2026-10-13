# Terror Prints Studio — provenance

The built application comes from the shared Terror Prints Studio project. The static archive is assembled only from the integrated dist tree and the three dedicated delivery notes. Source maps, development folders, hidden files, symlinks/junctions, database files and likely credentials cause package rejection.

The manifest and service worker were implemented for the origin-root deployment contract. The build substitutes a SHA-256 content version and a static precache allowlist. Its digest includes the original worker source; a worker-only correction therefore creates a different content version. Build metadata has no local absolute paths or timestamps.

The icon source is the original vector icons/terrorprints.svg, using sage #6E8072, cream #F5F0E6 and dark #26362D. PNG outputs are 192 and 512 pixels. A local Sharp rasterizer was used; no remote image service was called.

The archive uses sorted UTF-8 file names, ZIP store method, fixed timestamp 1980-01-01 00:00 and Unix 0644 metadata. Equal input bytes produce the same archive bytes. SHA-256 and per-file hashes accompany the archive outside it.

This package records preparation. It does not claim publication, verified purchases, physical-print qualification or installed-browser/offline success. Runtime acceptance evidence remains in the owning project and is not included in this public package.
