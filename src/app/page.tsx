import { SignedIn, SignedOut } from "@clerk/nextjs";
import { headers } from "next/headers";
import { db } from "~/server/db";

export const dynamic = "force-dynamic";

async function Images() {
  const images = await db.query.images.findMany({
    orderBy: (model, { desc }) => desc(model.id),
  });

  return (
    <div className="flex flex-wrap gap-4">
      {[...images, ...images, ...images].map((image, index) => (
        <div key={`${image.id}-${index}`} className="flex w-48 flex-col">
          <img src={image.url} alt={`image${image.id}`} />
          <div>{image.name}</div>
        </div>
      ))}
    </div>
  );
}

export default async function HomePage() {
  return (
    <main className="flex">
      <SignedOut>
        <div className="flex h-full w-full items-center justify-center">
          Please sign in to view the gallery.
        </div>
      </SignedOut>
      <SignedIn>
        <Images />
      </SignedIn>
    </main>
  );
}
