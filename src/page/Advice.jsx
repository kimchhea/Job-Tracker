import Sidebar from "../components/Sidebar";
import { Teachjobs } from "../data/advice";
export const SidebarPage = () => {
  return (
    <section className="col-2  border border-dark border-1 mt-3 rounded px-3">
      <h1 className="pt-4 fs-5 fw-bold">Try to find internships ?</h1>
      <div className="col-12 card-img rounded overflow-hidden ">
        <img
          src="https://i.pinimg.com/736x/70/a7/88/70a788952d27643ea43f9d571665a528.jpg"
          alt="poster-one"
        />
      </div>
      <div className="col-12 card-img rounded overflow-hidden mt-4">
        <img
          src="https://i.pinimg.com/736x/d0/fc/90/d0fc90a50f18a0e1b5e8e14630fbe050.jpg"
          alt="poster-two"
        />
      </div>
    </section>
  );
};
const Advice = () => {
  return (
    <div className="container-fluid ">
      <div className="col-12 main-card rounded rounded-2 px-3">
        <div className="d-flex gap-2 justify-content-between">
          <div className="col-7 card-text">
            <h1 className="py-2 fw-bold">Your Career Journey Starts Here</h1>
            <h2>
              opportunities don't happen. You create them." – Chris Grosser
            </h2>
            <p className="fs-4 py-2">
              Take control of your career path with our Job Tracker. Whether
              you're applying for your first job or aiming for your dream role,
              this tool helps you stay organized, track applications, and make
              informed decisions. Simplify your job search, set goals, and turn
              opportunities into achievements.Organize all your applications,
              set reminders, and track progress—all in one place. With the right
              tools, success is just a step away.
            </p>
          </div>
          <div className="col-4 bg-dark">
            <img
              src="https://i.pinimg.com/736x/78/74/a6/7874a6f1958c033adbbad01450805ba2.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="col-12 mt-3 px-3">
        <div className="row d-flex justify-content-around ">
          <Sidebar></Sidebar>
          <section className="col-6 border border-2 border-dark rounded py-3 px-3 mt-3">
            <div className="col-12 d-flex justify-content-around bg-secondary px-3 py-3 rounded rounded-2">
              <input type="text" id="advice" className="form-control " />
              <button className="btn btn-danger px-4 fs-5 py-2 mx-2">
                Reset
              </button>
              <button className="btn btn-success px-4 fs-5 py-2">Search</button>
            </div>
            <section className="col-12 mt-2 py-2 ">
              {Teachjobs.map((data, index) => (
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
          <SidebarPage></SidebarPage>
        </div>
      </div>
    </div>
  );
};

export default Advice;
