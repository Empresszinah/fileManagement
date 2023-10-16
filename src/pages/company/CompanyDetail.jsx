import React from 'react';
import { useParams, Link } from 'react-router-dom'; 
import { companiesData } from './data'; 

const CompanyDetail = () => {
  const { companyId } = useParams();
  const company = companiesData.find((c) => c.id === parseInt(companyId));

  if (!company) {
    return <div>Company not found</div>;
  }

  return (
    <div>
      <h2>{company.name}</h2>
      <ul>
        {company.files.map((file) => (
          <li key={file.id}>
            <Link to={`/company/${companyId}/file/${file.id}`}>
              {file.fileName}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CompanyDetail;
