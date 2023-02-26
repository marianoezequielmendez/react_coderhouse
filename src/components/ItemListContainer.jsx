import React from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { collection, getDocs, getFirestore } from "firebase/firestore";
import { Heading, Center } from "@chakra-ui/react";

const ItemListContainer = () => {
  const { category } = useParams();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const db = getFirestore();

    const itemsCollection = collection(db, "empanadas");
    getDocs(itemsCollection).then((snapshot) => {
      setProducts(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
    });
  }, []);

  if (category === undefined) {
    return (
      <div className="">
        <ItemList products={products} />
      </div>
    );
  } else {
    const filterCategory = products.filter(
      (item) => item.categoria === category
    );
    return (
      <>
        <Center h="100px" color="black">
          <Heading as="h2" size="2xl">
            {category !== "Clasicas" ? `${category}` : "Clásicas"}
          </Heading>
        </Center>
        {filterCategory ? (
          <ItemList products={filterCategory} />
        ) : (
          <ItemList products={products} />
        )}
      </>
    );
  }
};

export default ItemListContainer;
