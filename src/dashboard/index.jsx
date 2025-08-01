import AddResume from "./components/AddResume";
import { useContext, useEffect, useState } from "react";
import ResumeItem from "./components/ResumeItem";
import { UserContext } from "@/context/UserContext";
import { getFirestore, collection, getDocs } from "firebase/firestore";
import { app } from "../utils/firebase_config";
import Header from "@/components/custom/Header";

const Dashboard = () => {
  const { user } = useContext(UserContext);
  const [resumeList, setResumeList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (user?.email) {
      getResumesList();
    }
  }, [user]);

  const getResumesList = async () => {
    try {
      setLoading(true);
      const db = getFirestore(app);
      const resumesRef = collection(db, "usersByEmail", user.email, "resumes");
      const querySnapshot = await getDocs(resumesRef);

      const resumes = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      console.log("Resumes fetched from Firestore:", resumes);
      setResumeList(resumes);
    } catch (error) {
      console.error("Error fetching resumes: ", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
        <Header />
      <div className="p-10 md:px-20 lg:px-32">
        <h1 className="font-bold text-3xl text-gray-900 dark:text-white">My Resume</h1>
        <p className="text-gray-600 dark:text-gray-400">Start Creating AI Resume for your next job role</p>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 mt-10 gap-5">
          <AddResume />
          {loading ? (
            <div className="text-gray-600 dark:text-gray-400">Loading...</div>
          ) : resumeList.length > 0 ? (
            resumeList.map((resume) => (
              <div key={resume.id}>
                <ResumeItem resume={resume} refreshData={getResumesList} />
              </div>
            ))
          ) : (
            <div className="flex m-0 h-full items-center justify-center border border-gray-300 dark:border-gray-600 rounded-xl border-dotted">
              <p className="text-gray-600 dark:text-gray-400">No resume found</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
