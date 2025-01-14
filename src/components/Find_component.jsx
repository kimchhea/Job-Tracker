import { useState } from "react";
import { homepage } from "../data/homepage";

const normalizeText = (text) => {
  return text
    .toLowerCase() // Convert to lowercase
    .replace(/[_-]/g, " ") // Replace underscores and dashes with spaces
    .replace(/\s+/g, " ") // Replace multiple spaces with a single space
    .trim(); // Remove extra spaces
};

const Find_component = () => {
  const [query, setQuery] = useState(""); // Input query state
  const [filteredResults, setFilteredResults] = useState(homepage); // Filtered results state

  // Handle filtering when the button is clicked
  const handleSearch = () => {
    const normalizedQuery = normalizeText(query); // Normalize the query

    const filtered = homepage.filter((data) => {
      // Normalize each data field before comparison
      const normalizedRole = normalizeText(data.role);
      const normalizedCompanyName = normalizeText(data.company_name);
      const normalizedLocation = normalizeText(data.location);
      const normalizedDescription = normalizeText(data.description);
      const normalizedTypes = data.type.map((type) => normalizeText(type));

      return (
        normalizedRole.includes(normalizedQuery) ||
        normalizedCompanyName.includes(normalizedQuery) ||
        normalizedLocation.includes(normalizedQuery) ||
        normalizedDescription.includes(normalizedQuery) ||
        normalizedTypes.some((type) => type.includes(normalizedQuery))
      );
    });

    setFilteredResults(filtered); // Update results state
  };

  return (
    <section className="card-find col-9 mt-2">
      <div className="col-12">
        {/* Search Input */}
        <div className="d-flex">
          <input
            type="text"
            placeholder="Search for jobs..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="form-control me-2"
          />
          <button className="btn btn-primary" onClick={handleSearch}>
            Search
          </button>
        </div>

        {/* Search Result Count */}
        <p className="fs-2 ps-2 mt-3">
          Search result:{" "}
          <span>
            <button className="btn btn-warning">
              {filteredResults.length}
            </button>
          </span>
        </p>

        {/* Display Filtered Results */}
        {filteredResults.map((data, index) => (
          <div
            key={index}
            className="box-finding-job col-12 ms-2 mt-3 rounded rounded-3 border border-dark p-3"
          >
            {/* Card Top */}
            <div className="col-12 card-job-top d-flex justify-content-between">
              {/* Card Left */}
              <div className="d-flex">
                <div className="logo col-1">
                  <div className="col-12 w-100 h-75 rounded rounded-1 overflow-hidden">
                    <img src={data.logo} alt="" />
                  </div>
                </div>
                <div>
                  <h5 className="card-job-title fw-bold text-dark fs-3 ps-2">
                    {data.role}
                  </h5>
                  <div className="d-flex">
                    <p className="fs-5 ps-2 text-dark fw-bold">
                      {data.company_name}
                    </p>
                    {data.type.map((value, index) => (
                      <p
                        key={index}
                        className="ms-2 bg-warning px-2 pt-1 rounded rounded-2"
                      >
                        {value}
                      </p>
                    ))}
                    <p className="ps-1 fs-5 text-dark fw-bold">
                      {data.salary}$ / Month
                    </p>
                  </div>
                </div>
                <hr />
              </div>
              {/* Card Right */}
              <div className="card-location col-3 fs-5 text-dark">
                <p>{data.location}</p>
                <p>{data.postTime}</p>
              </div>
            </div>
            {/* Card Bottom */}
            <li className="text-dark ps-2">{data.description}</li>
          </div>
        ))}

        {/* No Results Found */}
        {filteredResults.length === 0 && (
          <p className="text-danger text-center mt-3 fs-4">
            No jobs match your search :) 
          </p>
        )}
      </div>
    </section>
  );
};

export default Find_component;
