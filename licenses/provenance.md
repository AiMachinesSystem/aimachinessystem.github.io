# Local license and font provenance

The complete license files below were copied byte-for-byte from the existing pet-name-gift-kit prototype. Sources are home-relative paths; no upstream commit is inferred. Package versions were read from the source package metadata. Links identify the URLs recorded in the source license/package metadata; this build does not fetch them.

| Component | Observed version | License file | Source (home-relative) | SHA-256 |
|---|---|---|---|---|
| Nunito | font release not pinned; OFL 1.1 | [Nunito-OFL.txt](Nunito-OFL.txt) | workspaces/shared/progetti/pet-name-gift-kit/2026-10-10/.work/OFL-Nunito.txt | 580df76c95a1ec5ab878ceb25bb3d85c6a076804e9c970c8c6972aea775fdf65 |
| three | 0.186.1 | [three-LICENSE.txt](three-LICENSE.txt) | workspaces/shared/progetti/pet-name-gift-kit/2026-10-10/.work/node_modules/three/LICENSE | 8b378ebe60e2fe500158cb0ac71cb5e8b7d92953c2abcc63a0eb90499653b5bc |
| manifold-3d | 3.5.4 | [manifold-3d-LICENSE.txt](manifold-3d-LICENSE.txt) | workspaces/shared/progetti/pet-name-gift-kit/2026-10-10/.work/node_modules/manifold-3d/LICENSE | c71d239df91726fc519c6eb72d318ec65820627232b2f796219e87dcf35d0ab4 |
| esbuild | 0.28.2 | [esbuild-LICENSE.txt](esbuild-LICENSE.txt) | workspaces/shared/progetti/pet-name-gift-kit/2026-10-10/.work/node_modules/esbuild/LICENSE.md | b40ec5baec7bb34fa5b1c09521fa3cd52d5fad7adafed74932a2010d3612a681 |

Known project URLs: [Nunito](https://github.com/googlefonts/nunito), [three](https://github.com/mrdoob/three.js), [manifold-3d](https://github.com/elalish/manifold), [esbuild](https://github.com/evanw/esbuild).

Nunito is OFL 1.1. The existing make-font.py instantiated the variable font at weight 900 and converted it into the offline glyph contours used by the prototype. The precise upstream font release and commit remain unpinned. The actual font and glyph data are owned by activity 02; this activity copies license text only.

| Prior font input / conversion source | Bytes | SHA-256 |
|---|---:|---|
| workspaces/shared/progetti/pet-name-gift-kit/2026-10-10/.work/Nunito.ttf | 276932 | bb55a5ca5c2042335b3991af27c4d0705d0ef41cac6164ac737fd8f2a1e85207 |
| workspaces/shared/progetti/pet-name-gift-kit/2026-10-10/.work/glyphs.json | 326526 | a6f48b3d449a3151c50f235fe5698ae32ef1f0cac192fcbacc1aeb2b692e0b8c |
| workspaces/shared/progetti/pet-name-gift-kit/2026-10-10/.work/make-font.py | 1837 | 44f4ec7419d239101a273ed4180b46468d811438c88020f7f15d9cb6ffc69d43 |

Observed app/src/data/glyphs.json SHA-256: a6f48b3d449a3151c50f235fe5698ae32ef1f0cac192fcbacc1aeb2b692e0b8c. Its bytes match the prior prototype glyph data.

esbuild is a local build dependency; its MIT license is included for redistribution clarity even though the compiler is not part of the browser runtime.
