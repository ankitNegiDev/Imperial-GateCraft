import { Suspense } from "react";
import ProductsPageClient from "./ProductsPageClient.jsx";

export default function Home() {
    return (
        <Suspense fallback={<div className="text-white text-center p-10">Loading...</div>}>
            <ProductsPageClient />
        </Suspense>
    );
}
