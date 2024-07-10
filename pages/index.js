import Course from "@/components/templates/index/Course";
import coursesModel from "@/models/course";
import connectToDB from "@/utils/db";


const index = ({course}) => {
  return <Course data={course} />;
};

export async function getStaticProps(context) {
  connectToDB();
  const courses = await coursesModel.find({});
  return {
    props: {
    course: JSON.parse(JSON.stringify(courses)),
    revalidate:  60*60*12
    },
  };
}

export default index;
