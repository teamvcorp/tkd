import { PrismaClient } from "@prisma/client";
import StudentCard from "../../components/studentCard";
const prisma = new PrismaClient();

const fetchFamily = async () => {
  const families = await prisma.family.findMany({
    select: {
      id: true,
      name: true,
      slug: true,
      students: true,
    },
  });
  return families;
};

const Dashboard = async () => {
  const fam = await fetchFamily();
  console.log({ fam });

  return (
    <div>
       {fam.map((family) => (
        <StudentCard family={family} />
      ))} 
    </div> 
  );
};

export default Dashboard;
