"use client";

import dynamic from "next/dynamic";
import { ComponentType } from "react";

const Fallback = () => (
  <div className="w-full h-full flex items-center justify-center">
    <div className="relative w-16 h-16">
      <div className="absolute inset-0 rounded-full border-2 border-white/10" />
      <div className="absolute inset-0 rounded-full border-2 border-transparent border-t-brand-500 animate-spin" />
    </div>
  </div>
);

export const LazyHeroScene = dynamic(() => import("./HeroScene"), {
  ssr: false,
  loading: () => <Fallback />,
}) as ComponentType<{}>;

export const LazyStarfield = dynamic(() => import("./Starfield"), {
  ssr: false,
}) as ComponentType<{}>;

export const LazyGlobe = dynamic(() => import("./Globe"), {
  ssr: false,
  loading: () => <Fallback />,
}) as ComponentType<{}>;

export const LazyTechCloud = dynamic(() => import("./TechCloud"), {
  ssr: false,
  loading: () => <Fallback />,
}) as ComponentType<{}>;

export const LazyAboutScene = dynamic(() => import("./AboutScene"), {
  ssr: false,
  loading: () => <Fallback />,
}) as ComponentType<{}>;
