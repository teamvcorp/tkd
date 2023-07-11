import { PrismaClient } from "@prisma/client";
import React from "react";

const prisma = new PrismaClient();

const getStudentDetailsbySlug = async (slug) => {
  const student = await prisma.family.findUnique({
    where: {
      slug,
    },
  });
  return student
};

const StudentDetails = async ({ params }) => {
  const student = await getStudentDetailsbySlug(params.slug);
  console.log(student)
  return <div>{student}</div>;
};

export default StudentDetails;
