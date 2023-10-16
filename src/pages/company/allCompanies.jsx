import React from 'react';
import { Link } from 'react-router-dom';

const companiesData = [
  {
    id: 1,
    name: 'Company A',
    files: [
      {
        id: 101,
        date: '2023-09-15',
        fileName: 'File 1',
        sender: 'John Doe',
        assignToID: 'user123',
        comment: 'This is the first file.',
        fileData: 'Lorem ipsum dolor sit amet.',
      },
      {
        id: 102,
        date: '2023-09-16',
        fileName: 'File 2',
        sender: 'Alice Smith',
        assignToID: 'user456',
        comment: 'Another file with a comment.',
        fileData: 'Consectetur adipiscing elit.',
      },
    ],
  },
  {
    id: 2,
    name: 'Company B',
    files: [
      {
        id: 103,
        date: '2023-09-15',
        fileName: 'File 3',
        sender: 'Boye Doe',
        assignToID: 'user123',
        comment: 'This is the first file.',
        fileData: 'Lorem ipsum dolor sit amet.',
      },
      {
        id: 104,
        date: '2023-09-16',
        fileName: 'File 4',
        sender: 'Febisola Huzinah',
        assignToID: 'user456',
        comment: 'Another file with a comment.',
        fileData: 'Consectetur adipiscing elit.',
      },
    ],
  },
  {
    id: 3,
    name: 'Company C',
    files: [
      {
        id: 105,
        date: '2023-09-15',
        fileName: 'File 3',
        sender: 'Boye Doe',
        assignToID: 'user123',
        comment: 'This is the first file.',
        fileData: 'Lorem ipsum dolor sit amet.',
      },
      {
        id: 106,
        date: '2023-09-16',
        fileName: 'File 4',
        sender: 'Febisola Huzinah',
        assignToID: 'user456',
        comment: 'Another file with a comment.',
        fileData: 'Consectetur adipiscing elit.',
      },
    ],
  },

];

const AllCompanies = () => {
  return (
    <div>
      <h1>All Companies</h1>
      <ul>
        {companiesData.map((company) => (
          <li key={company.id}>
            <Link to={`/company/${company.id}`}>{company.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AllCompanies;
