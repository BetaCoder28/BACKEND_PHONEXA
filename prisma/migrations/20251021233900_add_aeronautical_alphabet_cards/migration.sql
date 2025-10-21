-- CreateTable
CREATE TABLE "public"."aeronauticalAlphabetCards" (
    "id" SERIAL NOT NULL,
    "text" VARCHAR(255) NOT NULL,
    "imageUrl" VARCHAR(2048),
    "pronunciation" VARCHAR(255),

    CONSTRAINT "aeronauticalAlphabetCards_pkey" PRIMARY KEY ("id")
);
