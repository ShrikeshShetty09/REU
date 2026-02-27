import { notFound } from "next/navigation";
import { DetailPageSection } from "@/components/DetailPage";
import {
  allDetails,
  getDetailBySlug,
  getRelatedByCategory,
} from "@/data/siteContent";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return allDetails
    .filter((detail) => detail.category === "product")
    .map((detail) => ({ slug: detail.slug }));
}

export default async function ProductDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const detail = getDetailBySlug(slug);
  if (!detail || detail.category !== "product") {
    notFound();
  }

  const related = getRelatedByCategory("product", detail.slug);

  return (
    <DetailPageSection
      detail={detail}
      related={related}
      categoryLabel="Products"
      backHref="/products"
    />
  );
}
