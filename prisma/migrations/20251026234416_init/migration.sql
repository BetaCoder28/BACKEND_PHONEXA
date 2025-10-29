-- CreateTable
CREATE TABLE "public"."User" (
    "idUser" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "email" VARCHAR(255) NOT NULL,
    "password" VARCHAR(255) NOT NULL,
    "isPremiumUser" VARCHAR(10),

    CONSTRAINT "User_pkey" PRIMARY KEY ("idUser")
);

-- CreateTable
CREATE TABLE "public"."alphabet" (
    "idAlpabet" SERIAL NOT NULL,
    "letter" TEXT NOT NULL,
    "code" TEXT NOT NULL,
    "pronunciation" TEXT,
    "audioUrl" TEXT,
    "iconUrl" TEXT,

    CONSTRAINT "alphabet_pkey" PRIMARY KEY ("idAlpabet")
);

-- CreateTable
CREATE TABLE "public"."flashCards" (
    "idFlashCards" SERIAL NOT NULL,
    "phrase" VARCHAR(255) NOT NULL,
    "imageId" INTEGER,
    "soundId" INTEGER,

    CONSTRAINT "flashCards_pkey" PRIMARY KEY ("idFlashCards")
);

-- CreateTable
CREATE TABLE "public"."images" (
    "idImage" SERIAL NOT NULL,
    "imageUrl" VARCHAR(2048) NOT NULL,

    CONSTRAINT "images_pkey" PRIMARY KEY ("idImage")
);

-- CreateTable
CREATE TABLE "public"."sounds" (
    "idSound" SERIAL NOT NULL,
    "soundUrl" VARCHAR(2048) NOT NULL,

    CONSTRAINT "sounds_pkey" PRIMARY KEY ("idSound")
);

-- CreateTable
CREATE TABLE "public"."quizz" (
    "idQuizz" SERIAL NOT NULL,
    "question" TEXT NOT NULL,
    "answer" TEXT NOT NULL,

    CONSTRAINT "quizz_pkey" PRIMARY KEY ("idQuizz")
);

-- CreateTable
CREATE TABLE "public"."aeronauticalAlphabetCards" (
    "id" SERIAL NOT NULL,
    "text" VARCHAR(255) NOT NULL,
    "imageUrl" VARCHAR(2048),
    "audioUrl" VARCHAR(2048),
    "pronunciation" VARCHAR(255),

    CONSTRAINT "aeronauticalAlphabetCards_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "public"."User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "alphabet_letter_key" ON "public"."alphabet"("letter");

-- CreateIndex
CREATE UNIQUE INDEX "alphabet_code_key" ON "public"."alphabet"("code");

-- AddForeignKey
ALTER TABLE "public"."flashCards" ADD CONSTRAINT "flashCards_imageId_fkey" FOREIGN KEY ("imageId") REFERENCES "public"."images"("idImage") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."flashCards" ADD CONSTRAINT "flashCards_soundId_fkey" FOREIGN KEY ("soundId") REFERENCES "public"."sounds"("idSound") ON DELETE SET NULL ON UPDATE CASCADE;
