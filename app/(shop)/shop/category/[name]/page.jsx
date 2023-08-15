// import HomeOne from "@/components/homes/home";
import Preloader from "@/components/common/Preloader";
import Courses from "@/components/homes/courses/Courses";
import FooterOne from "@/components/layout/footers/FooterOne";
import Header from "@/components/layout/headers/Header";





export const metadata = {
  title: 'Home-1 || Educrat - Professional LMS Online Education Course NextJS Template',
  description:
    'Elevate your e-learning content with Educrat, the most impressive LMS template for online courses, education and LMS platforms.',
  
}

export default function HomePage() {
  return (
    
    <>
    <Preloader/>
    <Header />
    
    <div className="content-wrapper  js-content-wrapper overflow-hidden">
    

      <Courses/>
     
      <FooterOne/>
      
      
    </div>
  </>
  );
}
