import { Teachjobs } from "../data/advice";
import { useState } from "react";
const normalizeText = (text) => {
  return text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "") // Remove diacritics
    .replace(/[^a-z0-9\s]/g, "") // Remove all non-alphanumeric characters
    .trim() // Remove extra spaces
    .replace(/\s+/g, ""); // Replace multiple spaces with a single space
};
const Advice_components = () => {
  const [query, setQuery] = useState("");
  const [filterData, setFilterData] = useState(Teachjobs);

  const handleFilter = () => {
    const normalizeQuery = normalizeText(query);
    const filtered = Teachjobs.filter((data) => {
      const NormalizeRole = normalizeText(data.role);
      const NormalizePro = data.advantages.map((data) => normalizeText(data));
      const NormalizeCon = data.disadvantages.map((data) =>
        normalizeText(data)
      );
      const NormalizeAdvice = data.advice.map((data) => normalizeText(data));
      console.log("advice",NormalizeAdvice);
      console.log(NormalizeCon);
      return (
        NormalizeAdvice.includes(normalizeQuery) ||
        NormalizeRole.includes(normalizeQuery) ||
        NormalizePro.includes(normalizeQuery) ||
        NormalizeCon.includes(normalizeQuery)
      );
    });
    console.log("Filtered Data:", filtered);
    setFilterData(filtered);
    // console.log("is :" ,filtered)
  };
  const Reset = () => {
    setQuery("");
    setFilterData(Teachjobs);
  };
  //   console.log("Normalized Query:", query);

  return (
    <section className="col-6 border border-2 border-dark rounded py-3 px-3 mt-3">
      <div className="col-12 d-flex justify-content-around bg-secondary px-3 py-3 rounded rounded-2">
        <input
          type="text"
          className="form-control "
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button className="btn btn-danger px-4 fs-5 py-2 mx-2" onClick={Reset}>
          Reset
        </button>
        <button
          className="btn btn-success px-4 fs-5 py-2"
          onClick={handleFilter}
        >
          Search
        </button>
      </div>
      <section className="col-12 mt-2 py-2 ">
        {filterData.map((data, index) => (
          <div
            key={index}
            className="card-advice border border-dark border-1 px-2 py-2 rounded rounded-2 mb-3"
          >
            <h3>{data.role}</h3>
            {data.advice.map((data, index) => (
              <span className="fs-5" key={index}>
                {data}
              </span>
            ))}
            <ul className="fs-5 fw-bold ">Advantages : </ul>
            {data.advantages.map((data, index) => (
              <li key={index} className="fs-5 ps-4">
                {data}
              </li>
            ))}
            <ul className="fs-5 fw-bold pt-2">Disadvantages : </ul>
            {data.disadvantages.map((data, index) => (
              <li key={index} className="fs-5  ps-4">
                {data}
              </li>
            ))}
          </div>
        ))}
      </section>
    </section>
  );
};

export default Advice_components;
