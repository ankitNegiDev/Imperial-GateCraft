import { Suspense } from "react";
import ProductsPageClient from "../products/ProductsPageClient.jsx";

export default function Home() {
    return (
        <Suspense fallback={<div className="text-white text-center p-10">Loading...</div>}>
            <ProductsPageClient />
        </Suspense>
    );
}
