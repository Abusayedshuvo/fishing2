import React, { useEffect, useState } from "react";
import Team from "./Team";

const Teams = () => {
  const [teams, setTeams] = useState([]);
  useEffect(() => {
    fetch("/teams.json")
      .then((res) => res.json())
      .then((data) => setTeams(data));
  }, []);
  return (
    <>
      <div className="container mx-auto py-20">
        <div className="text-center">
          <p className="text-3xl xl:text-[53px] font-bold veneer pb-4">
            MEET OUR TEAM
          </p>
          <hr className="w-20 border-orange-500 border-t-4 mx-auto" />

          <p className="pt-3">
            Meet Our Diverse and Dedicated Team of Industry-Leading Experts
            Ready
            <br />
            to Serve You with Excellence and Expertise
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 pt-10 gap-5 text-center">
          {teams?.slice(0, 5).map((team) => (
            <Team key={team.id} team={team}></Team>
          ))}
        </div>
        <div className="text-center pt-20">
          <button className="font-bold border-2  border-orange-500 text-black px-10 py-3 bg-orange-500 hover:bg-black hover:text-orange-500 hover:transition-all hover:duration-300 transition-all duration-300">
            VIEW ALL
          </button>
        </div>
      </div>
    </>
  );
};

export default Teams;
