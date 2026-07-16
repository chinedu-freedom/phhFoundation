const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  console.log("Updating Healthcare blog post image in database...");
  const updated = await prisma.blogPost.updateMany({
    where: {
      title: "Overcoming Healthcare Challenges in Rural Communities"
    },
    data: {
      image: "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?w=800&auto=format&fit=crop&q=60"
    }
  });
  console.log(`Updated ${updated.count} blog post(s).`);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
