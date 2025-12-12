import { notFound } from "next/navigation"
import { JetDetails } from "@/components/jets/jet-details"
import { jets } from "@/lib/jets"

export default async function JetDetailPage({ 
  params 
}: { 
  params: Promise<{ id: string }> 
}) {
  const { id } = await params
  const jet = jets.find((j) => j.id === id)

  if (!jet) {
    notFound()
  }

  return (
    <div className="pt-20 pb-24">
      <JetDetails jet={jet} />
    </div>
  )
}

