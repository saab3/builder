"use client";
import { BuilderComponent, useIsPreviewing } from "@builder.io/react";

export function RenderBuilderContent({ content }) {
  const isPreviewing = useIsPreviewing();

  if (content || isPreviewing) {
    return <BuilderComponent content={content} model="homepage" />;
  }

  return null;
}