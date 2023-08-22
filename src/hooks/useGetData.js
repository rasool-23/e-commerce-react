import { onAuthStateChanged } from "firebase/auth";
import { auth, db } from "../firebase.config";
import { useState } from "react";
import { useEffect } from "react";
import { collection, onSnapshot } from "firebase/firestore";

export const useGetData = (collectionName) => {
  const [data, setData] = useState([]);
  const collectionRef = collection(db, collectionName);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getData = async () => {
      await onSnapshot(collectionRef, (snapshot) => {
        setData(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
        setLoading(false);
      });
    };
    getData();
  }, []);

  return { data, loading };
};
