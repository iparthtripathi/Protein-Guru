'use client';
import { useEffect } from 'react';
import Lenis from 'lenis';
export default function SmoothScroll() {
  useEffect(() => {
    const lenis = new Lenis({ duration: 1.2, smoothWheel: true, wheelMultiplier: 0.9 });
    let raf:number; const loop=(t:number)=>{ lenis.raf(t); raf=requestAnimationFrame(loop); };
    raf = requestAnimationFrame(loop);
    return () => { cancelAnimationFrame(raf); lenis.destroy(); };
  }, []);
  return null;
}
