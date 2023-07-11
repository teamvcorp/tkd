// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
// import type { NextApiRequest, NextApiResponse } from "next";
// import {  FOCUS, PrismaClient } from "@prisma/client";

// const prisma = new PrismaClient();
// type Data = {
//   name: string;
// };

// export default async function handler(
//   req: NextApiRequest,
//   res: NextApiResponse<Data>
// ) {
//   //   await prisma.table.deleteMany();
//   // await prisma.review.deleteMany();
//   // await prisma.item.deleteMany();
//   // await prisma.restaurant.deleteMany();
//   // await prisma.location.deleteMany();
//   // await prisma.cuisine.deleteMany();
//   // await prisma.user.deleteMany();


//   await prisma.family.createMany({
//     data: [
//       // INDIAN //
//       {
//         name: "Vivaan - fine Indian",
//         family_image:
//           "https://resizer.otstatic.com/v2/photos/wide-huge/1/32109459.jpg",
//         family_gallery: [""],
//         bio:
//           "We are a family looking to have better home dynamics",
//        focus: FITNESS,

//         slug: "vivaan-fine-indian-cuisine-ottawa",
       
//       },
//     ]})
//   await prisma.student.createMany({
//     data: [
//       {
//         name: "Ghee roast chicken wings",
//         description:
//           "Crispy chicken wings coated in a sauce made from roasted whole spices and clarified butter.",
//         price: "$18.00",
//         restaurant_id: vivaanId,
//       },
//     ]})