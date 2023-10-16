import React from 'react';
import Search from "../../components/Search";
import "./dashboard.css";

const Dashboard = () => {
  return (
    <div>
      <h1>Welcome To Dashboard</h1>
      <div>
        <Search />
        <section className="Files">
      {/* <div>
        <a href="/total-documents">
          <h3 className="text-center text-coolGray-500 font-medium">
            Total Documents
          </h3>
          <h2 className="text-center font-medium text-5xl text-coolGray-900 tracking-tighter">
            21
          </h2>
        </a>
      </div> */}
      <div>
        <a href="/approved-documents">
          <h3 className="text-center text-coolGray-500 font-medium">
            Approved Document
          </h3>
          <h2 className="text-center font-medium text-5xl text-coolGray-900 tracking-tighter">
            17
          </h2>
        </a>
      </div>
      <div>
        <a href="/pending-documents">
          <h3 className="text-center text-coolGray-500 font-medium">
            Pending Document
          </h3>
          <h2 className="text-center font-medium text-5xl text-coolGray-900 tracking-tighter">
            21
          </h2>
        </a>
      </div>
      <div>
        <a href="/unapproved-documents">
          <h3 className="text-center text-coolGray-500 font-medium">
            Unapproved Document
          </h3>
          <h2 className="text-center font-medium text-5xl text-coolGray-900 tracking-tighter">
            38
          </h2>
        </a>
      </div>
    </section>
      </div>
    </div>
  )
}

export default Dashboard;
