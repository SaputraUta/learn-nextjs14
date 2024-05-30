"use client";
import { notFound } from "next/navigation";

function getRandomInt(n: number) {
  return Math.floor(Math.random() * n);
}
export default function ReviewDetail({ params }: { params: { productId: string, reviewId: string } }) {
  const random = getRandomInt(2);
  if (random === 1){
    throw new Error("Error loading review");
  }
  if (parseInt(params.reviewId) > 10) {
    notFound();
  }
  return (
    <h1>Review {params.reviewId} for product {params.productId}</h1>
  )
}
