-- CreateTable
CREATE TABLE "Post" (
    "id" TEXT NOT NULL,
    "title" TEXT,
    "description" TEXT,
    "likeCount" INTEGER NOT NULL,
    "author" TEXT,

    CONSTRAINT "Post_pkey" PRIMARY KEY ("id")
);
