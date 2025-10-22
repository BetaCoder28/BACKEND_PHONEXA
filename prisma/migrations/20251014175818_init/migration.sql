/*
  Warnings:

  - You are about to drop the `alfabeto_aeronautico` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "public"."alfabeto_aeronautico";

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

-- CreateIndex
CREATE UNIQUE INDEX "alphabet_letter_key" ON "public"."alphabet"("letter");

-- CreateIndex
CREATE UNIQUE INDEX "alphabet_code_key" ON "public"."alphabet"("code");
