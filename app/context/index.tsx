import React, { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
import { useSession } from "next-auth/react";

// Define the context type
interface ContextType {
  getrecord: Record[] | undefined;
  getData: ID | undefined;
}

// Define the record interface
interface Record {
  Percentage: string;
  Correctawn: string;
  Wrongawn: string;
  subjectname: string;
  createdAt: string;
}

// Define the ID interface
interface ID {
  id: string;
}

// Create the context
const AppContext = createContext<ContextType>({ getrecord: undefined, getData: undefined });

// Context provider component
export function AppWrapper({ children }: { children: React.ReactNode }) {
  const { data: session, status } = useSession();
  const [getData, setData] = useState<ID>();
  const [getrecord, setrecord] = useState<Record[]>();

  useEffect(() => {
    const fetchData = async () => {
      if (!session?.user?.email) return;

      try {
        const response = await axios.post(
          "/api/Getuserid",
          { email: session.user.email },
          { headers: { "Cache-Control": "no-store" } }
        );
        setData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [session]);

  useEffect(() => {
    const fetchResult = async () => {
      if (!getData?.id) return;

      try {
        const response = await axios.post(
          "/api/Service/Subrecord",
          { userId: getData.id },
          { headers: { "Cache-Control": "no-store" } }
        );
        setrecord(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchResult();
  }, [getData]);

  return (
    <AppContext.Provider value={{ getrecord, getData }}>
      {children}
    </AppContext.Provider>
  );
}

// Custom hook to consume the context
export function useAppContext() {
  return useContext(AppContext);
}
