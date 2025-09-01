/*
  Warnings:

  - Added the required column `txnHash` to the `Transaction` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "public"."Transaction" ADD COLUMN     "txnHash" TEXT NOT NULL;
