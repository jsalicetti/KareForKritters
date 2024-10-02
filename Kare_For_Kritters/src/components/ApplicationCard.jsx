import { useEffect, useState } from "react";

function ApplicationCard({ application, index }) {
  const [accepted, setAccepted] = useState(null);
  const [pending, setPending] = useState(false);

  useEffect(() => {
    const getApp = async () => {
      const response = await fetch(
        `http://localhost:8081/application/${application.id}`
      );
      const app = await response.json();

      console.log(app);
      setPending(app.pending);
      setAccepted(app.accepted);
    };
    getApp();
  }, []);

  const handleAccept = async () => {
    try {
      await fetch(
        `http://localhost:8081/application/accept/${application.id}`,
        { method: "PUT" }
      );
      setAccepted(true);
      setPending(true);
    } catch (error) {
      console.error(error);
    }
  };

  const handleDeny = async () => {
    try {
      await fetch(`http://localhost:8081/application/deny/${application.id}`, {
        method: "PUT",
      });
      setAccepted(false);
      setPending(true);
    } catch (error) {
      console.error(error);
    }
  };
  console.log(accepted);
  return (
    <div className="flip-card w-full h-[360px] cursor-pointer perspective">
      <div className="flip-card-front w-full h-full absolute backface-hidden overflow-hidden rounded-lg">
        <div className="bg-slate-200">
          <p>Email: {application.email}</p>
          <p>Requested Pet Gender: {application.petGender}</p>
          <p>Requested Pet Age: {application.petAge}</p>
          <p>Adopted Before : {application.adoptedBefore}</p>
          <p>Living Situtaion : {application.livingSituation}</p>
          <p>Rent or Own: {application.rentOwn}</p>
          <p>Fenced Yard: {application.fencedYard}</p>
          <p>Any other pets at home: {application.petsAtHome}</p>
          <p>Children: {application.liveChildren}</p>
          <p>Any allergies: {application.homeAllergies}</p>
          <p>
            Application Status: {application.pending ? "complete" : "Pending"}
          </p>
        </div>
        {!pending ? (
          <div className="w-full">
            <button
              className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded w-1/2"
              onClick={handleAccept}
            >
              Accept
            </button>
            <button
              className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded w-1/2"
              onClick={handleDeny}
            >
              Deny
            </button>
          </div>
        ) : application.accepted || accepted ? (
          <div className="bg-green-500 text-white font-bold py-2 px-4 text-center rounded w-full">
            Accepted
          </div>
        ) : (
          <div className="bg-red-500 text-white font-bold py-2 px-4 text-center rounded w-full">
            Denied
          </div>
        )}
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
          <h3 className="text-xl font-semibold text-white">
            {application.fullName}
          </h3>
        </div>
      </div>
    </div>
  );
}

export default ApplicationCard;
