"use client";
import { Product } from "@/types/product";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useState } from "react";
import AISummary from "@/components/AISummary";

export default function ProductDetailsDescription({
  product,
}: {
  product: Product;
}) {
  const [activeTab, setActiveTab] = useState("description");

  return (
    <>
      <Tabs
        value={activeTab}
        onValueChange={setActiveTab}
        className="min-h-[200px] mt-4"
      >
        <TabsList>
          <TabsTrigger value="description">Description</TabsTrigger>
          <TabsTrigger value="ai">AI Review</TabsTrigger>
        </TabsList>
        <TabsContent value="description">
          <p className="mt-2 lg:mt-5 text-base/7">{product?.description}</p>
        </TabsContent>

        <TabsContent value="ai">
          {activeTab === "ai" && (
            <AISummary section="product_info" product={product} />
          )}
        </TabsContent>
      </Tabs>
    </>
  );
}
