import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar.jsx';
import Dashboard from './pages/dashboard/Dashboard.jsx';
import AllCompanies from './pages/company/allCompanies.jsx';
import NewDocument from './pages/document/newDocument.jsx';
import Folder from './pages/folder/folder.jsx';
import OfficialAssignment from './pages/official/officialAssignment.jsx';
import Task from './pages/task/task.jsx';
// import LandingPage from './pages/homePages/LandingPage.jsx';
import CompanyDetail from './pages/company/CompanyDetail.jsx'; 
import FileDetail from './pages/company/FileDetail.jsx'; 
import Login from './components/accessPages/Login.jsx';
import SignUp from './components/accessPages/SignUp.jsx';
import './App.css';





const App = () => {

  return (
      <Sidebar>
        <Routes>
          <Route path="/" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          {/* <Route path="/signup" element={<SignUp />} /> */}
          <Route path="/allCompanies" element={<AllCompanies />} />
          <Route path="/folder" element={<Folder />} />
          <Route path="/newDocument" element={<NewDocument />} />
          <Route path="/officialAssignment" element={<OfficialAssignment />} />
          <Route path="/task" element={<Task />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/company/:companyId" element={<CompanyDetail />} />
          <Route path="/company/:companyId/file/:fileId" element={<FileDetail />} />
        </Routes>
      </Sidebar>
  );
};

export default App;