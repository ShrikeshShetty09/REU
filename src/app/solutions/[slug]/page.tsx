import { notFound } from "next/navigation";
import { DetailPageSection } from "@/components/DetailPage";
import { allDetails, getDetailBySlug, getRelatedByCategory } from "@/data/siteContent";

type PageProps = {
  params: { slug: string };
};

export function generateStaticParams() {
  return allDetails
    .filter((detail) => detail.category === "solution")
    .map((detail) => ({ slug: detail.slug }));
}

export default function SolutionDetailPage({ params }: PageProps) {
  const detail = getDetailBySlug(params.slug);
  if (!detail || detail.category !== "solution") {
    notFound();
  }

  const related = getRelatedByCategory("solution", detail.slug);

  return (
    <DetailPageSection
      detail={detail}
      related={related}
      categoryLabel="Solutions"
      backHref="/solutions/oil-and-gas"
    />
  );
}
