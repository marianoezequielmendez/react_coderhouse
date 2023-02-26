import React from "react";
import { doc, getDoc, getFirestore } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = () => {
  const [product, setProduct] = useState("");
  const item = useParams();

  useEffect(() => {
    const db = getFirestore();
    const empanada = doc(db, "empanadas", `${item.id}`);
    getDoc(empanada).then((snapshot) => {
      if (snapshot.exists()) {
        setProduct({ id: snapshot.id, ...snapshot.data() });
      }
    });
  }, []);

  return (
    <>
      <ItemDetail product={product} />
    </>
  );
};

export default ItemDetailContainer;
