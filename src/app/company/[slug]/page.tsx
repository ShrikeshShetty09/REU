import { notFound } from "next/navigation";
import { DetailPageSection } from "@/components/DetailPage";
import { allDetails, getDetailBySlug, getRelatedByCategory } from "@/data/siteContent";

type PageProps = {
  params: { slug: string };
};

export function generateStaticParams() {
  return allDetails
    .filter((detail) => detail.category === "company")
    .map((detail) => ({ slug: detail.slug }));
}

export default function CompanyDetailPage({ params }: PageProps) {
  const detail = getDetailBySlug(params.slug);
  if (!detail || detail.category !== "company") {
    notFound();
  }

  const related = getRelatedByCategory("company", detail.slug);

  return (
    <DetailPageSection
      detail={detail}
      related={related}
      categoryLabel="Company"
      backHref="/company/leadership-team"
    />
  );
}
