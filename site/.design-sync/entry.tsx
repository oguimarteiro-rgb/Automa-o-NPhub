// Design-system entry for the NP Hub brand components.
// Hand-authored barrel: exports exactly the reusable brand pieces (no
// page-locked sections, no SmoothScroll behavior wrapper). esbuild bundles
// this into _ds_bundle.js → window.NPHub.
export { BrandSymbol, BrandSymbolBuild } from "../components/BrandSymbol";
export { MagneticButton } from "../components/MagneticButton";
export { EditorialHeader } from "../components/EditorialHeader";
export { WordReveal } from "../components/WordReveal";
export { Loader } from "../components/Loader";
export { ContactForm } from "../components/ContactForm";

// Preview-only escape hatch (NOT a component — absent from componentSrcMap, so
// no card is emitted for it). Static preview capture freezes the clock, which
// leaves framer-motion entrance animations stuck at their `initial` (opacity 0)
// state. This flips the SAME framer instance the components use into
// skip-animations mode so previews render their final/rested state. Real
// designs never call it, so animations stay intact in production usage.
import { MotionGlobalConfig } from "framer-motion";
export function __setPreviewMode(): void {
  MotionGlobalConfig.skipAnimations = true;
}
