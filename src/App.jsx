// import React from 'react'
// import Navbar from './components/Navbar';
// import {BrowserRouter  , Routes , Route} from "react-router-dom";
// import Dashboard from './pages/Dashboard';
// import Clasroom from './pages/Clasroom';
// import Assessments from './pages/Assessments';
// import Store from './pages/Store';
// import Calender from './pages/Calender';
// import News from './pages/News';
// import Blog from './pages/Blog';
// import PageNotFound from './pages/PageNotFound';
// import Profile from './pages/Profile';
// import MyAccount from './pages/MyAccount';
// import MySettings from './pages/MySettings';
// const App = () => {
//   return (
//     <BrowserRouter>
//         <Navbar/>
//         <Routes>
//             <Route path='/' element={<Dashboard/>}/>
//             <Route path='/classroom' element={<Clasroom/>}/>
//             <Route path='/assessment' element={<Assessments/>}/>
//             <Route path='/store' element={<Store/>}/>
//             <Route path='/calender' element={<Calender/>}/>
//             <Route path='/news' element={<News/>}/>
//             <Route path='/blog' element={<Blog/>}/>
//             <Route path='/profile' element={<Profile/>}>
//               <Route path='/profile/myaccount' element={<MyAccount/>}/>
//               <Route path='/profile/mysettings' element={<MySettings/>}/>
//               </Route>
//             <Route path='*' element={<PageNotFound/>}/>
//         </Routes>
//     </BrowserRouter>
//   )
// }

// export default App

// import React from 'react'
// import Navbar from './components/Navbar'
// import { BrowserRouter,Route,Routes } from 'react-router-dom'
// import Assessment from "./pages/Assessment"
// import Dashboard from "./pages/Dashboard"
// import Classrooms from "./pages/Classrooms"
// import Store from "./pages/Store"
// import Calender from "./pages/Calender"
// import News from "./pages/News"
// import Blog from "./pages/Blog"
// import Pagenotfound from './pages/Pagenotfound'
// import Profile from './pages/Profile'
// import Myaccount from './pages/Myaccount'
// import Myseetings from './pages/Myseetings'

// const App = () => {
//   return (
//         <BrowserRouter>
//          <Navbar/>
//          <Routes>
//           <Route path="/" element={<Dashboard/>}/>
//           <Route path="/classrooms" element={<Classrooms/>}/>
//           <Route path="/assessment" element={<Assessment/>}/>
//           <Route path="/store" element={<Store/>}/>
//           <Route path="/calender" element={<Calender/>}/>
//           <Route path="/news" element={<News/>}/>
//           <Route path="/blog" element={<Blog/>}/>
//           <Route path="/profile" element={<Profile/>}>
//           <Route path="/profile/accounts" element={<Myaccount/>}/>
//           <Route path="/profile/settings" element={<Myseetings/>}/>
//           </Route>
//           <Route path="*" element={<Pagenotfound/>}/>
//          </Routes>
//          </BrowserRouter>
    
//   )
// }

// export default App
import React from 'react'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import Home from './components/crudcomponents/Home'
import Edit from './components/crudcomponents/Edit'
import Create from './components/crudcomponents/Create'
import {ToastContainer} from "react-toastify"
const App = () => {
  return (
    <BrowserRouter>
    <ToastContainer/>
    <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/create" element={<Create/>}/>
    <Route path="/edit/:id" element={<Edit/>}/>

    </Routes>
    </BrowserRouter>
  )
}

export default App