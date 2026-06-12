/*
  Warnings:

  - A unique constraint covering the columns `[title]` on the table `Ticket` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE `ticket` MODIFY `createAd` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3);

-- CreateIndex
CREATE UNIQUE INDEX `Ticket_title_key` ON `Ticket`(`title`);
