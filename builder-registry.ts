"use client";
import { builder, Builder } from "@builder.io/react";
import Counter from "./components/Counter/Counter";
import { CustomDataComponent } from "./components/CustomDataProvider/CustomDataProvider";
import ProductCard from "./components/ProductCard/ProductCard";
import ProductsSwiper from "./components/ProductsSwiper/ProductsSwiper";
import { RenderBuilderContent } from "./components/RenderBuilderContent/RenderBuilderContent";
import V4tech from "./components/V4tech/V4tech";

builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY!);

Builder.registerComponent(Counter, {
  name: "Counter",
  inputs: [
    {
      name: "initialCount",
      type: "number",
    },
  ],
});

Builder.registerComponent(V4tech, {
  name: "V4tech",
});

Builder.registerComponent(RenderBuilderContent, {
  name: "RenderBuilderContent",
});

Builder.registerComponent(ProductsSwiper, {
  name: "ProductsSwiper",
});

Builder.registerComponent(ProductCard, {
  name: "ProductCard",
});

Builder.registerComponent(CustomDataComponent, {
  name: "CustomDataComponent",
});
