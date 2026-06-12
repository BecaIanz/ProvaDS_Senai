/*
  Warnings:

  - You are about to drop the column `createAd` on the `ticket` table. All the data in the column will be lost.
  - Added the required column `finishedAt` to the `Ticket` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `ticket` DROP COLUMN `createAd`,
    ADD COLUMN `createAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    ADD COLUMN `finishedAt` DATETIME(3) NOT NULL;
