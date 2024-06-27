import { db } from "~/server/db";

export const dynamic = "force-dynamic";

const mockUrls = [
  "https://utfs.io/f/711a908d-4be3-48d6-916d-1bad34f07464-s60oqj.png",
  "https://utfs.io/f/d776f9e1-a92f-4574-bbac-2ee70e0223fb-s60oqi.png",
  "https://utfs.io/f/f5d03a94-0c8c-4e40-85db-51db682834f2-s60oqh.png",
  "https://utfs.io/f/d5a3077c-f094-45f4-9d73-617175f8233e-s60oqg.png",
  "https://utfs.io/f/4d7626c4-66b1-4167-b0a5-64eeb88b4150-s60oqf.png",
  "https://utfs.io/f/d910054e-6a13-47d0-874e-01deb0182b6c-s60oqe.png",
];

const mockImages = mockUrls.map((url, index) => ({
  id: index + 1,
  url,
}));

export default async function HomePage() {
  const posts = await db.query.posts.findMany();

  console.log(posts);

  return (
    <main>
      <div className="flex flex-wrap gap-4">
        {[...mockImages, ...mockImages, ...mockImages].map((image, index) => (
          <div key={`${image.id}-${index}`} className="w-48">
            <img src={image.url} alt={`image${image.id}`} />
          </div>
        ))}
      </div>
    </main>
  );
}
