/*
  Warnings:

  - You are about to drop the column `delivaryFee` on the `Restaurant` table. All the data in the column will be lost.
  - You are about to drop the column `delivaryTimeMinutes` on the `Restaurant` table. All the data in the column will be lost.
  - Added the required column `deliveryFee` to the `Restaurant` table without a default value. This is not possible if the table is not empty.
  - Added the required column `deliveryTimeMinutes` to the `Restaurant` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Restaurant" DROP COLUMN "delivaryFee",
DROP COLUMN "delivaryTimeMinutes",
ADD COLUMN     "deliveryFee" DECIMAL(10,2) NOT NULL,
ADD COLUMN     "deliveryTimeMinutes" INTEGER NOT NULL;
