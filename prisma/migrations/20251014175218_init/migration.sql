-- CreateTable
CREATE TABLE "public"."alfabeto_aeronautico" (
    "idAlpabet" SERIAL NOT NULL,
    "letter" TEXT NOT NULL,
    "code" TEXT NOT NULL,
    "pronunciation" TEXT,
    "audioUrl" TEXT,
    "iconUrl" TEXT,

    CONSTRAINT "alfabeto_aeronautico_pkey" PRIMARY KEY ("idAlpabet")
);

-- CreateIndex
CREATE UNIQUE INDEX "alfabeto_aeronautico_letter_key" ON "public"."alfabeto_aeronautico"("letter");

-- CreateIndex
CREATE UNIQUE INDEX "alfabeto_aeronautico_code_key" ON "public"."alfabeto_aeronautico"("code");
