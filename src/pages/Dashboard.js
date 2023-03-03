import React, { useState, useEffect } from 'react';
import axios from 'axios';
import FilterBar from '../components/FilterBar';
import DataVis from '../components/DataVis';

function Dashboard() {
  const [data, setData] = useState([]);
  const [filters, setFilters] = useState({
    year: null,
    topics: null,
    sector: null,
    region: null,
    pest: null,
    source: null,
    swot: null,
    country: null,
    city: null,
  });

  useEffect(() => {
    axios
      .get('/api/data')
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, []);

  function applyFilters(newFilters) {
    setFilters(newFilters);
  }

  return (
    <div className="dashboard">
      <FilterBar applyFilters={applyFilters} />
      <DataVis data={data} filters={filters} />
    </div>
  );
}

export default Dashboard;
