import { Outlet } from 'react-router-dom'
import Navbar from '../Navbar/Navbar'

export default function Layout() {
  return (
    <div>
         {/* لى بنستخدم الكمبوننت ده مهو ممكن نعرض كل المكونات زى ما بنعرض ال layout  بالظبط وطبعا ال  layout  بتتعرض اول ما يكون المسار فاضى ومش بتحتاج  outlet  يعرضها 
         لى بقا المكونات التانيه بتحتاج  outlet  بكل بساطه عشان هما  cheildren  لل  layout  لكن هما لو على نفس مستوى ال  layout  مش هنحتتاج ال  outlet 
         وبعدين تعريف ال  outlet  هو او هى اللى بتبص على اى  children <Route> <Route/> component  وبتبتدى تعرضه مطرح ما بحط ال  outlet بكل بساطه لو عاوز تعرف الفرق شيل ال  outlet  وخلى 
         ال routes  اللى داخل ال layout  على نفس مستواها */}
         <Navbar />
         <Outlet/>
      
    </div>
  )
}

// لى بنستخدم الهوكس فى التوب ليفل واشرحلى مراحل الريندر والري ريندر